import { IonCol, IonGrid, IonRow } from '@ionic/react'
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

  useEffect(() => {
    async function getData() {
      await findAllCardsMain()
        .then((response) => setCardsData(response))
        .catch((e) => console.log(e))
        .finally(() => console.log('Get data successfully'))
    }

    getData()
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
            <h1>Esse aplicativo não exclui a necessidade de acompanhamento profissional</h1>
          </Header>

          <WrapperBody>
            <ContentColumn>{cardsData.map(renderCards)}</ContentColumn>
          </WrapperBody>
        </Content>
      </Container>
    </AppLayout>
  )
}
