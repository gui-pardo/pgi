import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'

const ContentBox = styled.div`
  background-color: yellow;
  border-radius: 10px;
  padding: 20px;
  margin: 70px 20px 20px 20px;
  color: Black;
`

const StyledImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`

const CrucifixoLateral: React.FC = () => {
  return (
    <AppLayout title='Crucifixo'>
      <IonContent>
        <ContentBox>
        <p>Crucifixo Peck Deck</p>
        <StyledImage src='/assets/images/crucifixo.gif' alt='Crucifixo' />

        <p>Crucifixo Inclinado com Halteres</p>
        <StyledImage src='/assets/images/crucifixo-halter-inclinado.gif' alt='Crucifixo com halter' />
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default CrucifixoLateral
