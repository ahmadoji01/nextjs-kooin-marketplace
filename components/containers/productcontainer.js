import BigProductCard from '../elements/bigproductcard'

export default function ProductContainer({ position }) {
    
    let saleBannerClass, cardsContainerClass;
    if(position == "right") {
        saleBannerClass = "col-lg-6 col-12 order-lg-2 learts-mb-30";
        cardsContainerClass = "col-lg-6 col-12 order-lg-1 learts-mb-30"
    } else {
        saleBannerClass = "col-lg-6 col-12 learts-mb-30";
        cardsContainerClass = "col-lg-6 col-12 learts-mb-30"
    }
    
    return(
        <div class="section section-padding">
            <div class="container">

                <div class="section-title2 text-center">
                    <h2 class="title title-icon-both">Our best sellers</h2>
                    <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
                </div>

                <div class="row learts-mb-n30">
                    <div class={saleBannerClass}>
                        <div class="sale-banner11">
                            <div class="inner">
                                <img src="assets/images/banner/sale/sale-banner11-1.jpg" alt="" />
                                <div class="content">
                                    <h3 class="title">Rosewood Shelf</h3>
                                    <img class="price " src="assets/images/banner/sale/sale-banner4-1.1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="countdown2 primary2 justify-content-center learts-mt-50" data-countdown="2021/01/01"></div>
                        <div class="d-flex justify-content-center learts-mt-50">
                            <a href="#" class="btn btn-primary btn-hover-black">shop now</a>
                        </div>
                    </div>
                    <div class={cardsContainerClass}>
                        <div class="products row row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
                            <BigProductCard 
                                imgURL="assets/images/product/s270/product-1.jpg" 
                                price="100000" 
                                name="Boho Beard Mug" 
                                priceOld="150000" 
                                sale="33%" />
                            
                            <BigProductCard 
                                imgURL="assets/images/product/s270/product-1.jpg" 
                                price="100000" 
                                name="Motorized Tricycle" />
                            
                            <BigProductCard 
                                imgURL="assets/images/product/s270/product-1.jpg" 
                                price="125000" 
                                name="Walnut Cutting Board" />

                            <BigProductCard 
                                imgURL="assets/images/product/s270/product-1.jpg" 
                                price="25000" 
                                name="Pizza Plate Tray" />
                                
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}