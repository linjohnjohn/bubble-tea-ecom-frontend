import Head from 'next/head'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import CartContext, { actions } from '../../context/CartContext';
import { fromImageToUrl, API_URL } from '../../utils/urls';
import { calculatePriceWithModifiers, formatPrice } from '../../utils/cart';

import Image from 'next/image';

const Product = ({ item }) => {
    const { image, name, price, description, toppings, variants } = item;

    const { dispatch } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = data => {
        const { toppings: selectedToppingsIndex, variant: selectedVariantIndex, quantity } = data;

        const selectedToppings = selectedToppingsIndex ? toppings.filter((_, i) => {
            return selectedToppingsIndex.includes(String(i));
        }) : [];

        const selectedVariant = variants.find((_, i) => selectedVariantIndex === String(i))
        const unitPrice = calculatePriceWithModifiers(item, selectedVariant, selectedToppings);

        const orderItem = {
            toppings: selectedToppings,
            variant: selectedVariant,
            quantity,
            item,
            unitPrice
        }

        dispatch(actions.addItem(orderItem));
        router.push("/");
    };

    return (<>
        <Head>
            {<title>{name}</title>}
            {description && <meta name="description" content={description}></meta>}
        </Head>
        <div className={`sidebar-l items-center justify-center mt-8`} style={{ "--sideWidth": "375px", "--contentMin": "45%" }}>
            <aside className="max-w-md">
                <div className="frame-l" style={{ "--n": 1, "--d": 1 }}>
                    <Image src={fromImageToUrl(image)} layout="fill" sizes="28rem" objectFit="cover"></Image>
                </div>
            </aside>

            <section className="stack-l">
                <h1 className="h3 text-center">{name}</h1>
                <form className="stack-l" onSubmit={handleSubmit(onSubmit)}>
                    <label>Variants</label>
                    <div>
                        <div className="flex items-center">
                            <input id="regular" type="radio" name="variant" value="regular" defaultChecked />
                            <label className="pl-2" htmlFor="regular">Regular</label>
                            <span className="ml-auto">{formatPrice(price)}</span>
                        </div>

                        {variants.map(({ name, internalName, markup, id }, i) => {
                            return <div className="flex items-center" key={id}>
                                <input id={internalName} type="radio" value={i} {...register("variant", {})} />
                                <label className="pl-2" htmlFor={internalName}>{name}</label>
                                <span className="ml-auto">+{formatPrice(markup)}</span>
                            </div>
                        })}
                    </div>

                    <label>Toppings</label>
                    <div>
                        {toppings.map(({ name, internalName, markup, id }, i) => {
                            return <div className="flex items-center" key={id}>
                                <input id={internalName} type="checkbox" value={i} {...register("toppings", {})} />
                                <label htmlFor={internalName} className="pl-2">{name}</label>
                                <span className="ml-auto">+{formatPrice(markup)}</span>
                            </div>
                        })}
                    </div>

                    <div>
                        <label>Quantity</label>
                        <input className="w-full" type="number" placeholder="Quantity" defaultValue="1" {...register("quantity", { required: true, min: 1, valueAsNumber: true })} />
                    </div>
                    <button className="w-full btn bg-yellow-700 text-white">Add To Cart</button>
                </form>
            </section>
        </div>
    </>
    )
}

export default Product;

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/items`);
    const items = await res.json();

    return {
        paths: items.map(({ slug }) => {
            return {
                params: { slug: String(slug) }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/items/?slug=${slug}`);
    const found = await res.json();

    return {
        props: {
            item: found[0]
        }
    }
}