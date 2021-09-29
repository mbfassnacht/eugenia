import styledComponents from "styled-components";

function Footer() {
  return (
    <FooterContainer className="description">
      Unite a @EugeSosGenia en{" "}
      <Link target="_blank" href="https://www.instagram.com/EugeSosGenia/">
        Instagram
      </Link>{" "}
      y{" "}
      <Link target="_blank" href="https://twitter.com/eugesosgenia">
        Twitter
      </Link>{" "}
      para mantenerte al tanto de lo que vamos haciendo para seguir adelante con
      este desafío.
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
