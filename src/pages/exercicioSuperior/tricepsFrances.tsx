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

const TricepsFrances: React.FC = () => {
  return (
    <AppLayout title='Tríceps'>
      <IonContent>
        <ContentBox>
          <p>Tríceps Francês na Polia Alta</p>
          <StyledImage
            src='/assets/images/Triceps-frances-polia.gif'
            alt='triceps frances na polia'
          />

          <p>Tríceps na Polia</p>
          <StyledImage
            src='/assets/images/triceps-na-polia-alta.gif'
            alt='triceps frances na polia'
          />

          <p>Tríceps na Polia Baixa</p>
          <StyledImage
            src='/assets/images/triceps-frances-na-polia-baixa-no-cross.gif'
            alt='triceps frances na polia'
          />
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default TricepsFrances
