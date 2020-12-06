import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import BaseLayout from '../components/baselayout'
import TopBar from '../components/elements/topbar'
import Header from '../components/elements/header'
import BannerContainer from '../components/containers/bannercontainer'
import TopContainer from '../components/containers/topcontainer'
import ProductContainer from '../components/containers/productcontainer'

export default function Home({ allPostsData }) {
  return (
    <BaseLayout home>
      <TopBar />
      <Header />
      <BannerContainer />
      <TopContainer />
      <ProductContainer position="left" />
      <ProductContainer position="right" />
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}