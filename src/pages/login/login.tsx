import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonSpinner,
  IonToast,
} from '@ionic/react';
import { loginUser, registerUser, loginUserWithGoogle } from '../Services/authService';
import { useFirebase } from '../../firebasContext';
import styled from 'styled-components';
import { useHistory } from 'react-router';

// Estilos personalizados
const StyledIonButton = styled(IonButton)`
  margin-top: 10px;
  --background: #FFD700; /* Amarelo ouro */
  --color: black;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Logo = styled.h1`
  text-align: center;
  color: #FFD700;
  font-size: 2.5rem;
  margin: 30px 0;
  font-weight: bold;
`;

const InputStyled = styled(IonInput)`
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const GoogleButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login: React.FC = () => {
  const history = useHistory();
  const { user, isLoading, setUser } = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validatePassword = (password: string) => password.trim() !== '' && password.length >= 6;

  const handleLogin = async () => {
    setShowToast(false);
    if (!validateEmail(email) || !validatePassword(password)) {
      setToastMessage('Por favor, informe um email e senha válidos.');
      setShowToast(true);
      return;
    }
    try {
      const result = await loginUser(email, password);
      if ('error' in result) {
        switch (result.error.code) {
          case 'auth/user-not-found':
            setToastMessage('Usuário não encontrado.');
            break;
          case 'auth/wrong-password':
            setToastMessage('Senha incorreta.');
            break;
          case 'auth/invalid-credential':
            setToastMessage('Credenciais inválidas.');
            break;
          default:
            setToastMessage('Erro ao realizar login.');
        }
        setShowToast(true);
      } else {
        setUser(result.user);
        history.push('/');
      }
    } catch (error) {
      setToastMessage('Erro ao tentar fazer login. Por favor, tente novamente.');
      setShowToast(true);
    }
  };

  const handleRegister = async () => {
    setShowToast(false);
    if (!validateEmail(email) || !validatePassword(password)) {
      setToastMessage('Por favor, informe um email e senha válidos.');
      setShowToast(true);
      return;
    }
    try {
      const result = await registerUser(email, password);
      if ('error' in result) {
        setToastMessage(
          result.error.code === 'auth/email-already-in-use'
            ? 'Email já cadastrado.'
            : 'Erro ao cadastrar usuário.'
        );
        setShowToast(true);
      } else {
        setUser(result.user);
        history.push('/');
      }
    } catch (error) {
      setToastMessage('Erro ao tentar realizar o cadastro. Por favor, tente novamente.');
      setShowToast(true);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await loginUserWithGoogle();
      if ('error' in result) {
        setToastMessage('Erro ao realizar login com Google.');
        setShowToast(true);
      } else {
        setUser(result.user);
        history.push('/');
      }
    } catch (error) {
      setToastMessage('Erro ao tentar login com Google. Tente novamente.');
      setShowToast(true);
    }
  };

  if (isLoading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Carregando...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <LoadingContainer>
            <IonSpinner name="crescent" />
          </LoadingContainer>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle className="ion-text-center">Bem-vindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Logo>gymHelp</Logo>

        <InputStyled
          placeholder="Email"
          type="email"
          value={email}
          onIonChange={(e) => setEmail(String(e.detail.value))}
        />
        <InputStyled
          placeholder="Senha"
          type="password"
          value={password}
          onIonChange={(e) => setPassword(String(e.detail.value))}
        />

        <StyledIonButton expand="block" onClick={handleLogin}>
          Login
        </StyledIonButton>
        <StyledIonButton expand="block" onClick={handleRegister}>
          Registrar
        </StyledIonButton>
        <StyledIonButton expand="block" onClick={handleGoogleLogin} color="light">
          <GoogleButtonContent>
            <GoogleIcon src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
            Login com Google
          </GoogleButtonContent>
        </StyledIonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
