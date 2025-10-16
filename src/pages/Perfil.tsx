import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react'

const Perfil: React.FC = () => {
  return (
    <>  {/* ← QUITA IonPage de aquí */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ padding: '16px' }}>
          <h1>Contenido de Perfil</h1>
          <p>Esta es la página de perfil del usuario.</p>
        </div>
      </IonContent>
    </>
  )
}

export default Perfil