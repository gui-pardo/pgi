import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import AppRoutes from './routes/routes';
import { FirebaseProvider } from './firebasContext';
import { initGA, trackPageview } from './analytics';

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
  const location = useLocation();
  const GA_ID = import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (GA_ID) initGA(GA_ID);
  }, [GA_ID]);

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location]);

  return (
    <FirebaseProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <AppRoutes />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
        <Analytics />
      </IonApp>
    </FirebaseProvider>
  );
};

export default App;
