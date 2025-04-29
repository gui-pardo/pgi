import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'

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
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ElevacaoLateral: React.FC = () => {
  return (
    <AppLayout title='Elevação Lateral'>
      <IonContent>
        <ContentBox>
        <p>Elevação Lateral</p>
        <StyledImage src='/assets/images/elevação-lateral.gif' alt='Elevação lateral' />
        <p>Elevação Lateral na Máquina</p>
        <StyledImage src='/assets/images/elevacao-lateral-na-maquina.gif' alt='Elevação lateral na maquina' />
        <p>Elevação Lateral na Polia</p>
        <StyledImage src='/assets/images/Elevacao-unilateral-na-polia.gif' alt='Elevação lateral na polia' />
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default ElevacaoLateral
