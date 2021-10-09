import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Colaboration() {
  const { language } = React.useContext(Context);

  const mercadoPago = [
    {
      amount: "$1.000",
      link: "https://mpago.la/1xrx8Lc",
    },
    {
      amount: "$500",
      link: "https://mpago.la/1eQcgEn",
    },
    {
      amount: "$200",
      link: "https://mpago.la/2fN5rCQ",
    },
    {
      amount: "$100",
      link: "https://mpago.la/2uVhY8q",
    },
    {
      amount: "$50",
      link: "https://mpago.la/1f9BSiq",
    },
  ];

  return (
    <ColaborationContainer>
      <Title>{translate(language, "waysToContribute")}</Title>
      <ColaborationList>
        {language !== "pr_BR" && language !== "en_UK" && (
          <ColaborationGroup>
            <ColaborationGroupTitle>
              {translate(language, "fromUruguay")}
            </ColaborationGroupTitle>
            <ColaborationFlexContainer>
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
                    {mercadoPago.map((mercadoPagoItem) => (
                      <LinksItem key={mercadoPagoItem.amount}>
                        <Link
                          rel="noreferrer"
                          href={mercadoPagoItem.link}
                          target="_blank"
                        >
                          {mercadoPagoItem.amount}
                        </Link>
                      </LinksItem>
                    ))}
                  </LinksList>
                </ColaborationMethodDescription>
              </ColaborationMethod>
              <ColaborationMethod>
                <ColaborationMethodTitle>
                  {translate(language, "paganza")}
                </ColaborationMethodTitle>
                <ColaborationMethodDescription>
                  <PaganzaList>
                    <li>
                      <NumberBullet>1 </NumberBullet>
                      {translate(language, "paganza_1")}
                    </li>
                    <li>
                      <NumberBullet>2 </NumberBullet>
                      {translate(language, "paganza_2")}
                    </li>
                    <li>
                      <NumberBullet>3 </NumberBullet>
                      {translate(language, "paganza_3")}
                    </li>
                    <li>
                      <NumberBullet>4 </NumberBullet>
                      {translate(language, "paganza_4")}
                    </li>
                  </PaganzaList>
                </ColaborationMethodDescription>
              </ColaborationMethod>
              <ColaborationMethod>
                <ColaborationMethodTitle>
                  {translate(language, "abitab")}
                </ColaborationMethodTitle>
                <ColaborationMethodDescription>
                  <p>{translate(language, "abitabName")}</p>
                  <p>{translate(language, "abitabNumber")}</p>
                </ColaborationMethodDescription>
              </ColaborationMethod>
            </ColaborationFlexContainer>
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

const PaganzaList = styledComponents.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ColaborationFlexContainer = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
`;

const NumberBullet = styledComponents.strong`
  color: rgb(205, 140, 193);
`;

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
  flex: 1 1 0;
  width: 0;
  min-width: 260px;
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
