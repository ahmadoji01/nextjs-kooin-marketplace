import { API_URL } from '../../lib/appconst'

export default function ProductDetailContainer({ productData }) {
    let dataImages = "["
    productData.product_images.map((productImage) => (
        dataImages = dataImages + "{'src': '" + API_URL + productImage.imageURL + "', 'w': 700, 'h': 700},"
    ))
    dataImages = dataImages + "]"
    
    return(
        <div class="section section-padding border-bottom">
            <div class="container">
                <div class="row learts-mb-n40">

                    <div class="col-lg-6 col-12 learts-mb-40">
                        <div class="product-images">
                            <button class="product-gallery-popup hintT-left" data-hint="Click to enlarge" data-images={dataImages}>
                                <i class="far fa-expand"></i>
                            </button>
                            <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" class="product-video-popup video-popup hintT-left" data-hint="Click to see video"><i class="fal fa-play"></i></a>
                            <div class="product-gallery-slider">
                                <div class="product-zoom" data-image="/assets/images/product/single/1/product-zoom-1.jpg">
                                    <img src="/assets/images/product/single/1/product-1.jpg" alt="" />
                                </div>
                                <div class="product-zoom" data-image="/assets/images/product/single/1/product-zoom-2.jpg">
                                    <img src="/assets/images/product/single/1/product-2.jpg" alt="" />
                                </div>
                                <div class="product-zoom" data-image="/assets/images/product/single/1/product-zoom-3.jpg">
                                    <img src="/assets/images/product/single/1/product-3.jpg" alt="" />
                                </div>
                                <div class="product-zoom" data-image="/assets/images/product/single/1/product-zoom-4.jpg">
                                    <img src="/assets/images/product/single/1/product-4.jpg" alt="" />
                                </div>
                            </div>
                            <div class="product-thumb-slider">
                                <div class="item">
                                    <img src="/assets/images/product/single/1/product-thumb-1.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="/assets/images/product/single/1/product-thumb-2.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="/assets/images/product/single/1/product-thumb-3.jpg" alt="" />
                                </div>
                                <div class="item">
                                    <img src="/assets/images/product/single/1/product-thumb-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12 learts-mb-40">
                        <div class="product-summery">
                            <div class="product-nav">
                                <a href="#"><i class="fal fa-long-arrow-left"></i></a>
                                <a href="#"><i class="fal fa-long-arrow-right"></i></a>
                            </div>
                            <div class="product-ratings">
                                <span class="star-rating">
                                    <span class="rating-active" style={{ width: "100%" }}>ratings</span>
                                </span>
                                <a href="#reviews" class="review-link">(<span class="count">3</span> customer reviews)</a>
                            </div>
                            <h3 class="product-title">Cleaning Dustpan & Brush</h3>
                            <div class="product-price">£38.00 – £50.00</div>
                            <div class="product-description">
                                <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.</p>
                            </div>
                            <div class="product-variations">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="label"><span>Size</span></td>
                                            <td class="value">
                                                <div class="product-sizes">
                                                    <a href="#">Large</a>
                                                    <a href="#">Medium</a>
                                                    <a href="#">Small</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="label"><span>Color</span></td>
                                            <td class="value">
                                                <div class="product-colors">
                                                    <a href="#" data-bg-color="#000000"></a>
                                                    <a href="#" data-bg-color="#ffffff"></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="label"><span>Quantity</span></td>
                                            <td class="value">
                                                <div class="product-quantity">
                                                    <span class="qty-btn minus"><i class="ti-minus"></i></span>
                                                    <input type="text" class="input-qty" value="1" />
                                                    <span class="qty-btn plus"><i class="ti-plus"></i></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="product-buttons">
                                <a href="#" class="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Add to Wishlist"><i class="fal fa-heart"></i></a>
                                <a href="#" class="btn btn-dark btn-outline-hover-dark"><i class="fal fa-shopping-cart"></i> Add to Cart</a>
                                <a href="#" class="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Compare"><i class="fal fa-random"></i></a>
                            </div>
                            <div class="product-brands">
                                <span class="title">Brands</span>
                                <div class="brands">
                                    <a href="#"><img src="/assets/images/brands/brand-3.png" alt="" /></a>
                                    <a href="#"><img src="/assets/images/brands/brand-8.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="product-meta">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="label"><span>SKU</span></td>
                                            <td class="value">0404019</td>
                                        </tr>
                                        <tr>
                                            <td class="label"><span>Category</span></td>
                                            <td class="value">
                                                <ul class="product-category">
                                                    <li><a href="#">Kitchen</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="label"><span>Tags</span></td>
                                            <td class="value">
                                                <ul class="product-tags">
                                                    <li><a href="#">handmade</a></li>
                                                    <li><a href="#">learts</a></li>
                                                    <li><a href="#">mug</a></li>
                                                    <li><a href="#">product</a></li>
                                                    <li><a href="#">learts</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="label"><span>Share on</span></td>
                                            <td class="va">
                                                <div class="product-share">
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                                    <a href="#"><i class="fal fa-envelope"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}