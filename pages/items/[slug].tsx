/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import CartContext, { actions } from 'context/CartContext';
import { fromImageToUrl, API_URL } from 'utils/urls';
import { calculatePriceWithModifiers, formatPrice } from 'utils/cart';
import { Item } from 'ts-defs/generated';

interface ProductProps {
  item: Item
}

const Product = ({ item }: ProductProps) => {
  const {
    image, name, price, description, toppings, variants,
  } = item;
  const router = useRouter();

  const { dispatch } = useContext(CartContext);
  const { register, handleSubmit } = useForm<{
    toppings: string[],
    variant: string,
    quantity: number,
  }>();

  const onSubmit = handleSubmit((data) => {
    const { toppings: selectedToppingsIndex, variant: selectedVariantIndex, quantity } = data;

    const selectedToppings = selectedToppingsIndex ? toppings.filter((_, i) => {
      return selectedToppingsIndex.includes(String(i));
    }) : [];

    const selectedVariant = variants.find((_, i) => selectedVariantIndex === String(i));
    const unitPrice = calculatePriceWithModifiers(item, selectedVariant, selectedToppings);

    const orderItem = {
      toppings: selectedToppings,
      variant: selectedVariant,
      quantity,
      item,
      unitPrice,
    };

    dispatch(actions.addItem(orderItem));
    router.push('/');
  });

  return (
    <>
      <Head>
        <title>{name}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="sidebar-l items-center justify-center mt-8" style={{ '--sideWidth': '375px', '--contentMin': '45%' } as React.CSSProperties}>
        <aside className="max-w-md">
          <div className="frame-l" style={{ '--n': 1, '--d': 1 } as React.CSSProperties}>
            <Image src={fromImageToUrl(image)} layout="fill" sizes="28rem" objectFit="cover" />
          </div>
        </aside>

        <section className="stack-l">
          <h1 className="h3 text-center">{name}</h1>
          <form className="stack-l" onSubmit={onSubmit}>
            <p>Variants</p>
            <div>
              <div className="flex items-center">
                <input id="regular" type="radio" name="variant" value="regular" defaultChecked />
                <label className="pl-2" htmlFor="regular">Regular</label>
                <span className="ml-auto">{formatPrice(price)}</span>
              </div>

              {variants.map(({
                name: variantName, internalName, markup, id,
              }, i) => {
                return (
                  <div className="flex items-center" key={id}>
                    <input id={internalName} type="radio" value={i} {...register('variant', {})} />
                    <label className="pl-2" htmlFor={internalName}>{variantName}</label>
                    <span className="ml-auto">
                      {`+${formatPrice(markup)}`}
                    </span>
                  </div>
                );
              })}
            </div>

            <p>Toppings</p>
            <div>
              {toppings.map(({
                name: toppingName, internalName, markup, id,
              }, i) => {
                return (
                  <div className="flex items-center" key={id}>
                    <input id={internalName} type="checkbox" value={i} {...register('toppings', {})} />
                    <label htmlFor={internalName} className="pl-2">{toppingName}</label>
                    <span className="ml-auto">
                      {`+${formatPrice(markup)}`}
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <p>Quantity</p>
              <input className="w-full" type="number" placeholder="Quantity" defaultValue="1" {...register('quantity', { required: true, min: 1, valueAsNumber: true })} />
            </div>
            <button type="submit" className="w-full btn bg-yellow-700 text-white">Add To Cart</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/items`);
  const items = await res.json();

  return {
    paths: items.map(({ slug }) => {
      return {
        params: { slug: String(slug) },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/items/?slug=${slug}`);
  const found = await res.json();

  return {
    props: {
      item: found[0],
    },
  };
}
