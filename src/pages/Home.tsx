import { IonContent, IonPage, IonButton } from '@ionic/react'
import React from 'react'
import './Home.css'
import bgImage from '../assets/unmask.jpg'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    history.push('/login')
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className="home-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="home-overlay">
            <div className="home-content">
              <h1 className="home-title">Inicio exitoso</h1>
              <p className="home-subtitle">
                Las próximas funcionalidades estarán disponibles pronto...
              </p>

              <IonButton
                className="logout-btn"
                color="light"
                onClick={handleLogout}
              >
                Cerrar sesión
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
