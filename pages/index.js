import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { fromImageToUrl } from '../utils/urls';
import { getAllItems, getAllCategories, getHomeData } from '../utils/api';
import { formatPrice } from '../utils/cart';
import { useState } from 'react';

export default function Home({ categories, home }) {
  const { hero, title, description, featuredItem } = home;

  const [selectedCategory, setSelectedCategory] = useState(null);

  let items;
  let itemsTitle = "Our Drinks";
  if (selectedCategory === null) {
    items = categories.reduce((items, category) => {
      if (category?.items) {
        items.push(...category.items)
      }
      return items;
    }, []);
  } else {
    items = categories[selectedCategory].items;
    itemsTitle = categories[selectedCategory].name;
  }

  return (
    <div>
      <Head>
        <title>Grandpa's Tea</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="break-out-banner">
        <div className="frame-l min-h-50vh" style={{ "--n": 21, "--d": 9 }}>
          <Image src={fromImageToUrl(hero)} layout="fill" objectFit="cover" />
          <div className="bg-yellow-900 bg-opacity-60 text-white px-8 md:max-w-xl text-center md:text-left">
            <div>
              <h2>{title}</h2>
              <p className="text-xl">{description}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="stack-l mt-8" style={{ "--space": "var(--s4)" }}>
        <section>
          <div className="grid-l" style={{ "--min": "200px" }}>
            {categories.map(({ name, id, image }, i) => {
              return <button key={id} onClick={() => {
                setSelectedCategory(i);
              }}>
                <article className="rounded-md">
                  <div className="frame-l" style={{ "--n": 16, "--d": 9 }}>
                    <Image src={fromImageToUrl(image)} sizes="250px" layout="fill" objectFit="cover" />
                    <div className="text-white bg-yellow-900 bg-opacity-60 text-center px-4">
                      <h3>{name}</h3>
                    </div>
                  </div>
                </article>
              </button>
            })}
          </div>
        </section>

        <section className="mx-auto max-w-screen-lg w-full">
          <h3 className="text-center">{itemsTitle}</h3>
          <div className="grid-l" style={{ "--min": "200px" }}>
            {items.map(({ slug, image, name, price, variants }) => {
              return <Link key={slug} href={`/items/${slug}`}>
                <a>
                  <article className={`${styles.product} p-4`}>
                    <div className="rounded-full frame-l" style={{ "--n": 1, "--d": 1 }}>
                      <Image src={fromImageToUrl(image)} alt={name} layout="fill" sizes="250px" objectFit="cover" />
                    </div>
                    <div className="text-center stack-l mt-4" style={{ "--space": "var(--s-4)" }}>
                      <h3 className="h6 text-yellow-800">{name}</h3>
                      <p>
                        {formatPrice(price)}
                      </p>
                    </div>
                  </article>
                </a>
              </Link>
            })}
          </div>
        </section>
      </div>
    </div >
  )
}

export async function getStaticProps() {
  const items = await getAllItems();
  const home = await getHomeData();
  const categories = await getAllCategories();

  return {
    props: {
      home,
      items,
      categories
    }
  }
}