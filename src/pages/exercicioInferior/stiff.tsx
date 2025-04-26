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
  color: black;
`

const Stiff: React.FC = () => {
  return (
    <AppLayout title='Leg Press'>
      <IonContent>
        <ContentBox>
          <p>
            aa
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Stiff
