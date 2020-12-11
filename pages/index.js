import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import BaseLayout from '../components/baselayout'
import TopBar from '../components/elements/topbar'
import Header from '../components/elements/header'
import StickyHeader from '../components/elements/stickyheader'
import BannerContainer from '../components/containers/bannercontainer'
import TopContainer from '../components/containers/topcontainer'
import ProductContainer from '../components/containers/productcontainer'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Home({ woodsProducts, potteriesProducts }) {
  return (
    <BaseLayout home>
      <TopBar />
      <Header />
      <StickyHeader />
      <BannerContainer />
      <TopContainer />
      <ProductContainer products={woodsProducts} position="left" />
      <ProductContainer products={potteriesProducts} position="right" />
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
  
  const {data} = await client.query({
    query: gql`
      query {
        categories(where: { _or: [{ name: "Woods" }, { name: "Potteries" }] }) {
            products(limit: 5) { name price product_images{ imageURL } }
        }
      }
    `
  })

  return {
    props: {
      woodsProducts: data.categories[0].products,
      potteriesProducts: data.categories[1].products
    }
  }
}