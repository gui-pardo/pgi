import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'

const Nutricao: React.FC = () => {
  return (
    <AppLayout title='Importância do Acompanhamento Nutricional'>
      <Container>
        <Header>
          <Img src='/assets/images/nutricao.jpeg' width={'200px'}></Img>
        </Header>

        <Body>
          <Description>
          -Alimentação equilibrada
          -Prevenção de doenças
          -Manejo de condições médicas
          -Apoio e motivação
          -Melhorar a performance física
          
          </Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default Nutricao
