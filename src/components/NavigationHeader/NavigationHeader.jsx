import { useContext } from "react";
import { ObjectContext } from "../../contexts/ObjectContext";

import { Language } from "../Language/Language";

function NavigationHeader({ title, focus }) {
  const { viewingIsFocused } = useContext(ObjectContext);

  return (
    <header className="navigation-header">
      <h1 className={`navigation-header__title ${viewingIsFocused && 'navigation-header__title_disappeared'}`}>{title}</h1>
      {
        focus.text &&
        <Language />
      }
    </header>
  )
};

export { NavigationHeader };