export default function OffCanvasCart() {
    return(
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
            <div className="inner">
                <div className="head">
                    <span className="title">Cart</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="product-details.html" className="image"><img src="/assets/images/product/cart-product-1.jpg" alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="product-details.html" className="title">Walnut Cutting Board</a>
                                <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="product-details.html" className="image"><img src="/assets/images/product/cart-product-2.jpg" alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="product-details.html" className="title">Lucky Wooden Elephant</a>
                                <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="product-details.html" className="image"><img src="/assets/images/product/cart-product-3.jpg" alt="Cart product Image" /></a>
                            <div className="content">
                                <a href="product-details.html" className="title">Fish Cut Out Set</a>
                                <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="sub-total">
                        <strong>Subtotal :</strong>
                        <span className="amount">$144.00</span>
                    </div>
                    <div className="buttons">
                        <a href="shopping-cart.html" className="btn btn-dark btn-hover-primary">view cart</a>
                        <a href="checkout.html" className="btn btn-outline-dark">checkout</a>
                    </div>
                    <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
                </div>
            </div>
        </div>
    )
}