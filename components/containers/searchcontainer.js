export default function SearchContainer({}) {
    return(
        <div className="section section-padding pt-0">
            <div className="shop-toolbar border-bottom">
                <div className="container">
                    <div className="row learts-mb-n20">
                        <div className="col-md col-12 align-self-center learts-mb-20">
                            <div className="isotope-filter shop-product-filter" data-target="#shop-products">
                                <button className="active" data-filter="*">all</button>
                                <button data-filter=".featured">Hot Products</button>
                                <button data-filter=".new">New Products</button>
                                <button data-filter=".sales">Sales Products</button>
                            </div>
                        </div>
                        <div className="col-md-auto col-12 learts-mb-20">
                            <ul className="shop-toolbar-controls">

                                <li>
                                    <div className="product-sorting">
                                        <select className="nice-select">
                                            <option value="menu_order" selected="selected">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="product-column-toggle d-none d-xl-flex">
                                        <button className="toggle hintT-top" data-hint="5 Column" data-column="5"><i className="ti-layout-grid4-alt"></i></button>
                                        <button className="toggle active hintT-top" data-hint="4 Column" data-column="4"><i className="ti-layout-grid3-alt"></i></button>
                                        <button className="toggle hintT-top" data-hint="3 Column" data-column="3"><i className="ti-layout-grid2-alt"></i></button>
                                    </div>
                                </li>
                                <li>
                                    <a className="product-filter-toggle" href="#product-filter">Filters</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div id="product-filter" className="product-filter bg-light">
                <div className="container">
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
                        <div className="col learts-mb-30">
                            <h3 className="widget-title product-filter-widget-title">Sort by</h3>
                            <ul className="widget-list product-filter-widget customScroll">
                                <li><a href="#">Popularity</a></li>
                                <li><a href="#">Average rating</a></li>
                                <li><a href="#">Newness</a></li>
                                <li><a href="#">Price: low to high</a></li>
                                <li><a href="#">Price: high to low</a></li>
                            </ul>
                        </div>
                        <div className="col learts-mb-30">
                            <h3 className="widget-title product-filter-widget-title">Price filter</h3>
                            <ul className="widget-list product-filter-widget customScroll">
                                <li> <a href="#">All</a></li>
                                <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>0.00</span> - <span className="amount"><span className="cur-symbol">£</span>80.00</span></a></li>
                                <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>80.00</span> - <span className="amount"><span className="cur-symbol">£</span>160.00</span></a></li>
                                <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>160.00</span> - <span className="amount"><span className="cur-symbol">£</span>240.00</span></a></li>
                                <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>240.00</span> - <span className="amount"><span className="cur-symbol">£</span>320.00</span></a></li>
                                <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>320.00</span> +</a></li>
                            </ul>
                        </div>
                        <div className="col learts-mb-30">
                            <h3 className="widget-title product-filter-widget-title">Categories</h3>
                            <ul className="widget-list product-filter-widget customScroll">
                                <li><a href="#">Gift ideas</a> <span className="count">16</span></li>
                                <li><a href="#">Home Decor</a> <span className="count">16</span></li>
                                <li><a href="#">Kids &amp; Babies</a> <span className="count">6</span></li>
                                <li><a href="#">Kitchen</a> <span className="count">15</span></li>
                                <li><a href="#">Kniting &amp; Sewing</a> <span className="count">4</span></li>
                                <li><a href="#">Pots</a> <span className="count">4</span></li>
                                <li><a href="#">Toys</a> <span className="count">6</span></li>
                            </ul>
                        </div>
                        <div className="col learts-mb-30">
                            <h3 className="widget-title product-filter-widget-title">Filters by colors</h3>
                            <ul className="widget-colors product-filter-widget customScroll">
                                <li><a href="#" className="hintT-top" data-hint="Black"><span data-bg-color="#000000">Black</span></a></li>
                                <li><a href="#" className="hintT-top" data-hint="White"><span data-bg-color="#FFFFFF">White</span></a></li>
                                <li><a href="#" className="hintT-top" data-hint="Dark Red"><span data-bg-color="#b2483c">Dark Red</span></a></li>
                                <li><a href="#" className="hintT-top" data-hint="Flaxen"><span data-bg-color="#d5b85a">Flaxen</span></a></li>
                                <li><a href="#" className="hintT-top" data-hint="Pine"><span data-bg-color="#01796f">Pine</span></a></li>
                                <li><a href="#" className="hintT-top" data-hint="Tortilla"><span data-bg-color="#997950">Tortilla</span></a></li>
                            </ul>
                        </div>
                        <div className="col learts-mb-30">
                            <h3 className="widget-title product-filter-widget-title">Brands</h3>
                            <ul className="widget-list product-filter-widget customScroll">
                                <li><a href="#">Alexander</a> <span className="count">(2)</span></li>
                                <li><a href="#">Carmella</a> <span className="count">(4)</span></li>
                                <li><a href="#">Danielle</a> <span className="count">(7)</span></li>
                                <li><a href="#">Diana Day</a> <span className="count">(13)</span></li>
                                <li><a href="#">Emilia</a> <span className="count">(2)</span></li>
                                <li><a href="#">Gasmine</a> <span className="count">(15)</span></li>
                                <li><a href="#">Jack &amp; Ella</a> <span className="count">(7)</span></li>
                                <li><a href="#">Juliette</a> <span className="count">(11)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section learts-mt-70">
                <div className="container">
                    <div className="row learts-mb-n50">

                        <div className="col-lg-9 col-12 learts-mb-50 order-lg-2">
                            <div id="shop-products" className="products isotope-grid row row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="grid-sizer col-1"></div>

                                <div className="grid-item col featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-17.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-17-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">3D Attractive Pot</a></h6>
                                            <span className="price">
                                                $90.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <span className="product-badges">
                                                    <span className="outofstock"><i className="fal fa-frown"></i></span>
                                                </span>
                                                <img src="assets/images/product/s328/product-14.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-14-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Abstract Folded Pots</a></h6>
                                            <span className="price">
                                                $50.00 - $55.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <span className="product-badges">
                                                <span className="hot">hot</span>
                                            </span>
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-30.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-30-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Adhesive Tape Dispenser</a></h6>
                                            <span className="price">
                                                $15.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-9.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-9-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Aluminum Equestrian</a></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col sales featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-20%</span>
                                                </span>
                                                <img src="assets/images/product/s328/product-25.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-25-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Antique Sewing Scissors</a></h6>
                                            <span className="price">
                                                <span className="old">$15.00</span>
                                            <span className="new">$12.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col sales">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-13%</span>
                                                </span>
                                                <img src="assets/images/product/s328/product-1.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-1-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Boho Beard Mug</a></h6>
                                            <span className="price">
                                                <span className="old">$45.00</span>
                                            <span className="new">$39.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-31.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Bouncer Measuring Cup</a></h6>
                                            <span className="price">
                                                $150.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-15.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-15-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Brush & Dustpan Set</a></h6>
                                            <span className="price">
                                                $9.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-12.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-12-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Cape Cottage Playhouse</a></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <span className="product-badges">
                                                    <span className="outofstock"><i className="fal fa-frown"></i></span>
                                                </span>
                                                <img src="assets/images/product/s328/product-32.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-32-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                            <div className="product-options">
                                                <ul className="colors">
                                                    <li style={{ backgroundColor: "#000000" }}>color one</li>
                                                    <li style={{ backgroundColor: "#ffffff" }}>color two</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Cleaning Dustpan & Brush</a></h6>
                                            <span className="price">
                                                $38.00 - $50.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-6.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-6-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Clear Silicate Teapot</a></h6>
                                            <span className="price">
                                                $140.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col sales new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-13%</span>
                                                </span>
                                                <img src="assets/images/product/s328/product-19.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Country Feast Set</a></h6>
                                            <span className="price">
                                                <span className="old">$45.00</span>
                                            <span className="new">$39.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <span className="product-badges">
                                                    <span className="outofstock"><i className="fal fa-frown"></i></span>
                                                <span className="hot">hot</span>
                                                </span>
                                                <img src="assets/images/product/s328/product-8.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-8-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                            <div className="product-options">
                                                <ul className="colors">
                                                    <li style={{ backgroundColor: "#000000" }}>color one</li>
                                                    <li style={{ backgroundColor: "#b2483c" }}>color two</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Decorative Christmas Fox</a></h6>
                                            <span className="price">
                                                $50.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col featured">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-28.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-28-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Digital Camera System</a></h6>
                                            <span className="price">
                                                $350.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item col new">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <a href="product-details.html" className="image">
                                                <img src="assets/images/product/s328/product-11.jpg" alt="Product Image" />
                                                <img className="image-hover " src="assets/images/product/s328/product-11-hover.jpg" alt="Product Image" />
                                            </a>
                                            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><a href="product-details.html">Electric Egg Blender</a></h6>
                                            <span className="price">
                                                $200.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fal fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fal fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fal fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="text-center learts-mt-70">
                                <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="ti-plus"></i> More</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 learts-mb-10 order-lg-1">
                            <div className="single-widget learts-mb-40">
                                <div className="widget-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search products...." />
                                        <button><i className="fal fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-widget learts-mb-40">
                                <h3 className="widget-title product-filter-widget-title">Product categories</h3>
                                <ul className="widget-list">
                                    <li><a href="#">Gift ideas</a> <span className="count">16</span></li>
                                    <li><a href="#">Home Decor</a> <span className="count">16</span></li>
                                    <li><a href="#">Kids &amp; Babies</a> <span className="count">6</span></li>
                                    <li><a href="#">Kitchen</a> <span className="count">15</span></li>
                                    <li><a href="#">Kniting &amp; Sewing</a> <span className="count">4</span></li>
                                    <li><a href="#">Pots</a> <span className="count">4</span></li>
                                    <li><a href="#">Toys</a> <span className="count">6</span></li>
                                </ul>
                            </div>
                            <div className="single-widget learts-mb-40">
                                <h3 className="widget-title product-filter-widget-title">Filters by price</h3>
                                <div className="widget-price-range">
                                    <input className="range-slider" type="text" data-min="0" data-max="350" data-from="0" data-to="350" />
                                </div>
                            </div>
                            <div className="single-widget learts-mb-40">
                                <h3 className="widget-title product-filter-widget-title">Products</h3>
                                <ul className="widget-products">
                                    <li className="product">
                                        <div className="thumbnail">
                                            <a href="product-details.html"><img src="assets/images/product/widget-1.jpg" alt="List product" /></a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title"><a href="product-details.html">Walnut Cutting Board</a></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="ratting">
                                                <span className="rate" style={{ width: "80%" }}></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product">
                                        <div className="thumbnail">
                                            <a href="product-details.html"><img src="assets/images/product/widget-2.jpg" alt="List product" /></a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title"><a href="product-details.html">Decorative Christmas Fox</a></h6>
                                            <span className="price">
                                                $50.00
                                            </span>
                                            <div className="ratting">
                                                <span className="rate" style={{ width: "80%" }}></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product">
                                        <div className="thumbnail">
                                            <a href="product-details.html"><img src="assets/images/product/widget-3.jpg" alt="List product" /></a>
                                        </div>
                                        <div className="content">
                                            <h6 className="title"><a href="product-details.html">Lucky Wooden Elephant</a></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="single-widget learts-mb-40">
                                <h3 className="widget-title product-filter-widget-title">Product Tags</h3>
                                <div className="widget-tags">
                                    <a href="#">handmade</a>
                                    <a href="#">learts</a>
                                    <a href="#">mug</a>
                                    <a href="#">product</a>
                                    <a href="#">learts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}