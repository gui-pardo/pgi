import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img, WrapperDoacao } from './style'
import { CardText } from '../../components'

const AgendarColeta: React.FC = () => {
  return (
    <AppLayout title='Agendar Coleta'>
      <Container>
        <Header>
          <CardText text='Horários de Coleta' fontSize='20px' />
        </Header>

        <Body>
          <Description width='50%'>
            Trazer seus documentos pessoais: RG, CPF e o Cartão SUS.
          </Description>
          <div style={{ marginBottom: '35px' }}></div>

          <WrapperDoacao>
            <Description width='40%'>De segunda à sexta</Description>
            <div style={{ display: 'flex', flexDirection: 'column', width: '40%', borderLeft: "2px solid black", height: "100px", justifyContent: "center"}}>

              <Description>Das 8h às 10h30</Description>
              <Description>E de 10h30 às 16hs</Description>
            </div>
          </WrapperDoacao>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default AgendarColeta
