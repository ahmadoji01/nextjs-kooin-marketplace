import { API_URL } from '../../lib/appconst'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function ProductDetailContainer({ productData }) {
    let dataImages = "["
    productData.product_images.map((productImage) => (
        dataImages = dataImages + "{'src': '" + API_URL + productImage.imageURL + "', 'w': 700, 'h': 700},"
    ))
    dataImages = dataImages + "]"
    
    return(
        <div class="section section-padding border-bottom" style={{ paddingTop: 30 }}>
            <div class="container">
                <div class="row">
                    <div class="col">

                        <div class="page-title">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="shop.html">Products</a></li>
                                <li class="breadcrumb-item active">Cleaning Dustpan & Brush</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="row learts-mb-40" style={{ marginTop: 20 }}>

                    <div class="col-lg-6 col-12 learts-mb-40">
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={100}
                            totalSlides={productData.product_images.length}
                            >
                            <Slider>
                                { productData.product_images.map((productImage, index) => (
                                    <Slide index={index}>
                                        <ImageWithZoom src={API_URL + productImage.imageURL} />
                                    </Slide>
                                )) }
                            </Slider>
                            <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext>
                        </CarouselProvider>
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
                            <h3 class="product-title">{ productData.name }</h3>
                            <div class="product-price">Rp. { productData.price }</div>
                            <div class="product-description">
                                <p>{ productData.description }</p>
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