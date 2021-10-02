import styledComponents from "styled-components";
import { Context } from "./context/context";
import React from "react";
import { translate } from "./Translator";

function Footer() {
  const { language } = React.useContext(Context);

  return (
    <FooterContainer className="description">
      {translate(language, "followUsIn")}
      <Link
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/EugeSosGenia/"
      >
        Instagram
      </Link>
      {translate(language, "and")}
      <Link
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/eugesosgenia"
      >
        Twitter
      </Link>{" "}
      {translate(language, "followReason")}
    </FooterContainer>
  );
}

const FooterContainer = styledComponents.footer`
  margin-bottom: 20px;
`;

const Link = styledComponents.a`
  color: rgb(205, 140, 193);
  font-weight: 600;
  text-decoration: none;
`;

export default Footer;
