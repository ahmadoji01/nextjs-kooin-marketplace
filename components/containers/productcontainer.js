import BigProductCard from '../elements/bigproductcard'
import { API_BASE_URL } from '../../shared/constants/AppConst'

export default function ProductContainer({ position, products }) {
    
    let saleBannerClass, cardsContainerClass;
    if(position == "right") {
        saleBannerClass = "col-lg-6 col-12 order-lg-2 learts-mb-30";
        cardsContainerClass = "col-lg-6 col-12 order-lg-1 learts-mb-30"
    } else {
        saleBannerClass = "col-lg-6 col-12 learts-mb-30";
        cardsContainerClass = "col-lg-6 col-12 learts-mb-30"
    }
    
    return(
        <div className="section section-padding">
            <div className="container">

                <div className="section-title2 text-center">
                    <h2 className="title title-icon-both">Our best sellers</h2>
                    <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
                </div>
                { products && 
                    <div className="row learts-mb-n30">
                        <div className={saleBannerClass}>
                            <div className="sale-banner11">
                                <div className="inner">
                                    <img src={API_BASE_URL + products[0].product_images[0].imageURL} alt="" />
                                    <div className="content">
                                        <h3 className="title">Rosewood Shelf</h3>
                                        <img className="price " src="assets/images/banner/sale/sale-banner4-1.1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="countdown2 primary2 justify-content-center learts-mt-50" data-countdown="2021/01/01"></div>
                            <div className="d-flex justify-content-center learts-mt-50">
                                <a href="#" className="btn btn-primary btn-hover-black">shop now</a>
                            </div>
                        </div>
                        <div className={cardsContainerClass}>
                            <div className="products row row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
                                { products.slice(1).map((product) => (
                                    <BigProductCard 
                                        imgURL={ API_BASE_URL + product.product_images[0].imageURL}
                                        price={product.price}
                                        name={product.name} 
                                        //priceOld="150000" 
                                        //sale="33%" 
                                        />
                                )) }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}