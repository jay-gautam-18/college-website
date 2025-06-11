import Nav from '../Components/Nav'
import Home1 from '../Components/HomeComponets/Home1'
import Ourservices from '../Components/Ourservices'
import LatestNews from '../Components/Latestnews'
import LnctFooter from '../Components/LnctFooter'
import HoverRevealCard from '../Components/HoverRevealCard'
import RollingGallery from '../Components/RollingGallery'
const Home = () => {
  return (
    <>
    <Nav/>
    <hr />
    <Home1/>
    <Ourservices/>
    <LatestNews/>
    <LnctFooter/>
    <HoverRevealCard/>
    <RollingGallery autoplay={true} pauseOnHover={true} />
    </>
  )
}

export default Home