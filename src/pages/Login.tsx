import { IonContent, IonPage, IonRippleEffect } from '@ionic/react'
import React from 'react'
import googleButton from '../assets/login_google_button.svg'
import bgImage from '../assets/unmask.jpg'
import './Login.css'

const Login: React.FC = () => {

  const handleGoogleLogin = () => {
    console.log('Login con Google iniciado')
    // Integrar tu flujo real de Google OAuth aquí
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
              <h1 className="welcome-title">Bienvenido a Oldskull Companion</h1>
              <p className="welcome-subtitle">Inicia sesión con Google para continuar</p>
                <button className="google-btn" onClick={handleGoogleLogin}>
                <IonRippleEffect type="bounded" />
                <img src={googleButton} alt="Google login" className="google-logo" />
                </button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
