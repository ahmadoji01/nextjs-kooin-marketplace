export default function BannerContainer() {
    return(
        <div className="home12-slider section swiper-container">
            <div className="swiper-wrapper">
                <div className="home12-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home12/slide-1.jpg">
                    <div className="home12-slide1-content">
                        <div className="bg"></div>
                        <span className="sub-title">First-rate</span>
                        <h2 className="title">JUST FOR YOU</h2>
                        <img className="price " src="/assets/images/banner/sale/sale-banner4-1.1.png" alt="" />
                    </div>
                </div>
                <div className="home12-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home12/slide-2.jpg">
                    <div className="home12-slide2-content">
                        <div className="bg"></div>
                        <img src="/assets/images/logo/logo-4-big.png" alt="" className="icon" />
                        <span className="title">Spring sale</span>
                        <img className="price " src="/assets/images/slider/home12/slide-2.1.png" alt="" />
                        <div className="link"><a href="shop.html">Shop collection</a></div>
                    </div>
                </div>
                <div className="home12-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home12/slide-3.jpg">
                    <div className="home12-slide3-content">
                        <h2 className="title">Just for you</h2>
                        <h3 className="sub-title">
                            <img className="left-icon " src="/assets/images/slider/home1/slide-2-2.png" alt="Slide Icon" />
                            Making & crafting
                            <img className="right-icon " src="/assets/images/slider/home1/slide-2-3.png" alt="Slide Icon" />
                        </h3>
                        <span className="price">FROM $39</span>
                    </div>
                </div>
            </div>
            <div className="home12-slider-prev swiper-button-prev"><i className="ti-angle-left"></i></div>
            <div className="home12-slider-next swiper-button-next"><i className="ti-angle-right"></i></div>
        </div>
    )
}