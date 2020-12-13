import Link from 'next/link'

export default function BigProductCard({ imgURL, name, price, priceOld, sale, slug }) {
    return(
        <div class="col">
            <div class="product">
                <div class="product-thumb">
                    <Link href={"/products/" + slug}>
                        <a href="product-details.html" class="image">
                            {sale && 
                                <span class="product-badges">
                                    <span class="onsale">{sale}</span>
                                </span>
                            }
                            <img src={imgURL} alt="Product Image" />
                            <img class="image-hover" src={imgURL} alt="Product Image" />
                        </a>
                    </Link>
                    <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                </div>
                <div class="product-info">
                    <h6 class="title"><a href="product-details.html">{name}</a></h6>
                    <span class="price">
                        {priceOld ? 
                        <><span class="old">Rp. {priceOld}</span><span class="new">Rp. {price}</span></>
                        : <>Rp. {price}</>} 
                    </span>
                    <div class="product-buttons">
                        <a href="#quickViewModal" data-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fal fa-search"></i></a>
                        <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fal fa-shopping-cart"></i></a>
                        <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fal fa-random"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}