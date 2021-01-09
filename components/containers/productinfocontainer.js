export default function ProductInfoContainer({ productData }) {
    return(
        <div className="section section-padding border-bottom">
            <div className="container">

                <ul className="nav product-info-tab-list">
                    <li><a className="active" data-toggle="tab" href="#tab-description">Description</a></li>
                    <li><a data-toggle="tab" href="#tab-pwb_tab">Brand</a></li>
                    <li><a data-toggle="tab" href="#tab-additional_information">Additional information</a></li>
                    <li><a data-toggle="tab" href="#tab-reviews">Reviews (3)</a></li>
                </ul>
                <div className="tab-content product-infor-tab-content">
                    <div className="tab-pane fade show active" id="tab-description">
                        <div className="row">
                            <div className="col-lg-10 col-12 mx-auto">
                                <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles. Rubber lip – The rubber lip on the front of the dustpan helps to remove all dust at once.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-pwb_tab">
                        <div className="row learts-mb-n30">
                            <div className="col-12 learts-mb-30">
                                <div className="row learts-mb-n10">
                                    <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-3.png" alt="" /></div>
                                    <div className="col learts-mb-10">
                                        <p>We’ve worked with numerous industries and famous fashion brands around the world. We have also created tremendous impacts on fashion manufacturing and online sales. When we partner with an eCommerce agency, we connect every activity to set the trend and win customers’ trust. We make sure our customers are always happy with our products.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 learts-mb-30">
                                <div className="row learts-mb-n10">
                                    <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-8.png" alt="" /></div>
                                    <div className="col learts-mb-10">
                                        <p>Prior to Houdini, there have been many clothing brands that achieved such a roaring success. However, there’s no other brand that can obtain such a precious position like us. We have successfully built our site to make more people know about our products as well as our motto. We’ve been the inspiration for many other small and medium-sized businesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-additional_information">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 col-12 mx-auto">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Size</td>
                                                <td>Large, Medium, Small</td>
                                            </tr>
                                            <tr>
                                                <td>Color</td>
                                                <td>Black, White</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-reviews">
                        <div className="product-review-wrapper">
                            <span className="title">3 reviews for Cleaning Dustpan & Brush</span>
                            <ul className="product-review-list">
                                <li>
                                    <div className="product-review">
                                        <div className="thumb"><img src="/assets/images/review/review-1.jpeg" alt="" /></div>
                                        <div className="content">
                                            <div className="ratings">
                                                <span className="star-rating">
                                                    <span className="rating-active" style={{ width: "100%" }}>ratings</span>
                                                </span>
                                            </div>
                                            <div className="meta">
                                                <h5 className="title">Edna Watson</h5>
                                                <span className="date">November 27, 2020</span>
                                            </div>
                                            <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product-review">
                                        <div className="thumb"><img src="/assets/images/review/review-2.jpeg" alt="" /></div>
                                        <div className="content">
                                            <div className="ratings">
                                                <span className="star-rating">
                                                    <span className="rating-active" style={{ width: "80%" }}>ratings</span>
                                                </span>
                                            </div>
                                            <div className="meta">
                                                <h5 className="title">Scott James</h5>
                                                <span className="date">November 27, 2020</span>
                                            </div>
                                            <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="product-review">
                                        <div className="thumb"><img src="/assets/images/review/review-3.jpeg" alt="" /></div>
                                        <div className="content">
                                            <div className="ratings">
                                                <span className="star-rating">
                                                    <span className="rating-active" style={{ width: "60%" }}>ratings</span>
                                                </span>
                                            </div>
                                            <div className="meta">
                                                <h5 className="title">Owen Christ</h5>
                                                <span className="date">November 27, 2020</span>
                                            </div>
                                            <p>Good Product!</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <span className="title">Add a review</span>
                            <div className="review-form">
                                <p className="note">Your email address will not be published. Required fields are marked *</p>
                                <form action="#">
                                    <div className="row learts-mb-n30">
                                        <div className="col-md-6 col-12 learts-mb-30"><input type="text" placeholder="Name *" /></div>
                                        <div className="col-md-6 col-12 learts-mb-30"><input type="email" placeholder="Email *" /></div>
                                        <div className="col-12 learts-mb-10">
                                            <div className="form-rating">
                                                <span className="title">Your rating</span>
                                                <span className="rating"><span className="star"></span></span>
                                            </div>
                                        </div>
                                        <div className="col-12 learts-mb-30"><textarea placeholder="Your Review *"></textarea></div>
                                        <div className="col-12 text-center learts-mb-30"><button className="btn btn-dark btn-outline-hover-dark">Submit</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}