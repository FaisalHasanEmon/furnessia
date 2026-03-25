import { useState } from "react";
import i18n from "../../../i18n";

function LanguageSwitcher() {

  const [active, setActive] = useState(false);
  const changeLanguage = (lng) => {
    lng === "en" ? setActive(false) : setActive(true);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 justify-center items-center font-albert font-medium text-sm leading-5">
      <div>

        <button onClick={() => changeLanguage("en")} className={`${active ? "text-[#8F8F8F]" : "text-[#323232]"}`}>ENG</button>
      </div>
      <div>
        |
      </div>
      <div>

        <button onClick={() => changeLanguage("bn")} className={`${active ? "text-[#323232] " : "text-[#8F8F8F]"}`}>বাংলা</button>
      </div>
    </div>
  );
}

export default LanguageSwitcher;