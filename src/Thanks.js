import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Thanks() {
  const { language } = React.useContext(Context);

  return (
    <ThanksContainer>{translate(language, "thanksForJoining")}</ThanksContainer>
  );
}

const ThanksContainer = styledComponents.div`
  font-size: 30px;
  color: rgb(205, 140, 193);
  margin-bottom: 40px;
  font-weight: 600;
`;

export default Thanks;
