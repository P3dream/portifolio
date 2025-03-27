import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <h1>{t("header")}</h1>

      <label htmlFor="language-select">{t("select_language")}</label>
      <select id="language-select" onChange={handleChangeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>

      <footer></footer>
    </>
  );
}

export default App;
