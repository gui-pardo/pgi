import React from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import styled from 'styled-components'
import { arrowForwardOutline } from 'ionicons/icons'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router-dom'

const MenuItems = styled(IonButton)`
  background-color: yellow !important;
  border: none;
  --background: none;
  --background-activated: none;
  --background-focused: none;
  --background-hover: none;
  border-radius: 20px;
  width: calc(100% - 40px);
  max-width: 400px;
  justify-content: space-between;
  margin: 15px auto;
  color: black;
  box-shadow: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: yellow !important;
    transform: scale(1.05);
  }
`

const ButtonText = styled.span`
  font-size: 20px;
`

const Container = styled.div`
  padding: 20px; /* Espaçamento para o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`

const MembrosInferiores: React.FC = () => {
  const history = useHistory()

  const buttonsData = [
    { text: 'Agachamento unilateral', route: '/exercicio/inferior/agachamento-unilateral' },
    { text: 'Agachamento barra solta', route: '/exercicio/inferior/agachamento-barra-solta' },
    { text: 'Agachamento búlgaro', route: '/exercicio/inferior/agachamento-bulgaro' },
    { text: 'Leg press', route: '/exercicio/inferior/leg-press' },
    { text: 'Stiff', route: '/exercicio/inferior/stiff' },
    { text: 'Cadeira extensora', route: '/exercicio/inferior/cadeira-extensora' },
    { text: 'Mesa flexora', route: '/exercicio/inferior/mesa-flexora' },
  ]

  const handleRedirect = (route: number) => {
    history.push(buttonsData[route].route)
  }

  return (
    <AppLayout title='Inferiores'>
      <Container>
        {buttonsData.map((button, index) => (
          <MenuItems key={index} onClick={() => handleRedirect(index)}>
            <ButtonText>{button.text}</ButtonText>
            <IconContainer>
              <IonIcon icon={arrowForwardOutline} />
            </IconContainer>
          </MenuItems>
        ))}
      </Container>
    </AppLayout>
  )
}

export default MembrosInferiores
