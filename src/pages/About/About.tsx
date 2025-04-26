import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'

const About: React.FC = () => {
  return (
    <AppLayout title='Benefícios '>
      <Container>
        <Header>
          <Img src='/assets/images/musculacao.jpg' width={'300px'}></Img>
        </Header>

        <Body>
          <Description>
          -Aumento da massa muscular: Previne a sarcopenia, a perda de massa muscular que ocorre com o envelhecimento 
          -Melhora da saúde cardiovascular: A musculação é importante para a saúde do coração, mesmo que muitas pessoas associem apenas ao exercício aeróbico 
          -Fortalecimento dos ossos: A musculação ajuda a prevenir a osteoporose 
          -Melhora do condicionamento respiratório: A musculação aumenta a capacidade pulmonar e a eficiência do sistema respiratório 
          -Controle de peso: A musculação aumenta o metabolismo basal, fazendo com que o corpo queime mais calorias em repouso 
          -Melhora da saúde mental: A musculação libera endorfinas, neurotransmissores que contribuem para uma sensação de bem-estar e redução do estresse 
          -Melhora do sono: A musculação ajuda a reduzir a insônia e aumenta a duração do sono profundo 
          -Redução de dores: A musculação ajuda a reduzir dores no corpo, como a lombalgia 
          -Melhora da função cognitiva: A musculação melhora a capacidade de funcionamento do cérebro 
          </Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default About
