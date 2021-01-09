import BaseLayout from '../components/baselayout'
import TopBar from '../components/elements/topbar'
import Header from '../components/elements/header'
import MobileHeader from '../components/elements/mobileheader'
import StickyHeader from '../components/elements/stickyheader'
import Footer from '../components/elements/footer'
import InstagramPostContainer from '../components/containers/instagrampostcontainer'
import SearchContainer from '../components/containers/searchcontainer'

export default function Search() {
    return( 
        <BaseLayout home>
            <TopBar />
            <Header />
            <MobileHeader />
            <StickyHeader />
            <SearchContainer />
            <InstagramPostContainer />
            <Footer />
        </BaseLayout>
    )
}