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
        {language !== "pr_BR" && language !== "en_UK" && (
          <ColaborationGroup>
            <ColaborationGroupTitle>
              {translate(language, "fromUruguay")}
            </ColaborationGroupTitle>
            <ColaborationMethod>
              <ColaborationMethodTitle>
                {translate(language, "bankAccount")}
              </ColaborationMethodTitle>
              <ColaborationMethodDescription>
                <p>{translate(language, "inNameOf")}</p>
                <p>
                  CA 001361713-00002 ({translate(language, "uruguayanPesos")})
                </p>
                <p>CA 001361713-00003 ({translate(language, "dolars")})</p>
              </ColaborationMethodDescription>
            </ColaborationMethod>
            <ColaborationMethod>
              <ColaborationMethodTitle>
                {translate(language, "mercadoPago")}
              </ColaborationMethodTitle>
              <ColaborationMethodDescription>
                <LinksList>
                  <Link
                    rel="noreferrer"
                    href="https://mpago.la/1xrx8Lc"
                    target="_blank"
                  >
                    $1.000
                  </Link>
                  <LinksItem>
                    <Link
                      rel="noreferrer"
                      href="https://mpago.la/1eQcgEn"
                      target="_blank"
                    >
                      $500
                    </Link>
                  </LinksItem>
                  <LinksItem>
                    <Link
                      rel="noreferrer"
                      href="https://mpago.la/2fN5rCQ"
                      target="_blank"
                    >
                      $200
                    </Link>
                  </LinksItem>
                  <LinksItem>
                    <Link
                      rel="noreferrer"
                      href="https://mpago.la/2uVhY8q"
                      target="_blank"
                    >
                      $100
                    </Link>
                  </LinksItem>
                  <LinksItem>
                    <Link
                      rel="noreferrer"
                      href="https://mpago.la/1f9BSiq"
                      target="_blank"
                    >
                      $50
                    </Link>
                  </LinksItem>
                </LinksList>
              </ColaborationMethodDescription>
            </ColaborationMethod>
          </ColaborationGroup>
        )}
        {language === "pr_BR" && (
          <ColaborationGroup>
            <ColaborationGroupTitle>
              {translate(language, "fromBrazil")}
            </ColaborationGroupTitle>
            <ColaborationMethod>
              <ColaborationMethodDescription>
                <p>{translate(language, "bankAccount")}</p>
                <p>{translate(language, "inNameOf")}</p>
              </ColaborationMethodDescription>
            </ColaborationMethod>
          </ColaborationGroup>
        )}
        <ColaborationGroup>
          <ColaborationGroupTitle>
            {translate(language, "fromForeinger")}
          </ColaborationGroupTitle>
          <ColaborationMethod>
            <ColaborationMethodDescription>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.paypal.com/paypalme/eugesosgenia"
              >
                Paypal
              </Link>
            </ColaborationMethodDescription>
          </ColaborationMethod>
        </ColaborationGroup>
      </ColaborationList>
    </ColaborationContainer>
  );
}

const ColaborationList = styledComponents.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LinksList = styledComponents.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LinksItem = styledComponents.li`
  padding: 0 8px;
`;

const Link = styledComponents.a`
  color: rgb(205, 140, 193);
  font-weight: 800;
  font-size: 24px;
  text-decoration: none;
`;

const ColaborationGroup = styledComponents.div`
  padding-bottom: 4px;
  margin-bottom: 16px;

`;

const ColaborationMethod = styledComponents.div`
  padding-bottom: 4px;
  margin-bottom: 16px;

`;

const ColaborationMethodDescription = styledComponents.div`
  p {
    margin-top: 4px;
    margin-bottom: 4px;;
  }
`;

const ColaborationMethodTitle = styledComponents.h4`
  margin-top: 16px;
  margin-bottom: 4px;
`;

const ColaborationGroupTitle = styledComponents.h3`
  margin-bottom: 4px;
`;

const Title = styledComponents.h2`
  color: rgb(117, 142, 150);
`;

const ColaborationContainer = styledComponents.div`
  margin: 40px auto;
  background-color: rgb(253, 240, 212);
  padding: 20px;
  border-radius: 40px;
  color: rgb(117, 142, 150);
`;

export default Colaboration;
