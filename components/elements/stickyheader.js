import OffCanvasWishList from "./offcanvas/wishlist";
import OffCanvasCart from "./offcanvas/cart";

export default function StickyHeader() {
    return(
        <>
            <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col">
                            <div className="header-logo">
                                <a href="/"><img src="/assets/images/logo/logo-2.png" alt="Learts Logo" /></a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="header6-search">
                                <form action="#">
                                    <div className="row no-gutters">
                                        <nav className="site-main-menu justify-content-center menu-height-60">
                                            <ul>
                                                <li className="has-children"><a href="#"><span className="menu-text">Categories</span></a>
                                                    <ul className="sub-menu mega-menu">
                                                        <li>
                                                            <a href="#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                                            <ul>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-01.jpg" /> <a href="index.html"><span className="menu-text">Arts Propelled</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-02.jpg" /> <a href="index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-03.jpg" /> <a href="index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-04.jpg" /> <a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                                            <ul>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-05.jpg" /> <a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-06.jpg" /> <a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-07.jpg" /> <a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-08.jpg" /> <a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                                                            <ul>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-9.jpg" /> <a href="index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-10.jpg" /> <a href="index-10.html"><span className="menu-text">Craftin House</span></a></li>
                                                                <li> <img className="mmh_img " src="/assets/images/demo/menu/home-11.jpg" /> <a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="menu-banner"><img src="/assets/images/banner/menu-banner-1.jpg" alt="Home Menu Banner" /></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
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
                                    <a href="/account"><i className="fal fa-user"></i></a>
                                </div>
                                <div className="header-wishlist">
                                    <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="fal fa-heart"></i></a>
                                </div>
                                <div className="header-cart">
                                    <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fal fa-shopping-cart"></i></a>
                                </div>
                                <div className="mobile-menu-toggle d-xl-none">
                                    <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                                        <svg viewBox="0 0 800 600">
                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                            <path d="M300,320 L540,320" id="middle"></path>
                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <OffCanvasWishList />
            <OffCanvasCart />
            <div className="offcanvas-overlay"></div>
        </>
    )
}