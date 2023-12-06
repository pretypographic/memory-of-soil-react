import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

function Language() {
  const { languageContext, setLanguageContext } = useContext(LanguageContext);

  function handleMouseDawnEng() {
    setLanguageContext('eng');
  }

  function handleMouseDawnRus() {
    setLanguageContext('rus');
  }

  return (
    <div className="language">
      <button
        className={`language__option ${languageContext === 'rus' && 'language__option_active'}`}
        onMouseDown={handleMouseDawnRus}
        type="button"
        aria-label='Rus'>Rus</button>
      <button
        className={`language__option ${languageContext === 'eng' && 'language__option_active'}`}
        onMouseDown={handleMouseDawnEng}
        type="button"
        aria-label='Eng'>Eng</button>
    </div>
  )
}

export { Language }