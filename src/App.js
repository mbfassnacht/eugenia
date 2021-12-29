import styledComponents from "styled-components";
import Background from "./Background";
import Languages from "./Languages";
import Description from "./Description";
import Footer from "./Footer";
import Thanks from "./Thanks";

import { Provider } from "./context/context";
import React from "react";

function App() {
  return (
    <Provider>
      <AppContainer>
        <HeaderContainer>
          <EuContainer>Eu</EuContainer>
          <GeniaContainer>GENIA</GeniaContainer>
        </HeaderContainer>
        <Languages />
        <Description />
        <Thanks />
        <Footer />
        <Background />
      </AppContainer>
    </Provider>
  );
}

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
