import BaseLayout from '../../components/baselayout'
import { getProduct, getAllProducts, getProductsForStaticPaths } from '../../lib/products'
import Footer from '../../components/elements/footer'
import ProductDetailContainer from '../../components/containers/productdetailcontainer'
import ProductInfoContainer from '../../components/containers/productinfocontainer'
import RelatedProductContainer from '../../components/containers/relatedproductcontainer'
import TopBar from '../../components/elements/topbar'
import Header from '../../components/elements/header'
import StickyHeader from '../../components/elements/stickyheader'

export default function Post({ productData }) {
    return (
        <BaseLayout>
          <TopBar />
          <Header />
          <StickyHeader />
          <ProductDetailContainer productData={productData} />
          <ProductInfoContainer productData={productData} />
          <RelatedProductContainer />
          <Footer />
        </BaseLayout>
    )
}

export async function getStaticProps({ params }) {
    const productData = await getProduct(params.slug)
    return {
      props: {
        productData
      }
    }
}

export async function getStaticPaths() {
    const paths = await getAllProducts()
    return {
      paths,
      fallback: false
    }
}