import { IonCol, IonGrid, IonRow, IonToast } from '@ionic/react'
import AppLayout from '../../components/appLayout'

import {
  Container,
  Content,
  ContentCard,
  ContentColumn,
  DescriptionCard,
  Header,
  HeaderCard,
  ImageCard,
  WrapperBody,
  WrapperCard,
} from './styles'
import { CardsMain } from './components'
import { Fragment, useEffect, useState } from 'react'
import useCardsMain from '../../hooks/useCardsMain/useCardsMain'
import { ICardsMain } from './types'

export default function MainPage() {
  // hooks
  const { findAllCardsMain } = useCardsMain()

  // states
  const [cardsData, setCardsData] = useState<ICardsMain[]>([])
  const [showMessage, setShowMessage] = useState(false)  // Para controlar a visibilidade da frase de alerta
  const [toastMessage, setToastMessage] = useState('')   // Mensagem que será exibida no alerta

  useEffect(() => {
    async function getData() {
      await findAllCardsMain()
        .then((response) => setCardsData(response))
        .catch((e) => console.log(e))
        .finally(() => console.log('Get data successfully'))
    }

    getData()

    // Mostrar a frase após o login ou algum evento relevante
    setShowMessage(true)
    setToastMessage('Esse aplicativo não exclui a necessidade de acompanhamento profissional')

    // Após 3 segundos, ocultar a mensagem
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 3000) // 3 segundos

    // Limpeza do timer caso o componente seja desmontado
    return () => clearTimeout(timer)

  }, [])

  function renderCards(data: ICardsMain, key: number) {
    return (
      <Fragment key={key}>
        <CardsMain data={data} />
      </Fragment>
    )
  }

  return (
    <AppLayout title='Página principal'>
      <Container>
        <Content>
          <Header>
            {/* O componente IonToast será exibido como alerta */}
            <IonToast
              isOpen={showMessage}
              message={toastMessage}
              position="top"   // Alinha o alerta no topo da tela
              duration={3000}  // Duração de 3 segundos
              color="warning" // Estilo de cor de alerta
              onDidDismiss={() => setShowMessage(false)} // Fecha o alerta após o tempo
              buttons={[  // Adiciona um botão de fechamento
                {
                  text: 'Fechar',
                  role: 'cancel',
                  handler: () => {
                    setShowMessage(false)
                  }
                }
              ]}
            />
          </Header>

          <WrapperBody>
            <ContentColumn>{cardsData.map(renderCards)}</ContentColumn>
          </WrapperBody>
        </Content>
      </Container>
    </AppLayout>
  )
}
