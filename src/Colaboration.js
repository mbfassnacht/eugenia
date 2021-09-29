import styledComponents from "styled-components";

function Colaboration() {
  return (
    <ColaborationContainer>
      <Title>Medios para colaborar</Title>
      <ColaborationList>
        <ColaborationMethod>
          <ColaborationTitle>Desde URUGUAY</ColaborationTitle>
          <ColaborationDescription>
            <p>Cuenta BROU</p>
            <p>A nombre de Florencia Mazetta</p>
            <p>CA 001361713-0002 (Pesos Uruguayos)</p>
            <p>CA 001361713-0003 (Dolares)</p>
          </ColaborationDescription>
        </ColaborationMethod>
        <ColaborationMethod>
          <ColaborationTitle>Desde el EXTERIOR </ColaborationTitle>
          <ColaborationDescription>
            <p>Paypal</p>
            <p>Aca el boton</p>
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
