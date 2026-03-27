
import Banner from '../../components/banner/Banner'
import Cta from '../../components/cta/Cta'
import EMIBanner from '../../components/emi-banner/EMIBanner'
import FurnessiaVideo from '../../components/furnessia-video/FurnessiaVideo'
import ShopByCategory from '../../components/shop-by-category/ShopByCategory'

const Home = () => {
  return (
    <>
      <Banner />
      <EMIBanner />
      <ShopByCategory />
      <FurnessiaVideo />
      <Cta />
    </>

  )
}

export default Home