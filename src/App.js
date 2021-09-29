import styledComponents from "styled-components";

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <EuContainer>Eu</EuContainer>
        <GeniaContainer>GENIA</GeniaContainer>
      </HeaderContainer>
      <div className="description">
        <Paragraph>
          Euge, o EuGENIA tiene dos años y hace muy poco la diagnosticaron con
          Neuroblastoma estadío 4 de alto riesgo. Sus papás le decimos que es
          una GENIA por cómo está enfrentando el tratamiento.
        </Paragraph>
        <Paragraph>
          Para poder superar la enfermedad queda un largo recorrido por delante
          con dos etapas, la primera durante cuatro meses en Uruguay y la
          segunda por seis meses en España con un tratamiento complementario de
          inmunoterapia.
        </Paragraph>
        <Paragraph>
          Los costos de la segunda etapa son enormes y superan los US$ 250.000
        </Paragraph>
        <Paragraph>
          Sus papás, su familia y todos los amigos estamos armando esta campaña
          de recolección de fondos para afrontar este desafío. Euge está siendo
          una genia, vos la podes ayudar!
        </Paragraph>
        <ThanksContainer>Gracias por sumarte!</ThanksContainer>
      </div>
      <footer className="description">
        Unite a{" "}
        <a href="https://www.instagram.com/EugeSosGenia/">@EugeSosGenia</a> en
        Instagram y Twitter para mantenerte al tanto de lo que vamos haciendo
        para seguir adelante con este desafío.
      </footer>
    </AppContainer>
  );
}

const ThanksContainer = styledComponents.div`
  font-size: 30px;
  color: rgb(205, 140, 193);
  margin-bottom: 40px;
  font-weight: 600;
`;

const AppContainer = styledComponents.div`
  padding: 20px;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
`;

const Paragraph = styledComponents.div`
  margin-bottom: 20px;
`;

const EuContainer = styledComponents.span`
  color: rgb(238, 209, 230);
`;

const GeniaContainer = styledComponents.span`
  color: rgb(148, 165, 211);
`;

const HeaderContainer = styledComponents.header`
  font-size: 80px;
  margin-bottom: 40px;
  font-weight: 800;
`;

export default App;
