import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react'

const Configuracion = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ padding: '16px' }}>
          <h2>Configuración</h2>
          <p>Ajustes de la aplicación aquí.</p>
        </div>
      </IonContent>
    </>
  )
}

export default Configuracion