import Head from 'next/head'

const name = 'Your Name'
export const siteTitle = 'Kooin - Your Favorite Handcrafts on Your Hand'

export default function BaseLayout({ children, home }) {
  return (
    <>
        <Head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <title>{siteTitle}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            
            <link rel="shortcut icon" type="image/x-icon" href="/assets/images/icon.png" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/vendor/font-awesome-pro.min.css" />
            <link rel="stylesheet" href="/assets/css/vendor/themify-icons.css" />
            <link rel="stylesheet" href="/assets/css/vendor/customFonts.css" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.0/css/perfect-scrollbar.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.1/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />

            <link rel="stylesheet" href="/assets/css/style.min.css" />
        </Head>

        <main>{children}</main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="/assets/js/plugins/swiper.min.js"></script>
        <script src="/assets/js/plugins/slick.min.js"></script>
        <script src="/assets/js/plugins/mo.min.js"></script>
        <script src="/assets/js/plugins/jquery.instagramFeed.min.js"></script>
        <script src="/assets/js/plugins/jquery.ajaxchimp.min.js"></script>
        <script src="/assets/js/plugins/jquery.countdown.min.js"></script>
        <script src="/assets/js/plugins/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/js/plugins/isotope.pkgd.min.js"></script>
        <script src="/assets/js/plugins/jquery.matchHeight-min.js"></script>
        <script src="/assets/js/plugins/ion.rangeSlider.min.js"></script>
        <script src="/assets/js/plugins/photoswipe.min.js"></script>
        <script src="/assets/js/plugins/photoswipe-ui-default.min.js"></script>
        <script src="/assets/js/plugins/jquery.zoom.min.js"></script>
        <script src="/assets/js/plugins/ResizeSensor.js"></script>
        <script src="/assets/js/plugins/jquery.sticky-sidebar.min.js"></script>
        <script src="/assets/js/plugins/product360.js"></script>
        <script src="/assets/js/plugins/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/plugins/jquery.scrollUp.min.js"></script>
        <script src="/assets/js/plugins/scrollax.min.js"></script>

        <script src="/assets/js/main.js"></script>
    </>
  )
}