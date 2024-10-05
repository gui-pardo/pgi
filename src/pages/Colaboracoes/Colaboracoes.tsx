import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img, WrapperDoacao } from './style'
import { CardText } from '../../components'

const Colaboracoes: React.FC = () => {
  return (
    <AppLayout title='Colaborações'>
      <Container>
        <Header>
          <CardText text='Colabore com a Rede' fontSize='20px' />
        </Header>

        <Body>
          <Description width='50%'>
            Sua solidariedade ajuda a rede feminina de combate ao Câncer de Itapema a manter seus
            atendimentos.
          </Description>
          <div style={{ marginBottom: '35px' }}></div>
          <CardText text='Doação em Dinheiro' fontSize='12px' />

          <WrapperDoacao>
            <Img src='assets/images/logo_rfcc.png' width={'90px'} />
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <Description>
                <strong>Pix:</strong> 04.687.114/0001-02
              </Description>
              <Description>
                <strong>Depósito:</strong> Banco do Brasil
              </Description>
              <Description>Agência 3164-X CC 9118-9</Description>
            </div>
          </WrapperDoacao>

          <CardText text='Doação de Cabelo' fontSize='12px' />
        </Body>
      </Container>
    </AppLayout>
  )
}

export default Colaboracoes
