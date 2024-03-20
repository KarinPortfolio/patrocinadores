import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Amazon from './assets/aws.png';
import Vnw from './assets/vnw.png';
import Sirio from './assets/hsl.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Patrocinadores = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
`;

function App() {
  const [marca, setMarca] = useState(Amazon);

  useEffect(() => {
    const divElement = document.querySelector('.info'); 
    if (marca === Vnw) {
      divElement.style.backgroundColor = '#F8BF15';
    } else if (marca === Sirio) {
      divElement.style.backgroundColor = '#c0f0f8';
    } else if (marca === Amazon) {
      divElement.style.backgroundColor = '#f78011';
    } else {
      divElement.style.backgroundColor = '#33ff00';
    }
  }, [marca]);

  return (
    <section>
      <GlobalStyle />
      <Info className="info">
        <Img src={marca} alt="" />
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'</h2>
      </Info>
      <Patrocinadores>
        <Img onClick={() => setMarca(Amazon)} src={Amazon} alt="" />
        <Img onClick={() => setMarca(Vnw)} src={Vnw} alt="" />
        <Img onClick={() => setMarca(Sirio)} src={Sirio} alt="" />
      </Patrocinadores>
    </section>
  );
}

export default App;