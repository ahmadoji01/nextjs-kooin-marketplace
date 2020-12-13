import CategoryCard from '../elements/categorycard' 

export default function TopContainer({ categoriesProducts }) {
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
        { categoriesProducts && 
            <div className="section">
                <div className="container">
                    <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 learts-mb-n40">
                        { categoriesProducts.map((categoriesProduct) => (
                            <CategoryCard title={categoriesProduct.name} product={categoriesProduct.products[0]} bgColor="#f4ede7" />
                        )) }
                    </div>
                </div>
            </div>
        }
    </>
    )
}