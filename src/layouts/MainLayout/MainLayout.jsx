import { useState } from "react"
import { Outlet } from "react-router"
import Navbar from "../../components/shared/navbar/Navbar"
import Footer from "../../components/shared/footer/Footer"


import LanguageSwitcher from "../../components/shared/languageSwticher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import MobileNavbar from "../../components/shared/mobile-navbar/MobileNavbar";


function HomeLayout() {
  const { t } = useTranslation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main>
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}></Navbar>
      <MobileNavbar isSidebarOpen={isSidebarOpen}></MobileNavbar>
      <div className="min-h-[calc(100vh-646px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default HomeLayout
