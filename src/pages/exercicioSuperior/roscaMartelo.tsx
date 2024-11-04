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
`

const RoscaMartelo: React.FC = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <AppLayout title='Rosca Martelo'>
      <IonContent>
        <ContentBox>
          <p>T.</p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default RoscaMartelo
