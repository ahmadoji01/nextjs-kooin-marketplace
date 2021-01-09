import BaseLayout from '../components/baselayout'
import TopBar from '../components/elements/topbar'
import Header from '../components/elements/header'
import MobileHeader from '../components/elements/mobileheader'
import StickyHeader from '../components/elements/stickyheader'
import BannerContainer from '../components/containers/bannercontainer'
import TopContainer from '../components/containers/topcontainer'
import ProductContainer from '../components/containers/productcontainer'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_HOME_PRODUCTS, GET_POPULAR_PRODUCTS } from '../lib/queries'
import FeatureContainer from '../components/containers/featurecontainer'
import SaleContainer from '../components/containers/salecontainer'
import BlogUpdateContainer from '../components/containers/blogupdatecontainer'
import Footer from '../components/elements/footer'
import InstagramPostContainer from '../components/containers/instagrampostcontainer'

export default function Home({ woodsProducts, potteriesProducts, popularCategoriesProducts }) {
  return (
    <BaseLayout home>
        <TopBar />
        <Header />
        <MobileHeader />
        <StickyHeader />
        <BannerContainer />
        <TopContainer categoriesProducts={popularCategoriesProducts} />
        <ProductContainer title="See Our Choices of Products Made from Woods" products={woodsProducts} position="left" />
        <ProductContainer title="See Our Choices of Potteries" products={potteriesProducts} position="right" />
        <FeatureContainer />
        <SaleContainer />
        <BlogUpdateContainer />
        <InstagramPostContainer />
        <Footer />
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
  
  const {data} = await client.query({
    query: GET_HOME_PRODUCTS
  })

  let popularCategoriesProducts = await client.query({
    query: GET_POPULAR_PRODUCTS
  })

  return {
    props: {
      woodsProducts: data.categories[0].products,
      potteriesProducts: data.categories[1].products,
      popularCategoriesProducts: popularCategoriesProducts.data.categories
    }
  }
}