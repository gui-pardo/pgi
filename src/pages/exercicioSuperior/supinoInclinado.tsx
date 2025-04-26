import React from 'react';
import { IonContent } from '@ionic/react';
import styled from 'styled-components';
import AppLayout from '../../components/appLayout';

const ContentBox = styled.div`
  background-color: yellow;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: black;
  text-align: center;
  font-size: 20px;

  max-height: 100%;
  overflow-y: auto;
`

const StyledImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`

const SupinoReto: React.FC = () => {
  return (
    <AppLayout title="Supino Inclinado">
      <IonContent forceOverscroll={true}>
        <ContentBox>
          <p>Supino Inclinado com Halteres:</p>
          <StyledImage
            src="/assets/images/supino-inclinado-com-halteres.webp"
            alt="Supino Inclinado com Halteres"
          />

              <p>Supino Inclinado com Barra:</p>
          <StyledImage
            src="/assets/images/supino-inclinado_com-barra.gif"
            alt="Supino Inclinado com Barra"
          />
        </ContentBox>
      </IonContent>
    </AppLayout>
  );
};

export default SupinoReto;
