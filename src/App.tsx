import React, { useEffect } from 'react'
import { IonApp, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import AppRouter from './AppRouter'
import { Capacitor } from '@capacitor/core'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      GoogleAuth.initialize({
        clientId: Capacitor.getPlatform() === 'ios'
          ? import.meta.env.VITE_GOOGLE_CLIENT_IOS_ID
          : import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      })
    }
  }, [])

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