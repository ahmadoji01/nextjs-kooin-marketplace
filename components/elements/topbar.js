export default function TopBar() {
    return (
        <div className="topbar-section section border-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col d-none d-md-block">
                        <div className="topbar-menu">
                            <ul>
                                <li><a href="#"><i className="fa fa-map-marker-alt"></i>Store Location</a></li>
                                <li><a href="#"><i className="fa fa-truck"></i>Order Status</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col d-md-none d-lg-block">
                        <p className="text-center my-2">Free shipping for orders over $59 !</p>
                    </div>

                    <div className="col d-none d-md-block">
                        <ul className="header-lan-curr text-white justify-content-end">
                            <li><a href="#">English</a>
                                <ul className="curr-lan-sub-menu">
                                    <li><a href="#">Français</a></li>
                                    <li><a href="#">Deutsch</a></li>
                                </ul>
                            </li>
                            <li><a href="#">USD</a>
                                <ul className="curr-lan-sub-menu">
                                    <li><a href="#">EUR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}