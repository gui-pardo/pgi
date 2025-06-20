import React from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';
import AppRoutes from './routes/routes';
import { FirebaseProvider } from './firebasContext';

/* CSS Ionic necessário */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Tema */
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <FirebaseProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            {/* Menu lateral fixo */}
            <Menu />
            {/* Área de conteúdo que renderiza as rotas */}
            <IonRouterOutlet id="main">
              <AppRoutes />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </FirebaseProvider>
  );
};

export default App;
