import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react'

import { useLocation } from 'react-router-dom'
import {
  helpCircleOutline,
  helpCircleSharp,
  newspaperOutline,
  newspaperSharp,
  barbellOutline,
  barbellSharp,
  pulseOutline,
  pulseSharp
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
    url: '/',
    iosIcon: pulseOutline,
    mdIcon: pulseSharp,
  },
  {
    title: 'Exercícios de Membros Superiores',
    url: '/exercicio/superior',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp,
  },
  {
    title: 'Exercícios de Membros Inferiores',
    url: '/exercicio/inferior',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp,
  }
  
  
  
  
]

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <IonList id='inbox-list'>
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url}
                  routerDirection='none'
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
            )
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
