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

            <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
            <link rel="stylesheet" href="/assets/css/vendor/font-awesome-pro.min.css" />
            <link rel="stylesheet" href="/assets/css/vendor/themify-icons.css" />
            <link rel="stylesheet" href="/assets/css/vendor/customFonts.css" />

            <link rel="stylesheet" href="/assets/css/plugins/select2.min.css" />
            <link rel="stylesheet" href="/assets/css/plugins/perfect-scrollbar.css" />
            <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
            <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
            <link rel="stylesheet" href="/assets/css/plugins/ion.rangeSlider.min.css" />
            <link rel="stylesheet" href="/assets/css/plugins/photoswipe.css" />
            <link rel="stylesheet" href="/assets/css/plugins/photoswipe-default-skin.css" />
            <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
            <link rel="stylesheet" href="/assets/css/plugins/slick.css" />

            <link rel="stylesheet" href="/assets/css/style.min.css" />
        </Head>

        <main>{children}</main>

        <script src="/assets/js/vendor/modernizr-3.6.0.min.js"></script>
        <script src="/assets/js/vendor/jquery-3.4.1.min.js"></script>
        <script src="/assets/js/vendor/jquery-migrate-3.1.0.min.js"></script>
        <script src="/assets/js/vendor/bootstrap.bundle.min.js"></script>

        <script src="/assets/js/plugins/select2.min.js"></script>
        <script src="/assets/js/plugins/jquery.nice-select.min.js"></script>
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