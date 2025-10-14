import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import bgImage from '../assets/unmask.jpg'
import GoogleButton from '../components/GoogleButton'
import './Login.css'

const Login: React.FC = () => {
  const handleGoogleLogin = () => {
    console.log('Login con Google iniciado')
    // Integrar flujo real de OAuth aquí
  }

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
              <p className="welcome-subtitle">Forja tu leyenda y lleva el control de tus torneos en la Oldskull</p>
              <GoogleButton onClick={handleGoogleLogin} />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
