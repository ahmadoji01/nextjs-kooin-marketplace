export default function MobileHeader() {
    return (
        <div className="mobile-header sticky-header bg-white section d-xl-none">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col d-none d-sm-block">
                        <div className="header-logo">
                            <a href="index.html"><img src="assets/images/logo/logo-2.png" alt="Learts Logo" /></a>
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
                                <a href="/account"><i className="fal fa-user"></i></a>
                            </div>
                            <div className="header-cart">
                                <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}