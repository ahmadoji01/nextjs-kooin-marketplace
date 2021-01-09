import { API_URL } from '../../lib/appconst'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel'
import CurrencyFormat from 'react-currency-format'
import 'pure-react-carousel/dist/react-carousel.es.css'

export default function ProductDetailContainer({ productData }) {
    let dataImages = "["
    productData.product_images.map((productImage) => (
        dataImages = dataImages + "{'src': '" + API_URL + productImage.imageURL + "', 'w': 700, 'h': 700},"
    ))
    dataImages = dataImages + "]"
    
    return(
        <div className="section section-padding border-bottom" style={{ paddingTop: 30 }}>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="page-title">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="shop.html">Products</a></li>
                                <li className="breadcrumb-item active">Cleaning Dustpan & Brush</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="row learts-mb-40" style={{ marginTop: 20 }}>

                    <div className="col-lg-6 col-12 learts-mb-40">
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
                    <div className="col-lg-6 col-12 learts-mb-40">
                        <div className="product-summery">
                            <div className="product-nav">
                                <a href="#"><i className="fal fa-long-arrow-left"></i></a>
                                <a href="#"><i className="fal fa-long-arrow-right"></i></a>
                            </div>
                            <div className="product-ratings">
                                <span className="star-rating">
                                    <span className="rating-active" style={{ width: "100%" }}>ratings</span>
                                </span>
                                <a href="#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
                            </div>
                            <h3 className="product-title">{ productData.name }</h3>
                            <div className="product-price"><CurrencyFormat value={productData.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></div>
                            <div className="product-description">
                                <p>{ productData.description }</p>
                            </div>
                            <div className="product-variations">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="label"><span>Size</span></td>
                                            <td className="value">
                                                <div className="product-sizes">
                                                    <a href="#">Large</a>
                                                    <a href="#">Medium</a>
                                                    <a href="#">Small</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Color</span></td>
                                            <td className="value">
                                                <div className="product-colors">
                                                    <a href="#" data-bg-color="#000000"></a>
                                                    <a href="#" data-bg-color="#ffffff"></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Quantity</span></td>
                                            <td className="value">
                                                <div className="product-quantity">
                                                    <span className="qty-btn minus"><i className="ti-minus"></i></span>
                                                    <input type="text" className="input-qty" value="1" />
                                                    <span className="qty-btn plus"><i className="ti-plus"></i></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="product-buttons">
                                <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Add to Wishlist"><i className="fal fa-heart"></i></a>
                                <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="fal fa-shopping-cart"></i> Add to Cart</a>
                                <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                            </div>
                            <div className="product-brands">
                                <span className="title">Brands</span>
                                <div className="brands">
                                    <a href="#"><img src="/assets/images/brands/brand-3.png" alt="" /></a>
                                    <a href="#"><img src="/assets/images/brands/brand-8.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="product-meta">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="label"><span>SKU</span></td>
                                            <td className="value">0404019</td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Category</span></td>
                                            <td className="value">
                                                <ul className="product-category">
                                                    <li><a href="#">Kitchen</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Tags</span></td>
                                            <td className="value">
                                                <ul className="product-tags">
                                                    <li><a href="#">handmade</a></li>
                                                    <li><a href="#">learts</a></li>
                                                    <li><a href="#">mug</a></li>
                                                    <li><a href="#">product</a></li>
                                                    <li><a href="#">learts</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Share on</span></td>
                                            <td className="va">
                                                <div className="product-share">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    <a href="#"><i className="fal fa-envelope"></i></a>
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