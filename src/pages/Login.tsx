import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import bgImage from '../assets/unmask.jpg'
import GoogleButton from '../components/GoogleButton'
import './Login.css'
import { loginWithGoogle } from '../api/login'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const history = useHistory<History>()
  
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      if (!tokenResponse.access_token) return
      try {
        const data = await loginWithGoogle(tokenResponse.access_token)
        console.log('JWT recibido:', data.jwt)
        history.push('/home')
      } catch (err) {
        console.error('Error autenticando con backend', err)
      }
    },
    onError: () => console.error('Login fallido'),
  })

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="login-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="login-overlay">
            <div className="login-content">
              <h1 className="welcome-title">Oldskull Companion</h1>
              <p className="welcome-subtitle">
                Forja tu leyenda y lleva el control de tus torneos en la Oldskull
              </p>
              <GoogleButton onClick={() => handleGoogleLogin()} />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
