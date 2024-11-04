import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'



const CriarContaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #FFF9E6; /* Cor de fundo amarelo claro */
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: #F2C94C; /* Amarelo vibrante */
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 80%;
    max-width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #F2C94C;
    border-radius: 5px;
    font-size: 1em;
    color: #333;
`;

const CriarContaButton = styled.button`
    width: 80%;
    max-width: 300px;
    padding: 10px;
    margin-top: 20px;
    background-color: #F2C94C;
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d6ac3c;
    }
`;

const LoginLink = styled.span`
    margin-top: 20px;
    color: #F2C94C;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        color: #d6ac3c;
    }
`;



const CriarConta : React.FC = () => {
    
    const history = useHistory();
    const handleCriarConta = () => {
        history.push('/home')
    }
    
    return(
        <>

        <IonContent>
            <AppLayout title='criar conta'>
            <CriarContaContainer>
                <Title> Criar Conta</Title>
                <Input type='text' placeholder='Nome'/>
                <Input type='text' placeholder='E-mail'/>
                <Input type='text' placeholder='Senha'/>
                <Input type='text' placeholder='Confirmar Senha'/>
                
                <LoginLink onClick={() => history.push('/login')}>

                    Já tem conta? Entrar
                </LoginLink>

                <CriarContaButton onClick={handleCriarConta}>Criar Conta</CriarContaButton>
                
            </CriarContaContainer>

            </AppLayout>
        </IonContent>


        </>
    )
}

export default CriarConta