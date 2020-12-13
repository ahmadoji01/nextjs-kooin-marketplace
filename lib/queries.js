import { gql } from '@apollo/client';

export const GET_HOME_PRODUCTS = gql
`
    query {
        categories(where: { _or: [{ name: "Woods" }, { name: "Potteries" }] }) {
            products(limit: 5) { 
                name 
                price
                slug 
                product_images { 
                    imageURL 
                } 
            }
        }
    }
`

export const GET_POPULAR_PRODUCTS = gql
`
    query {
        categories(where: { _or: [{ name: "Woods" }, { name: "Potteries" }, { name: "Resins" }, { name: "Fashion" }] }) {
            name
            products(limit: 1) { 
                name 
                price
                slug 
                product_images{ imageURL } 
            }
        }
    }
`