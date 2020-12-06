export default function CategoryCard({ title, bgColor }) {
    return(
        <div class="col learts-mb-40">
            <div class="category-banner4">
                <a href="shop.html" class="inner">
                    <div class="image"><img src="assets/images/banner/category/banner-s4-1.jpg" alt="" /></div>
                    <div class="content" data-bg-color={bgColor}>
                        <h3 class="title">{title}</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}