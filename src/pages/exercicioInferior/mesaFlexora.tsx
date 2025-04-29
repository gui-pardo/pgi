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

const MesaFlexora: React.FC = () => {
  return (
    <AppLayout title='Mesa Flexora'>
      <IonContent>
        <ContentBox>
        <p>Leg press </p>
        <StyledImage src='/assets/images/mesa flexora.gif' alt='mesa flexora' />
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default MesaFlexora