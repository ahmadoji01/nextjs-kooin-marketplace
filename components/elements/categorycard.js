import { API_URL } from "../../lib/appconst"
import Link from 'next/link'

export default function CategoryCard({ title, bgColor, product }) {
    return(
        <div class="col learts-mb-40">
            <div class="category-banner4">
                <a href="shop.html" class="inner">
                    <div class="image"><img src={ API_URL + product.product_images[0].imageURL} alt="" /></div>
                    <div class="content" data-bg-color={bgColor}>
                        <h3 class="title">{title}</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}