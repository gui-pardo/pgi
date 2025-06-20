import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from '@ionic/react'
import { useLocation } from 'react-router-dom'
import {
  pulseOutline,
  pulseSharp,
  barbellOutline,
  barbellSharp
} from 'ionicons/icons'
import './Menu.css'

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'GymHelp',
    url: '/', // Alterado de '/' para '/home'
    iosIcon: pulseOutline,
    mdIcon: pulseSharp
  },
  {
    title: 'Exercícios de Membros Superiores',
    url: '/exercicio/superior',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  {
    title: 'Exercícios de Membros Inferiores',
    url: '/exercicio/inferior',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  }
]

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <IonList id='inbox-list'>
          <IonListHeader></IonListHeader>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? 'selected' : ''}
                routerLink={appPage.url}
                routerDirection='root' // Alterado de 'none' para 'root'
                lines='none'
                detail={false}
              >
                <IonIcon
                  aria-hidden='true'
                  slot='start'
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
