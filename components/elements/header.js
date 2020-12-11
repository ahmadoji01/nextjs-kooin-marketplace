export default function Header() {
    return (
        <div className="header-section section bg-white d-none d-xl-block">
            <div className="container">
                <div className="row justify-content-between align-items-center">

                    <div className="col-auto">
                        <div className="header-logo justify-content-center">
                            <a href="index.html"><img className="logo-vertical" src="assets/images/logo/logo.png" alt="Learts Logo" /></a>
                        </div>
                    </div>

                    <div className="col">
                        <div className="header6-search">
                            <form action="#">
                                <div className="row no-gutters">
                                    <div className="col">
                                        <input type="text" placeholder="Search Products..." />
                                    </div>
                                    <button type="submit"><i className="fal fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className="header-tools justify-content-end">
                            <div className="header-login">
                                <a href="my-account.html"><i className="fal fa-user"></i></a>
                            </div>
                            <div className="header-wishlist">
                                <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="fal fa-heart"></i></a>
                            </div>
                            <div className="header-cart">
                                <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="site-menu-section section border-top">
                <div className="container">
                    <div className="header-categories">
                        <button className="category-toggle"><i className="fal fa-bars"></i> Browse Categories</button>
                        <ul className="header-category-list">
                            <li><a href="#"><img src="assets/images/icons/cat-icon-1.png" alt="" /> Knitting</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-2.png" alt="" /> Sewing</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-3.png" alt="" /> Holyday gifts</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-4.png" alt="" /> Birthday gifts</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-5.png" alt="" /> Home decor</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-6.png" alt="" /> For kids & babies</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-7.png" alt="" /> Garden decor</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-8.png" alt="" /> Accessories</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-9.png" alt="" /> Soap</a></li>
                            <li><a href="#"><img src="assets/images/icons/cat-icon-10.png" alt="" /> Sale</a></li>
                        </ul>
                    </div>
                    <nav className="site-main-menu justify-content-center menu-height-60">
                        <ul>
                            <li className="has-children"><a href="#"><span className="menu-text">Home</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-01.jpg" /> <a href="index.html"><span className="menu-text">Arts Propelled</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-02.jpg" /> <a href="index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-03.jpg" /> <a href="index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-04.jpg" /> <a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-05.jpg" /> <a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-06.jpg" /> <a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-07.jpg" /> <a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-08.jpg" /> <a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-9.jpg" /> <a href="index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-10.jpg" /> <a href="index-10.html"><span className="menu-text">Craftin House</span></a></li>
                                            <li> <img className="mmh_img " src="assets/images/demo/menu/home-11.jpg" /> <a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="menu-banner"><img src="assets/images/banner/menu-banner-1.jpg" alt="Home Menu Banner" /></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Shop</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">SHOP PAGES</span></a>
                                        <ul>
                                            <li><a href="shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                                            <li><a href="shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                                            <li><a href="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                                            <li><a href="shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details.html"><span className="menu-text">Basic</span></a></li>
                                            <li><a href="product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                                            <li><a href="product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                                            <li><a href="product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                                            <li><a href="product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                                            <li><a href="product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                                            <li><a href="product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                                            <li><a href="product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                                            <li><a href="shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                                            <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                                            <li><a href="order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                                            <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                                            <li><a href="login-register.html"><span className="menu-text">Customer Login</span></a></li>
                                            <li><a href="my-account.html"><span className="menu-text">My Account</span></a></li>
                                            <li><a href="lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="align-self-center">
                                        <a href="#" className="menu-banner"><img src="assets/images/banner/menu-banner-2.png" alt="Shop Menu Banner" /></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Project</span></a>
                                <ul className="sub-menu">
                                    <li><a href="portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
                                    <li><a href="portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
                                    <li><a href="portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
                                    <li><a href="portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Elements</span></a>
                                <ul className="sub-menu mega-menu">
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                                        <ul>
                                            <li><a href="elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                                            <li><a href="elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                                            <li><a href="elements-product-sale-banner.html"><span className="menu-text">Product & Sale Banner</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                                        <ul>
                                            <li><a href="elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                                            <li><a href="elements-team.html"><span className="menu-text">Team Member</span></a></li>
                                            <li><a href="elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                                        <ul>
                                            <li><a href="elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                                            <li><a href="elements-map.html"><span className="menu-text">Google Map</span></a></li>
                                            <li><a href="elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                                        <ul>
                                            <li><a href="elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                                            <li><a href="elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                                            <li><a href="elements-brands.html"><span className="menu-text">Brands</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Blog</span></a>
                                <ul className="sub-menu">
                                    <li className="has-children"><a href="blog-right-sidebar.html"><span className="menu-text">Standard Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><a href="blog-grid-right-sidebar.html"><span className="menu-text">Grid Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><a href="blog-list-right-sidebar.html"><span className="menu-text">List Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><a href="blog-masonry-right-sidebar.html"><span className="menu-text">Masonry Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children"><a href="blog-details-right-sidebar.html"><span className="menu-text">Single Post Layout</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                                <ul className="sub-menu">
                                    <li><a href="about-us.html"><span className="menu-text">About us</span></a></li>
                                    <li><a href="about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                                    <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                                    <li><a href="coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                                    <li><a href="404.html"><span className="menu-text">Page 404</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-call">
                        <p><i className="fa fa-phone"></i> 0918 206 263</p>
                    </div>
                </div>
            </div>

        </div>
    )
}