import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'

const About: React.FC = () => {
  return (
    <AppLayout title='Sobre '>
      <Container>
        <Header>
          <Img src='' width={'120px'}></Img>
        </Header>

        <Body>
          <Description>
           
          </Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default About
