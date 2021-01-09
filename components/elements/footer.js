export default function Footer() {
    return(
        <div className="footer3-section section section-fluid section-padding bg-light">
            <div className="container">
                <div className="row learts-mb-n40">

                    <div className="col-xl-4 col-lg-5 col-12 learts-mb-40">
                        <div className="widget-contact">
                            <p className="email">contact@learts.com</p>
                            <p className="phone">(+88) 123 4566 6868</p>
                            <div className="app-buttons">
                                <a href="#"><img src="/assets/images/others/android.png" alt="" /></a>
                                <a href="#"><img src="/assets/images/others/ios.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-7 col-12 learts-mb-40">
                        <div className="row row-cols-sm-3 row-cols-1 learts-mb-n40">
                            <div className="col learts-mb-40">
                                <ul className="widget-list">
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Flash sale</a></li>
                                </ul>
                            </div>
                            <div className="col learts-mb-40">
                                <ul className="widget-list">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Store location</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="col learts-mb-40">
                                <ul className="widget-list">
                                    <li> <i className="fab fa-twitter"></i> <a href="https://www.twitter.com/">Twitter</a></li>
                                    <li> <i className="fab fa-facebook-f"></i> <a href="https://www.facebook.com/">Facebook</a></li>
                                    <li> <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a></li>
                                    <li> <i className="fab fa-youtube"></i> <a href="https://www.youtube.com/">Youtube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-12 learts-mb-40">
                        <h5 className="widget-title mb-2">Newsletter</h5>
                        <form id="mc-form" className="mc-form widget-subscibe2">
                            <input id="mc-email" autoComplete="off" type="email" placeholder="Enter your e-mail address" />
                            <button id="mc-submit" className="btn">subscibe</button>
                        </form>
                        <div className="mailchimp-alerts text-centre">
                            <div className="mailchimp-submitting"></div>
                            <div className="mailchimp-success text-success"></div>
                            <div className="mailchimp-error text-danger"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}