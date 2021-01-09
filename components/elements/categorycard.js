import { API_URL } from "../../lib/appconst"
import Link from 'next/link'

export default function CategoryCard({ title, bgColor, product }) {
    return(
        <div className="col learts-mb-40">
            <div className="category-banner4">
                <a href="shop.html" className="inner">
                    <div className="image"><img src={ API_URL + product.product_images[0].imageURL} alt="" /></div>
                    <div className="content" data-bg-color={bgColor}>
                        <h3 className="title">{title}</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}