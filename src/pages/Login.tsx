import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { Capacitor } from '@capacitor/core'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'
import bgImage from '../assets/unmask.jpg'
import GoogleButton from '../components/GoogleButton'
import './Login.css'
import { loginWithGoogle } from '../api/login'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login: React.FC = () => {
  const history = useHistory()
  const { login } = useAuth()

  // Login Web (browser)
  const handleWebLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (!tokenResponse.access_token) {
        console.error('No access token received')
        return
      }
      try {
        const data = await loginWithGoogle(tokenResponse.access_token)
        console.log('JWT recibido (web):', data.jwt)
        login(data.jwt) // ← Usar el contexto para login
        history.replace('/home') // ← Redirección sin reload
      } catch (error) {
        console.error('Error autenticando con backend (web)', error)
        alert('Error en autenticación web: ' + error)
      }
    },
    onError: (error) => {
      console.error('Login web fallido:', error)
      alert('Error en login web')
    },
  })

  // Login Nativo (Android/iOS)
  const handleNativeLogin = async () => {
    try {
      console.log('Iniciando login nativo...')
      if (!GoogleAuth) {
        throw new Error('Google Auth no está disponible')
      }
      const result = await GoogleAuth.signIn()
      console.log('Resultado de Google Auth:', result)
      if (!result.authentication || !result.authentication.accessToken) {
        throw new Error('No se recibió token de acceso')
      }
      const data = await loginWithGoogle(result.authentication.accessToken)
      console.log('JWT recibido (nativo):', data.jwt)
      login(data.jwt) // ← Usar el contexto para login
      history.replace('/home') // ← Redirección sin reload
    } catch (error) {
      console.error('Login nativo fallido:', error)
      alert('Error en login nativo: ' + error)
    }
  }

  const handleLogin = () => {
    if (Capacitor.isNativePlatform()) {
      handleNativeLogin()
    } else {
      handleWebLogin()
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
              <GoogleButton onClick={handleLogin} />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login