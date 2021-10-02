import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Languages() {
  const { language, setLanguage } = React.useContext(Context);

  return (
    <LanguageList>
      <LanguageButton
        isSelected={language === "es_UY"}
        onClick={() => setLanguage("es_UY")}
      >
        {translate(language, "spanish")}
      </LanguageButton>
      <LanguageButton
        isSelected={language === "en_UK"}
        onClick={() => setLanguage("en_UK")}
      >
        {translate(language, "english")}
      </LanguageButton>
    </LanguageList>
  );
}

export default Languages;

const LanguageList = styledComponents.div`
  max-width: 180px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px auto;
`;

const LanguageButton = styledComponents.button`
  border: 1px solid rgb(205, 140, 193);
  padding: 8px 16px;
  background: ${(props) => (props.isSelected ? `rgb(205, 140, 193)` : `white`)};
  color: ${(props) => (props.isSelected ? `white` : `rgb(205, 140, 193)`)};
  cursor: pointer;

  &:hover {
    background: rgb(205, 140, 193);
    color: white;
  }
`;
