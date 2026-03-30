
import Banner from '../../components/banner/Banner'
import Cta from '../../components/cta/Cta'
import DefineYourSpace from '../../components/define-your-space-banner/DefineYourSpace'
import EMIBanner from '../../components/emi-banner/EMIBanner'
import FurnessiaVideo from '../../components/furnessia-video/FurnessiaVideo'
import ShopByCategory from '../../components/shop-by-category/ShopByCategory'
import Inovation from '../../components/inovation/Inovation'
import ModernAndDurableDoors from '../../components/modern-and-durable-doors/ModernAndDurableDoors'
import FeaturedProducts from '../../components/featured-products/FeaturedProducts'
import CustomizeProducts from '../../components/customize-products/CustomizeProducts'

const Home = () => {
  return (
    <>
      <Banner />
      <EMIBanner />
      <ShopByCategory />
      <DefineYourSpace />
      <Inovation />
      <FeaturedProducts />
      <CustomizeProducts />
      <ModernAndDurableDoors />
      <FurnessiaVideo />
      <Cta />
    </>

  )
}

export default Home