import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'
import Login from './pages/Login'
import MainLayout from './components/MainLayout'
import { useAuth } from './context/AuthContext'

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth()

  return (
    <IonRouterOutlet>
      {isAuthenticated ? (
        // Una sola ruta que contiene todo (tabs + menú)
        <Route path="/" component={MainLayout} />
      ) : (
        // Usuario no autenticado
        <>
          <Route exact path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />
          <Redirect to="/login" />
        </>
      )}
    </IonRouterOutlet>
  )
}

export default AppRouter