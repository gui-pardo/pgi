import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'

const Suplementacao: React.FC = () => {
  return (
    <AppLayout title='Suplementação'>
      <Container>
        <Header>
          <Img src='/assets/images/suplementos.jpeg' width={'200px'}></Img>
        </Header>

        <Body>
          <Description>
          -Aumento da massa muscular
          -Melhora do desempenho atlético
          -Aceleração da recuperação muscular
          -Fornecimento de energia extra
          -Contribuição para a síntese proteica
          -Ajuda na perda de peso e definição muscular 
          </Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default Suplementacao
