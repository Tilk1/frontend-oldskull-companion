import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import bgImage from '../assets/unmask.jpg'
import GoogleButton from '../components/GoogleButton'
import './Login.css'
import { loginWithGoogle } from '../api/login'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { SocialLogin } from '@capgo/capacitor-social-login'
import { Capacitor } from '@capacitor/core'
import os from 'os'

const Login: React.FC = () => {
  const history = useHistory()
  const { login } = useAuth()

  // Login Web
  const handleWebLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (!tokenResponse.access_token) return
      try {
        const data = await loginWithGoogle(tokenResponse.access_token)
        login(data.jwt)
        history.replace('/app')
      } catch (error) {
        alert('Error autenticando con backend (web): ' + error)
      }
    },
    onError: (error) => {
      alert('Error en login web: ' + error)
    },
  })

  // Login Nativo
  const handleNativeLogin = async () => {
    try {
      await SocialLogin.initialize({
        google: {
          webClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Web
        },
      })
      const res = await SocialLogin.login({
        provider: 'google',
        options: {
          scopes: ['email'],
        },
      })
      let token = ''
      if (res.provider === 'google') {
        if (res.result.responseType === 'online') {
          token = res.result.accessToken?.token ?? ''
        } else {
          // offline mode: usá serverAuthCode si querés validar en backend
          token = res.result.serverAuthCode ?? ''
        }
      }
      if (!token) throw new Error('No se recibió token nativo')
      const data = await loginWithGoogle(token)
      login(data.jwt)
      history.replace('/app')
    } catch (err: any) {
      console.error('Error login nativo:', err)
      alert('Error autenticando con Google nativo: ' + err.message)
    }
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
              <p className="welcome-subtitle">
                Forja tu leyenda y lleva el control de tus torneos en la Oldskull
              </p>
              {Capacitor.isNativePlatform() ? (
                <GoogleButton onClick={handleNativeLogin} text="Continuar con Google" />
              ) : (
                <GoogleButton onClick={handleWebLogin} text="Continuar con Google" />
              )}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
