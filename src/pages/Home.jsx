import Nav from '../Components/Nav'
import LatestNews from '../Components/LatestBlogs'
import LnctFooter from '../Components/LnctFooter'
import StackHome from '../Components/HomeComponets/stackHome'
import NewsMedia from '../Components/NewsMedia'

const Home = () => {
  return (
    <>
    {/* <Loader/> */}
    <Nav/>
    <StackHome/>
    <NewsMedia/>
    <LatestNews/>
    <LnctFooter/>
    {/* <Gallery /> */}
    </>
  )
}

export default Home