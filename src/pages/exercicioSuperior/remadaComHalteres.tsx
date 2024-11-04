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

const Riscos: React.FC = () => {
  return (
    <AppLayout title='Riscos'>
      <IonContent>
        <ContentBox>
          <p>
            O 
            
          </p>
          
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Riscos
