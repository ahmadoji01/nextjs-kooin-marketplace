import CategoryCard from '../elements/categorycard' 

export default function TopContainer() {
    return(
    <>
        <div class="section section-padding">
            <div class="container">
                <div class="row">

                    <div class="col-xl-7 col-lg-8 col-12 mx-auto">
                        <div class="about-us2">
                            <div class="inner">
                                <h2 class="title">Live out your life</h2>
                                <h5 class="sub-title">WELCOME TO LEARTS STORE</h5>
                                <div class="desc">
                                    <p>Learts is an online shop of two passionate craftsmen where they sell handicrafts and arts’ works in the US. We provide high-end unique vases, wall arts, home accessories, and furniture pieces.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 learts-mb-n40">
                    <CategoryCard title="Gift Ideas" bgColor="#f4ede7" />

                    <div class="col learts-mb-40">
                        <div class="category-banner4">
                            <a href="shop.html" class="inner">
                                <div class="image"><img src="assets/images/banner/category/banner-s4-2.jpg" alt="" /></div>
                                <div class="content" data-bg-color="#e8f5f2">
                                    <h3 class="title">Home Decor</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col learts-mb-40">
                        <div class="category-banner4">
                            <a href="shop.html" class="inner">
                                <div class="image"><img src="assets/images/banner/category/banner-s4-3.jpg" alt="" /></div>
                                <div class="content" data-bg-color="#e3e4f5">
                                    <h3 class="title">Toys</h3>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col learts-mb-40">
                        <div class="category-banner4">
                            <a href="shop.html" class="inner">
                                <div class="image"><img src="assets/images/banner/category/banner-s4-4.jpg" alt="" /></div>
                                <div class="content" data-bg-color="#faf5e5">
                                    <h3 class="title">Kitchen</h3>
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