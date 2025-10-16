import React from 'react'
import { IonApp, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import AppRouter from './AppRouter'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <IonApp>
          <IonReactRouter>
            <AppRouter />
          </IonReactRouter>
        </IonApp>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App