import CategoryCard from '../elements/categorycard' 

export default function TopContainer() {
    return(
    <>
        <div className="section section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-xl-7 col-lg-8 col-12 mx-auto">
                        <div className="about-us2">
                            <div className="inner">
                                <h2 className="title">Live out your life</h2>
                                <h5 className="sub-title">WELCOME TO LEARTS STORE</h5>
                                <div className="desc">
                                    <p>Learts is an online shop of two passionate craftsmen where they sell handicrafts and arts’ works in the US. We provide high-end unique vases, wall arts, home accessories, and furniture pieces.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 learts-mb-n40">
                    <CategoryCard title="Gift Ideas" bgColor="#f4ede7" />

                    <div className="col learts-mb-40">
                        <div className="category-banner4">
                            <a href="shop.html" className="inner">
                                <div className="image"><img src="assets/images/banner/category/banner-s4-2.jpg" alt="" /></div>
                                <div className="content" data-bg-color="#e8f5f2">
                                    <h3 className="title">Home Decor</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col learts-mb-40">
                        <div className="category-banner4">
                            <a href="shop.html" className="inner">
                                <div className="image"><img src="assets/images/banner/category/banner-s4-3.jpg" alt="" /></div>
                                <div className="content" data-bg-color="#e3e4f5">
                                    <h3 className="title">Toys</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col learts-mb-40">
                        <div className="category-banner4">
                            <a href="shop.html" className="inner">
                                <div className="image"><img src="assets/images/banner/category/banner-s4-4.jpg" alt="" /></div>
                                <div className="content" data-bg-color="#faf5e5">
                                    <h3 className="title">Kitchen</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}