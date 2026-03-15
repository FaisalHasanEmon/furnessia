import i18n from "../../../i18n";

function LanguageSwitcher() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("bn")}>বাংলা</button>
    </div>
  );
}

export default LanguageSwitcher;