import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import AppLayout from '../../components/appLayout'

const ContentBox = styled.div`
  background-color: yellow;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: black;
`
const StyledImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
`

const Riscos: React.FC = () => {
  return (
    <AppLayout title=' Variações de Remada Com Halteres'>
      <IonContent>
        <ContentBox>
          <p>Rremada unilateral</p>
          <StyledImage src='/assets/images/remada-unilateral-banco.gif' alt='remada unilateral' />

          <p>Remada Curvada com Halteres</p>
          <StyledImage src='/assets/images/Remada curvada.gif' alt='remada Curvada' />
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Riscos
