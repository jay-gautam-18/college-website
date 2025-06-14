import Nav from '../Components/Nav'
import LatestNews from '../Components/LatestBlogs'
import LnctFooter from '../Components/LnctFooter'
import StackHome from '../Components/HomeComponets/stackHome'
import NewsMedia from '../Components/NewsMedia'
import Gallery from '../Components/Gallery'
import Loader from '../Components/Loader'

const Home = () => {
  return (
    <>
    {/* <Loader/> lund peer rkhu mere loader ko */}
    <Nav/>
    <StackHome/>
    <Gallery/>
    <NewsMedia/>
    <LatestNews/>
    <LnctFooter/>
    {/* <Gallery /> */}
    </>
  )
}

export default Home