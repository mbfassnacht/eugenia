import styledComponents from "styled-components";
import Background from "./Background";
import Colaboration from "./Colaboration";
import Description from "./Description";
import Footer from "./Footer";

function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <EuContainer>Eu</EuContainer>
        <GeniaContainer>GENIA</GeniaContainer>
      </HeaderContainer>
      <Description />
      <ThanksContainer>¡Gracias por sumarte!</ThanksContainer>
      <Colaboration />
      <Footer />
      <Background />
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
  font-family: "Lapsus-Pro-Bold";
`;

export default App;
