// import twitter from "../../../assets/footer-image/twitter.png"
// import linkedin from "../../../assets/footer-image/linkedin.png"
// import facebook from "../../../assets/footer-image/facebook.png"
// import { Link } from 'react-router';
// import { useTranslation } from 'react-i18next';
// import logo from '../../../assets/logo/logo-footer.png';
// import footerTitle from '../../../assets/footer-image/title.png';

// const Footer = () => {
//   // This is for translation
//   const { t } = useTranslation();

//   return (
//     <footer className="max-w-[1920px] mx-auto px-20 bg-[#FAF9F6] pt-16 font-inter relative overflow-hidden border-2 border-black">
//       <div className="border-2 border-red-700 mx-auto  lg:px-0 relative z-10">

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-10 border-2 border-green-600 *:border-2 *:border-blue-700">

//           {/* Brand Column */}
//           <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-start items-start gap-6 *:border-2 *:border-red-700 ">
//             {/* Logo */}
//             <img
//               src={logo}
//               alt="Furnessia Logo"
//               className="h-14 w-auto object-contain "
//             />

//             <p className="text-sm font-normal text-gray-600 leading-relaxed max-w-[580px] text-justify">
//               {t('furnessiaDescription')}
//             </p>

//             <div className="flex items-center gap-4 mt-2 *:h-6 *:w-6">
//               <a href="#" >
//                 <img src={twitter} alt="twitter" className='h-full w-full hover:scale-110 delay-100 duration-300' />
//               </a>
//               <a href="#" >
//                 <img src={linkedin} alt="linkedin" className='h-full w-full hover:scale-110 delay-100 duration-300' />
//               </a>
//               <a href="#" >
//                 <img src={facebook} alt="facebook" className='h-full w-full hover:scale-110 delay-100 duration-300' />
//               </a>
//             </div>
//           </div>

//           {/* Links Columns */}
//           <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 pl-0 lg:pl-8">
//             {/* Column 1 */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-sm text-gray-800 font-semibold mb-1">{t('wayToShop')}</h4>
//               <ul className="flex flex-col gap-3.5 text-[13px] font-medium text-gray-600">
//                 <li><Link to="/shop" className="hover:text-gray-900 transition-colors">{t('shopByCategory')}</Link></li>
//                 <li><Link to="/bedroom" className="hover:text-gray-900 transition-colors">{t('bedroom')}</Link></li>
//                 <li><Link to="/dining" className="hover:text-gray-900 transition-colors">{t('dining')}</Link></li>
//                 <li><Link to="/living" className="hover:text-gray-900 transition-colors">{t('living')}</Link></li>
//                 <li><Link to="/office" className="hover:text-gray-900 transition-colors">{t('office')}</Link></li>
//                 <li><Link to="/outdoor" className="hover:text-gray-900 transition-colors">{t('outdoor')}</Link></li>
//                 <li><Link to="/custom-order" className="hover:text-gray-900 transition-colors">{t('customOrder')}</Link></li>
//               </ul>
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-sm text-gray-800 font-semibold mb-1">{t('company')}</h4>
//               <ul className="flex flex-col gap-3.5 text-[13px] font-medium text-gray-600">
//                 <li><Link to="/about" className="hover:text-gray-900 transition-colors">{t('aboutUs')}</Link></li>
//                 <li><Link to="/commitment" className="hover:text-gray-900 transition-colors">{t('ourCommitment')}</Link></li>
//                 <li><Link to="/quality-warranty" className="hover:text-gray-900 transition-colors">{t('qualityWarranty')}</Link></li>
//                 <li><Link to="/blog" className="hover:text-gray-900 transition-colors">{t('blog')}</Link></li>
//               </ul>
//             </div>

