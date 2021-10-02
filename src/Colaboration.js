import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Colaboration() {
  const { language } = React.useContext(Context);

  return (
    <ColaborationContainer>
      <Title>{translate(language, "waysToContribute")}</Title>
      <ColaborationList>
        <ColaborationMethod>
          <ColaborationTitle>
            {translate(language, "fromUruguay")}
          </ColaborationTitle>
          <ColaborationDescription>
            <p>{translate(language, "bankAccount")}</p>
            <p>{translate(language, "inNameOf")}</p>
            <p>CA 001361713-00002 ({translate(language, "uruguayanPesos")})</p>
            <p>CA 001361713-00003 ({translate(language, "dolars")})</p>
          </ColaborationDescription>
        </ColaborationMethod>
        <ColaborationMethod>
          <ColaborationTitle>
            {translate(language, "fromForeinger")}
          </ColaborationTitle>
          <ColaborationDescription>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.paypal.com/paypalme/eugesosgenia"
            >
              Paypal
            </Link>
          </ColaborationDescription>
        </ColaborationMethod>
      </ColaborationList>
    </ColaborationContainer>
  );
}

const ColaborationList = styledComponents.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Link = styledComponents.a`
  color: rgb(205, 140, 193);
  font-weight: 600;
  text-decoration: none;
`;

const ColaborationMethod = styledComponents.div`

`;

const ColaborationDescription = styledComponents.div`
`;

const ColaborationTitle = styledComponents.h4`
`;

const Title = styledComponents.h2`
  color: rgb(117, 142, 150);
`;

const ColaborationContainer = styledComponents.div`
  margin: 40px auto;
  background-color: rgb(253, 240, 212);
  padding: 10px;
  border-radius: 40px;
  color: rgb(117, 142, 150);
`;

export default Colaboration;
