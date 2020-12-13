import useSWR, { SWRConfig } from 'swr'
import { API_URL } from './appconst'

export async function getProduct(slug) {
    const res = await fetch(API_URL + '/products?slug=' + slug)
    const data = await res.json()
    return data[0]
}

export async function getProductsForStaticPaths() {
    const res = await fetch(API_URL + '/products?_limit=10')
    const data = await res.json()
    return data.map(productData => {
        return {
            params: {
                slug: productData.slug
            }
        }
    })
}

export async function getAllProducts() {
    const res = await fetch(API_URL + '/products')
    const data = await res.json()
    return data.map(productData => {
        return {
            params: {
                slug: productData.slug
            }
        }
    })
}