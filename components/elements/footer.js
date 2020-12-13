export default function Footer() {
    return(
        <div class="footer3-section section section-fluid section-padding bg-light">
            <div class="container">
                <div class="row learts-mb-n40">

                    <div class="col-xl-4 col-lg-5 col-12 learts-mb-40">
                        <div class="widget-contact">
                            <p class="email">contact@learts.com</p>
                            <p class="phone">(+88) 123 4566 6868</p>
                            <div class="app-buttons">
                                <a href="#"><img src="/assets/images/others/android.png" alt="" /></a>
                                <a href="#"><img src="/assets/images/others/ios.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-7 col-12 learts-mb-40">
                        <div class="row row-cols-sm-3 row-cols-1 learts-mb-n40">
                            <div class="col learts-mb-40">
                                <ul class="widget-list">
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Flash sale</a></li>
                                </ul>
                            </div>
                            <div class="col learts-mb-40">
                                <ul class="widget-list">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Store location</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                            <div class="col learts-mb-40">
                                <ul class="widget-list">
                                    <li> <i class="fab fa-twitter"></i> <a href="https://www.twitter.com/">Twitter</a></li>
                                    <li> <i class="fab fa-facebook-f"></i> <a href="https://www.facebook.com/">Facebook</a></li>
                                    <li> <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a></li>
                                    <li> <i class="fab fa-youtube"></i> <a href="https://www.youtube.com/">Youtube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-12 learts-mb-40">
                        <h5 class="widget-title mb-2">Newsletter</h5>
                        <form id="mc-form" class="mc-form widget-subscibe2">
                            <input id="mc-email" autocomplete="off" type="email" placeholder="Enter your e-mail address" />
                            <button id="mc-submit" class="btn">subscibe</button>
                        </form>
                        <div class="mailchimp-alerts text-centre">
                            <div class="mailchimp-submitting"></div>
                            <div class="mailchimp-success text-success"></div>
                            <div class="mailchimp-error text-danger"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}