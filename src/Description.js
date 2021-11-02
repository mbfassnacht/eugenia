import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Description() {
  const { language } = React.useContext(Context);

  return (
    <div className="description">
      <ParagraphBox>{translate(language, "descriptionOne")}</ParagraphBox>
      <ParagraphBox>{translate(language, "descriptionTwo")}</ParagraphBox>
      <ParagraphBox>
        <Paragraph>{translate(language, "descriptionThree")}</Paragraph>
        <ParagraphLineThrough>
          {translate(language, "descriptionFour")}
        </ParagraphLineThrough>
        <Paragraph>{translate(language, "descriptionFive")}</Paragraph>
      </ParagraphBox>
      <ParagraphBox>{translate(language, "descriptionSix")}</ParagraphBox>
      <ParagraphBox>{translate(language, "clarification")}</ParagraphBox>
    </div>
  );
}

const ParagraphBox = styledComponents.div`
  margin-bottom: 20px;
`;

const Paragraph = styledComponents.span`
`;

const ParagraphLineThrough = styledComponents.span`
  text-decoration:line-through;
`;

export default Description;
