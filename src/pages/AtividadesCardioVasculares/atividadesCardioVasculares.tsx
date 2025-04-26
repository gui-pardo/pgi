import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'

const AtividadesCardioVasculares: React.FC = () => {
  return (
    <AppLayout title='Atividades Cardiovasculares '>
      <Container>
        <Header>
          <Img src='/assets/images/AtividadeAerobica.png' width={'500px'} ></Img>
        </Header>

        <Body>
          <Description>
          -Fortalecimento cardiovascular: O cardio ajuda a fortalecer o coração e a controlar a pressão arterial e o colesterol. 
          -Prevenção de doenças: A prática regular de cardio ajuda a prevenir problemas cardiovasculares e a reduzir o risco de desenvolver outras doenças. 
          -Aumento da resistência: O cardio melhora a resistência física, permitindo que você tenha mais energia no dia a dia. 
          -Queima de gordura: O cardio ajuda a queimar gordura. 
          -Melhora da circulação sanguínea: O cardio melhora a circulação sanguínea e a irrigação do coração. 
          -Diminuição do estresse: O cardio ajuda a diminuir o estresse. 
          -Aumento da capacidade funcional dos pulmões: O cardio aumenta a capacidade funcional dos pulmões e melhora a captação de oxigênio. 
          </Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default AtividadesCardioVasculares
