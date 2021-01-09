import Link from 'next/link'
import CurrencyFormat from 'react-currency-format'

export default function BigProductCard({ imgURL, name, price, priceOld, sale, slug }) {
    return(
        <div className="col">
            <div className="product">
                <div className="product-thumb">
                    <Link href={"/products/" + slug}>
                        <a href="product-details.html" className="image">
                            {sale && 
                                <span className="product-badges">
                                    <span className="onsale">{sale}</span>
                                </span>
                            }
                            <img src={imgURL} alt="Product Image" />
                            <img className="image-hover" src={imgURL} alt="Product Image" />
                        </a>
                    </Link>
                    <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                </div>
                <div className="product-info">
                    <h6 className="title"><a href="product-details.html">{name}</a></h6>
                    <span className="price">
                        {priceOld ? 
                        <>
                            <span className="old">
                                <CurrencyFormat value={priceOld} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
                            </span>
                            <span className="new"><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></span>
                        </>
                        : <><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></>} 
                    </span>
                    <div className="product-buttons">
                        <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                        <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                        <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}