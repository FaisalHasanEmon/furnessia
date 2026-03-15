import { Outlet } from "react-router"
import Navbar from "../../components/shared/navbar/Navbar"
import Footer from "../../components/shared/footer/Footer"


import LanguageSwitcher from "../../components/shared/languageSwticher/LanguageSwitcher";
import { useTranslation } from "react-i18next";


function HomeLayout() {
  const {t}= useTranslation();

  return (
  <main>
    <Navbar></Navbar>
    <h1>{t("welcome")}</h1>
    <LanguageSwitcher></LanguageSwitcher>
    <Outlet></Outlet>
    <Footer></Footer>
  </main>
  )
}

export default HomeLayout
