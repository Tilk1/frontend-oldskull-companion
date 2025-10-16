import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBadge,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react'
import {  
  eye, 
  diamond, 
  shieldCheckmark, 
  sparkles,
  checkmarkCircle,
  moon,
  people,
  statsChart,
  personCircle,
  skull,
  ribbon
} from 'ionicons/icons'
import { closeCircle } from 'ionicons/icons'
import { IonButton } from '@ionic/react'
import React from 'react'

const PlusPage: React.FC = () => {
  const features = [
    { icon: moon, text: 'Modo oscuro de la app', included: true },
    { icon: people, text: 'Ver estadisticas de otros jugadores', included: true },
    { icon: statsChart, text: 'Estadísticas detalladas avanzadas (Winrate vs oponentes)', included: true },
    { icon: personCircle, text: 'Customizacion extra del perfil', included: true },
    { icon: skull, text: 'Icono calavera alado del nombre', included: true },
    { icon: ribbon, text: 'Perfil verificado Oldskull', included: true },
  ]

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Oldskull Plus</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="ion-padding">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <IonBadge color="premium" style={{ fontSize: '1.1rem', padding: '0.5rem 1rem' }}>
            <IonIcon icon={skull} style={{ marginRight: '0.5rem' }} />
            PREMIUM
          </IonBadge>
        </div>

        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle style={{ fontSize: '1.8rem', textAlign: 'center' }}>
              Oldskull Plus
            </IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--ion-color-primary-contrast)' }}>
                $1000
              </h2>
              <p style={{ margin: '0', opacity: '0.8' }}>por mes</p>
            </div>

            <IonList lines="none" style={{ background: 'transparent' }}>
              {features.map((feature, index) => (
                <IonItem key={index} style={{ '--background': 'transparent' }}>
                  <IonIcon 
                    icon={feature.included ? checkmarkCircle : closeCircle} 
                    color={feature.included ? "success" : "medium"}
                    slot="start" 
                  />
                  <IonLabel>
                    <IonIcon 
                      icon={feature.icon} 
                      style={{ marginRight: '0.5rem', opacity: '0.7' }} 
                    />
                    {feature.text}
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <IonButton 
                size="large" 
                expand="block"
                color="light"
                style={{ '--background': 'var(--ion-color-light)' }}
              >
                <IonIcon icon={skull} slot="start" />
                Suscribirse Ahora
              </IonButton>
              
              <p style={{ fontSize: '0.8rem', opacity: '0.7', marginTop: '1rem' }}>
                Cancela cuando quieras • Acceso inmediato
              </p>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  )
}

export default PlusPage