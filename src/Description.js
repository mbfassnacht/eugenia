import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Description() {
  const { language } = React.useContext(Context);

  return (
    <div className="description">
      <Paragraph>{translate(language, "descriptionOne")}</Paragraph>
      <Paragraph>{translate(language, "descriptionTwo")}</Paragraph>
      <Paragraph>{translate(language, "descriptionThree")}</Paragraph>
      <Paragraph>{translate(language, "descriptionFour")}</Paragraph>
    </div>
  );
}

const Paragraph = styledComponents.div`
  margin-bottom: 20px;
`;

export default Description;
