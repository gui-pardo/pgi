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

const TricepsFrances: React.FC = () => {
  return (
    <AppLayout title='Tríceps Francês'>
      <IonContent>
        <ContentBox>
          <p>
            o
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default TricepsFrances
