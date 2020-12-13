export default function ProductInfoContainer({ productData }) {
    return(
        <div class="section section-padding border-bottom">
            <div class="container">

                <ul class="nav product-info-tab-list">
                    <li><a class="active" data-toggle="tab" href="#tab-description">Description</a></li>
                    <li><a data-toggle="tab" href="#tab-pwb_tab">Brand</a></li>
                    <li><a data-toggle="tab" href="#tab-additional_information">Additional information</a></li>
                    <li><a data-toggle="tab" href="#tab-reviews">Reviews (3)</a></li>
                </ul>
                <div class="tab-content product-infor-tab-content">
                    <div class="tab-pane fade show active" id="tab-description">
                        <div class="row">
                            <div class="col-lg-10 col-12 mx-auto">
                                <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles. Rubber lip – The rubber lip on the front of the dustpan helps to remove all dust at once.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tab-pwb_tab">
                        <div class="row learts-mb-n30">
                            <div class="col-12 learts-mb-30">
                                <div class="row learts-mb-n10">
                                    <div class="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-3.png" alt="" /></div>
                                    <div class="col learts-mb-10">
                                        <p>We’ve worked with numerous industries and famous fashion brands around the world. We have also created tremendous impacts on fashion manufacturing and online sales. When we partner with an eCommerce agency, we connect every activity to set the trend and win customers’ trust. We make sure our customers are always happy with our products.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 learts-mb-30">
                                <div class="row learts-mb-n10">
                                    <div class="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-8.png" alt="" /></div>
                                    <div class="col learts-mb-10">
                                        <p>Prior to Houdini, there have been many clothing brands that achieved such a roaring success. However, there’s no other brand that can obtain such a precious position like us. We have successfully built our site to make more people know about our products as well as our motto. We’ve been the inspiration for many other small and medium-sized businesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="tab-additional_information">
                        <div class="row">
                            <div class="col-lg-8 col-md-10 col-12 mx-auto">
                                <div class="table-responsive">
                                    <table class="table table-bordered">
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
                    <div class="tab-pane fade" id="tab-reviews">
                        <div class="product-review-wrapper">
                            <span class="title">3 reviews for Cleaning Dustpan & Brush</span>
                            <ul class="product-review-list">
                                <li>
                                    <div class="product-review">
                                        <div class="thumb"><img src="/assets/images/review/review-1.jpeg" alt="" /></div>
                                        <div class="content">
                                            <div class="ratings">
                                                <span class="star-rating">
                                                    <span class="rating-active" style={{ width: "100%" }}>ratings</span>
                                                </span>
                                            </div>
                                            <div class="meta">
                                                <h5 class="title">Edna Watson</h5>
                                                <span class="date">November 27, 2020</span>
                                            </div>
                                            <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="product-review">
                                        <div class="thumb"><img src="/assets/images/review/review-2.jpeg" alt="" /></div>
                                        <div class="content">
                                            <div class="ratings">
                                                <span class="star-rating">
                                                    <span class="rating-active" style={{ width: "80%" }}>ratings</span>
                                                </span>
                                            </div>
                                            <div class="meta">
                                                <h5 class="title">Scott James</h5>
                                                <span class="date">November 27, 2020</span>
                                            </div>
                                            <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="product-review">
                                        <div class="thumb"><img src="/assets/images/review/review-3.jpeg" alt="" /></div>
                                        <div class="content">
                                            <div class="ratings">
                                                <span class="star-rating">
                                                    <span class="rating-active" style={{ width: "60%" }}>ratings</span>
                                                </span>
                                            </div>
                                            <div class="meta">
                                                <h5 class="title">Owen Christ</h5>
                                                <span class="date">November 27, 2020</span>
                                            </div>
                                            <p>Good Product!</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <span class="title">Add a review</span>
                            <div class="review-form">
                                <p class="note">Your email address will not be published. Required fields are marked *</p>
                                <form action="#">
                                    <div class="row learts-mb-n30">
                                        <div class="col-md-6 col-12 learts-mb-30"><input type="text" placeholder="Name *" /></div>
                                        <div class="col-md-6 col-12 learts-mb-30"><input type="email" placeholder="Email *" /></div>
                                        <div class="col-12 learts-mb-10">
                                            <div class="form-rating">
                                                <span class="title">Your rating</span>
                                                <span class="rating"><span class="star"></span></span>
                                            </div>
                                        </div>
                                        <div class="col-12 learts-mb-30"><textarea placeholder="Your Review *"></textarea></div>
                                        <div class="col-12 text-center learts-mb-30"><button class="btn btn-dark btn-outline-hover-dark">Submit</button></div>
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