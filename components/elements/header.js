export default function Header() {
    return (
        <div class="header-section section bg-white d-none d-xl-block">
            <div class="container">
                <div class="row justify-content-between align-items-center">

                    <div class="col-auto">
                        <div class="header-logo justify-content-center">
                            <a href="index.html"><img src="assets/images/logo/logo.png" alt="Learts Logo" /></a>
                        </div>
                    </div>

                    <div class="col">
                        <div class="header6-search">
                            <form action="#">
                                <div class="row no-gutters">
                                    <div class="col">
                                        <input type="text" placeholder="Search Products..." />
                                    </div>
                                    <button type="submit"><i class="fal fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-auto">
                        <div class="header-tools justify-content-end">
                            <div class="header-login">
                                <a href="my-account.html"><i class="fal fa-user"></i></a>
                            </div>
                            <div class="header-wishlist">
                                <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="fal fa-heart"></i></a>
                            </div>
                            <div class="header-cart">
                                <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="site-menu-section section border-top">
                <div class="container">
                    <div class="header-categories">
                        <button class="category-toggle"><i class="fal fa-bars"></i> Browse Categories</button>
                        <ul class="header-category-list">
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
                    <nav class="site-main-menu justify-content-center menu-height-60">
                        <ul>
                            <li class="has-children"><a href="#"><span class="menu-text">Home</span></a>
                                <ul class="sub-menu mega-menu">
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-01.jpg" /> <a href="index.html"><span class="menu-text">Arts Propelled</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-02.jpg" /> <a href="index-2.html"><span class="menu-text">Decor Thriving</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-03.jpg" /> <a href="index-3.html"><span class="menu-text">Savvy Delight</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-04.jpg" /> <a href="index-4.html"><span class="menu-text">Perfect Escapes</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-05.jpg" /> <a href="index-5.html"><span class="menu-text">Kitchen Cozy</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-06.jpg" /> <a href="index-6.html"><span class="menu-text">Dreamy Designs</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-07.jpg" /> <a href="index-7.html"><span class="menu-text">Crispy Recipes</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-08.jpg" /> <a href="index-8.html"><span class="menu-text">Decoholic Chic</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-9.jpg" /> <a href="index-9.html"><span class="menu-text">Reblended Dish</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-10.jpg" /> <a href="index-10.html"><span class="menu-text">Craftin House</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-11.jpg" /> <a href="index-11.html"><span class="menu-text">Craftswork Biz</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-banner"><img src="assets/images/banner/menu-banner-1.jpg" alt="Home Menu Banner" /></a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Shop</span></a>
                                <ul class="sub-menu mega-menu">
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">SHOP PAGES</span></a>
                                        <ul>
                                            <li><a href="shop.html"><span class="menu-text">Shop No Sidebar</span></a></li>
                                            <li><a href="shop-left-sidebar.html"><span class="menu-text">Shop Left Sidebar</span></a></li>
                                            <li><a href="shop-right-sidebar.html"><span class="menu-text">Shop Right Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-no-gutters.html"><span class="menu-text">Shop Fullwidth No Space</span></a></li>
                                            <li><a href="shop-fullwidth.html"><span class="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-left-sidebar.html"><span class="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-right-sidebar.html"><span class="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details.html"><span class="menu-text">Basic</span></a></li>
                                            <li><a href="product-details-fullwidth.html"><span class="menu-text">Fullwidth</span></a></li>
                                            <li><a href="product-details-sticky.html"><span class="menu-text">Sticky Details</span></a></li>
                                            <li><a href="product-details-sidebar.html"><span class="menu-text">Width Sidebar</span></a></li>
                                            <li><a href="product-details-extra-content.html"><span class="menu-text">Extra Content</span></a></li>
                                            <li><a href="product-details-image-variation.html"><span class="menu-text">Variations Images</span></a></li>
                                            <li><a href="product-details-group.html"><span class="menu-text">Bought Together</span></a></li>
                                            <li><a href="product-details-360.html"><span class="menu-text">Product 360</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT & Other PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details-background.html"><span class="menu-text">Product with Background</span></a></li>
                                            <li><a href="shopping-cart.html"><span class="menu-text">Shopping Cart</span></a></li>
                                            <li><a href="checkout.html"><span class="menu-text">Checkout</span></a></li>
                                            <li><a href="order-tracking.html"><span class="menu-text">Order Tracking</span></a></li>
                                            <li><a href="wishlist.html"><span class="menu-text">Wishlist</span></a></li>
                                            <li><a href="login-register.html"><span class="menu-text">Customer Login</span></a></li>
                                            <li><a href="my-account.html"><span class="menu-text">My Account</span></a></li>
                                            <li><a href="lost-password.html"><span class="menu-text">Lost Password</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="align-self-center">
                                        <a href="#" class="menu-banner"><img src="assets/images/banner/menu-banner-2.png" alt="Shop Menu Banner" /></a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Project</span></a>
                                <ul class="sub-menu">
                                    <li><a href="portfolio-3-columns.html"><span class="menu-text">Portfolio 3 Columns</span></a></li>
                                    <li><a href="portfolio-4-columns.html"><span class="menu-text">Portfolio 4 Columns</span></a></li>
                                    <li><a href="portfolio-5-columns.html"><span class="menu-text">Portfolio 5 Columns</span></a></li>
                                    <li><a href="portfolio-details.html"><span class="menu-text">Portfolio Details</span></a></li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Elements</span></a>
                                <ul class="sub-menu mega-menu">
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column One</span></a>
                                        <ul>
                                            <li><a href="elements-products.html"><span class="menu-text">Product Styles</span></a></li>
                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Product Tabs</span></a></li>
                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Product & Sale Banner</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column Two</span></a>
                                        <ul>
                                            <li><a href="elements-category-banner.html"><span class="menu-text">Category Banner</span></a></li>
                                            <li><a href="elements-team.html"><span class="menu-text">Team Member</span></a></li>
                                            <li><a href="elements-testimonials.html"><span class="menu-text">Testimonials</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column Three</span></a>
                                        <ul>
                                            <li><a href="elements-instagram.html"><span class="menu-text">Instagram</span></a></li>
                                            <li><a href="elements-map.html"><span class="menu-text">Google Map</span></a></li>
                                            <li><a href="elements-icon-box.html"><span class="menu-text">Icon Box</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column Four</span></a>
                                        <ul>
                                            <li><a href="elements-buttons.html"><span class="menu-text">Buttons</span></a></li>
                                            <li><a href="elements-faq.html"><span class="menu-text">FAQs / Toggles</span></a></li>
                                            <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Blog</span></a>
                                <ul class="sub-menu">
                                    <li class="has-children"><a href="blog-right-sidebar.html"><span class="menu-text">Standard Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children"><a href="blog-grid-right-sidebar.html"><span class="menu-text">Grid Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-grid-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-grid-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-grid-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children"><a href="blog-list-right-sidebar.html"><span class="menu-text">List Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-list-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-list-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-list-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children"><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Masonry Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-masonry-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-masonry-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children"><a href="blog-details-right-sidebar.html"><span class="menu-text">Single Post Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-details-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-details-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-details-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Pages</span></a>
                                <ul class="sub-menu">
                                    <li><a href="about-us.html"><span class="menu-text">About us</span></a></li>
                                    <li><a href="about-us-2.html"><span class="menu-text">About us 02</span></a></li>
                                    <li><a href="contact-us.html"><span class="menu-text">Contact us</span></a></li>
                                    <li><a href="coming-soon.html"><span class="menu-text">Coming Soon</span></a></li>
                                    <li><a href="404.html"><span class="menu-text">Page 404</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div class="header-call">
                        <p><i class="fa fa-phone"></i> 0918 206 263</p>
                    </div>
                </div>
            </div>

        </div>
    )
}