import styledComponents from "styled-components";

function Footer() {
  return (
    <FooterContainer className="description">
      Unite a{" "}
      <a href="https://www.instagram.com/EugeSosGenia/">@EugeSosGenia</a> en
      Instagram y Twitter para mantenerte al tanto de lo que vamos haciendo para
      seguir adelante con este desafío.
    </FooterContainer>
  );
}

const FooterContainer = styledComponents.footer`
  margin-bottom: 20px;
`;

export default Footer;
