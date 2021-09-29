import styledComponents from "styled-components";

function Description() {
  return (
    <div className="description">
      <Paragraph>
        Euge, o EuGENIA tiene dos años y hace muy poco la diagnosticaron con
        Neuroblastoma estadío 4 de alto riesgo. Sus papás le decimos que es una
        GENIA por cómo está enfrentando el tratamiento.
      </Paragraph>
      <Paragraph>
        Para poder superar la enfermedad queda un largo recorrido por delante
        con dos etapas, la primera durante cuatro meses en Uruguay y la segunda
        por seis meses en España con un tratamiento complementario de
        inmunoterapia.
      </Paragraph>
      <Paragraph>
        Los costos de la segunda etapa son enormes y superan los US$ 250.000
      </Paragraph>
      <Paragraph>
        Sus papás, su familia y todos los amigos estamos armando esta campaña de
        recolección de fondos para afrontar este desafío. Euge está siendo una
        genia, vos la podes ayudar!
      </Paragraph>
    </div>
  );
}

const Paragraph = styledComponents.div`
  margin-bottom: 20px;
`;

export default Description;
