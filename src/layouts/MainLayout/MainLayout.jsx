import { Outlet } from "react-router"
import Navbar from "../../components/shared/navbar/Navbar"
import Footer from "../../components/shared/footer/Footer"


function HomeLayout() {


  return (
  <main>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
  </main>
  )
}

export default HomeLayout
