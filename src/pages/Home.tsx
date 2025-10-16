import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButton,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip
} from '@ionic/react'
import React from 'react'
import './Home.css'
import bgImage from '../assets/robot-urza.jpg'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    history.push('/login')
    window.location.reload()
  }

  // Datos de ejemplo para los anuncios
  const announcements = [
    {
      id: 1,
      title: 'NUEVO VIDEO EN EL CANAL!!!!',
      content: 'MonoBlack Suicide ⚫️ [Marcos 🪩] VS Enchantress ⚪️🟢 [Jale]',
      author: 'Jose',
      videoUrl: 'https://www.youtube.com/embed/gSQyRK3_Itg?si=CLGWbLLSwFk7mB1H'
    },
    {
      id: 2,
      title: 'NUEVO VIDEO EN EL CANAL!!!!',
      content: 'MonoBlack Suicide ⚫️ [Marcos 🪩] VS Enchantress ⚪️🟢 [Jale]',
      author: 'Jose',
      videoUrl: 'https://www.youtube.com/embed/gSQyRK3_Itg?si=CLGWbLLSwFk7mB1H'
    },
  ]

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div
          className="home-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="home-overlay">
            <div className="home-content">
              <h1 className="home-title">Últimas noticias</h1>
                <p className="ranking-subtitle">
                    "Great peril demands formidable weaponry." —Urza
                </p>
              {/* Anuncios */}
              <div className="announcements-container">
                {announcements.map((announcement) => (
                  <IonCard key={announcement.id} className="announcement-card">
                    <IonCardHeader>
                      <div className="announcement-header">
                        <IonCardTitle>{announcement.title}</IonCardTitle>
                      </div>
                    </IonCardHeader>
                    <IonCardContent>
                      <p className="announcement-content">{announcement.content}</p>
                      {announcement.videoUrl && (
                        <div className="video-container">
                          <iframe
                            width="100%"
                            height="200"
                            src={announcement.videoUrl}
                            title="Video anuncio"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                      <div className="announcement-author">
                        Por: {announcement.author}
                      </div>
                        </div>
                      )}
                    </IonCardContent>
                  </IonCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  )
}

export default Home