//             {/* Column 3 */}
//             <div className="flex flex-col gap-4">
//               <h4 className="text-sm text-gray-800 font-semibold mb-1">{t('clientSupport')}</h4>
//               <ul className="flex flex-col gap-3.5 text-[13px] font-medium text-gray-600">
//                 <li><a href="tel:+8801770066585" className="hover:text-gray-900 transition-colors">+8801770066585</a></li>
//                 <li><Link to="/track-order" className="hover:text-gray-900 transition-colors">{t('trackYourOrder')}</Link></li>
//                 <li><Link to="/returns" className="hover:text-gray-900 transition-colors">{t('returnsReplacements')}</Link></li>
//                 <li><Link to="/faq" className="hover:text-gray-900 transition-colors">{t('faq')}</Link></li>
//                 <li><Link to="/privacy" className="hover:text-gray-900 transition-colors">{t('privacyPolicy')}</Link></li>
//                 <li><Link to="/contact" className="hover:text-gray-900 transition-colors">{t('contact')}</Link></li>
//                 <li><Link to="/terms" className="hover:text-gray-900 transition-colors">{t('termsConditions')}</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Large Watermark Title */}
//       <div className="w-full border-2 border-amber-500 relative z-0 flex justify-center items-end overflow-hidden mt-8 mb-4">
//         <img
//           src={footerTitle}
//           alt="Furnessia"
//           className="w-full max-w-[1760px] object-contain select-none pointer-events-none px-4"
//         />
//       </div>

//       {/* Bottom Bar items wrapper*/}
//       <div className="relative z-10 w-full bg-[#FAF9F6]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200/80 py-4">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-[11.5px] font-medium text-gray-600">
//               © 2027 FURNESSIA. {t('allRightsReserved')}.
//             </p>

//             <div className="flex items-center gap-3">
//               <span className="text-[11.5px] font-bold text-gray-800 mr-2">{t('weAccept')}</span>

//               <div className="flex gap-2">
//                 {[1, 2, 3, 4].map(idx => (
//                   <div key={idx} className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center relative overflow-hidden">
//                     <div className="w-3.5 h-3.5 bg-[#EB001B] rounded-full opacity-90 absolute left-1"></div>
//                     <div className="w-3.5 h-3.5 bg-[#F79E1B] rounded-full opacity-90 absolute right-1 mix-blend-multiply"></div>
//                   </div>
//                 ))}

//                 {/* Visa Placeholder */}
//                 <div className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center">
//                   <span className="text-[9px] font-black tracking-tighter text-[#1A1F71] italic">VISA</span>
//                 </div>

