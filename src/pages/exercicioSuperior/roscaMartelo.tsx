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
const RoscaMartelo: React.FC = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <AppLayout title='Variações de Rosca Martelo'>
      <IonContent>
        <ContentBox>
          <p>Rosca Martelo no Banco 45º</p>
          <StyledImage src='/assets/images/rosca-martelo-no-banco.gif' alt='rosca martelo 45º' />

          <p>Rosca Martelo no Banco 90º</p>
          <StyledImage
            src='/assets/images/rosca-martelo-unilateral-no-banco-90.gif'
            alt='rosca martelo 90º'
          />

          <p>Rosca Martelo </p>
          <StyledImage
            src='/assets/images/rosca-biceps-martelo-com-halteres.webp'
            alt='rosca martelo'
          />
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default RoscaMartelo