//                 {/* Amex Placeholder */}
//                 <div className="w-8 h-5 bg-[#2E77BC] border border-[#2E77BC] rounded flex items-center justify-center">
//                   <span className="text-[7px] font-bold text-white tracking-tight">AMEX</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import twitter from "../../../assets/footer-image/twitter.png"
import linkedin from "../../../assets/footer-image/linkedin.png"
import facebook from "../../../assets/footer-image/facebook.png"
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/logo/logo-footer.png';
import footerTitle from '../../../assets/footer-image/title.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-20 bg-[#FAF9F6] pt-16 font-inter relative overflow-hidden">

      {/* Main content area */}
      <div className="mx-auto relative z-10">

        {/* ── DESKTOP / LAPTOP: single row grid ── */}
        {/* ── TABLET: brand full-width top, then 3 cols below ── */}
        {/* ── MOBILE: fully stacked ── */}

        <div className="flex flex-col lg:flex-row lg:gap-12 gap-8 mb-10">

          {/* Brand Column — full width on mobile/tablet, fixed width on desktop */}
          <div className="flex flex-col gap-5 lg:w-[340px] lg:shrink-0">
            {/* Logo */}
            <Link to="/#">
              <img
                src={logo}
                alt="Furnessia Logo"
                className="h-14 w-auto object-contain self-start hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-sm font-normal text-gray-600 leading-relaxed text-justify">
              {t('furnessiaDescription')}
            </p>

            <div className="flex items-center gap-4 mt-1">
              <a href="#" className="h-6 w-6 flex items-center justify-center">
                <img src={twitter} alt="twitter" className="h-full w-full hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="h-6 w-6 flex items-center justify-center">
                <img src={linkedin} alt="linkedin" className="h-full w-full hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="h-6 w-6 flex items-center justify-center">
                <img src={facebook} alt="facebook" className="h-full w-full hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          {/* 
            Desktop: 3 columns side by side (flex-row or grid-cols-3)
            Tablet:  2 columns top row (Way To Shop + Client Support), Company below left
            Mobile:  fully stacked (1 column)
          */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8  lg:pl-8">

            {/* Column 1 — Way To Shop */}
            {/* On tablet: row 1 col 1; on desktop: col 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm text-gray-800 font-semibold">{t('wayToShop')}</h4>
              <ul className="flex flex-col gap-3 text-[13px] font-medium text-gray-600">
                <li><Link to="/shop" className="hover:text-gray-900 transition-colors">{t('shopByCategory')}</Link></li>
                <li><Link to="/bedroom" className="hover:text-gray-900 transition-colors">{t('bedroom')}</Link></li>
                <li><Link to="/dining" className="hover:text-gray-900 transition-colors">{t('dining')}</Link></li>
                <li><Link to="/living" className="hover:text-gray-900 transition-colors">{t('living')}</Link></li>
                <li><Link to="/office" className="hover:text-gray-900 transition-colors">{t('office')}</Link></li>
                <li><Link to="/outdoor" className="hover:text-gray-900 transition-colors">{t('outdoor')}</Link></li>
                <li><Link to="/custom-order" className="hover:text-gray-900 transition-colors">{t('customOrder')}</Link></li>
              </ul>
            </div>

            {/* Column 2 — Company */}
            {/* On tablet: row 2 col 1 (sm:col-start-1); on desktop: col 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm text-gray-800 font-semibold">{t('company')}</h4>
              <ul className="flex flex-col gap-3 text-[13px] font-medium text-gray-600">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors">{t('aboutUs')}</Link></li>
                <li><Link to="/commitment" className="hover:text-gray-900 transition-colors">{t('ourCommitment')}</Link></li>
                <li><Link to="/quality-warranty" className="hover:text-gray-900 transition-colors">{t('qualityWarranty')}</Link></li>
                <li><Link to="/blog" className="hover:text-gray-900 transition-colors">{t('blog')}</Link></li>
              </ul>
            </div>

            {/* Column 3 — Client Support */}
            {/* On tablet: row 1 col 2 (sm:col-start-2 sm:row-start-1); on desktop: col 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm text-gray-800 font-semibold">{t('clientSupport')}</h4>
              <ul className="flex flex-col gap-3 text-[13px] font-medium text-gray-600">
                <li><a href="tel:+8801770066585" className="hover:text-gray-900 transition-colors">+8801770066585</a></li>
                <li><Link to="/track-order" className="hover:text-gray-900 transition-colors">{t('trackYourOrder')}</Link></li>
                <li><Link to="/returns" className="hover:text-gray-900 transition-colors">{t('returnsReplacements')}</Link></li>
                <li><Link to="/faq" className="hover:text-gray-900 transition-colors">{t('faq')}</Link></li>
                <li><Link to="/privacy" className="hover:text-gray-900 transition-colors">{t('privacyPolicy')}</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900 transition-colors">{t('contact')}</Link></li>
                <li><Link to="/terms" className="hover:text-gray-900 transition-colors">{t('termsConditions')}</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Large Watermark Title */}
      <div className="relative z-0 flex justify-center items-end overflow-hidden mt-8 mb-4">
        <img
          src={footerTitle}
          alt="Furnessia"
          className="w-full max-w-[1760px] object-contain select-none pointer-events-none px-4"
        />
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full bg-[#FAF9F6]">
        <div className="border-t border-gray-200/80 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11.5px] font-medium text-gray-600">
              © 2027 FURNESSIA. {t('allRightsReserved')}.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11.5px] font-bold text-gray-800">{t('weAccept')}</span>

              <div className="flex gap-2 items-center">
                {[1, 2, 3, 4].map(idx => (
                  <div key={idx} className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center relative overflow-hidden">
                    <div className="w-3.5 h-3.5 bg-[#EB001B] rounded-full opacity-90 absolute left-1"></div>
                    <div className="w-3.5 h-3.5 bg-[#F79E1B] rounded-full opacity-90 absolute right-1 mix-blend-multiply"></div>
                  </div>
                ))}

                {/* Visa */}
                <div className="w-8 h-5 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <span className="text-[9px] font-black tracking-tighter text-[#1A1F71] italic">VISA</span>
                </div>

                {/* Amex */}
                <div className="w-8 h-5 bg-[#2E77BC] border border-[#2E77BC] rounded flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white tracking-tight">AMEX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer >
  );
};

export default Footer;