import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react'
import { homeOutline, playOutline, bookmarkOutline } from 'ionicons/icons'
import { Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Configuracion from '../pages/Configuracion'

const BottomTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/perfil" render={() => <Perfil />} exact={true} />
        <Route path="/configuracion" render={() => <Configuracion />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="perfil" href="/perfil">
          <IonIcon icon={playOutline} />
          <IonLabel>Jugar</IonLabel>
        </IonTabButton>

        <IonTabButton tab="config" href="/configuracion">
          <IonIcon icon={bookmarkOutline} />
          <IonLabel>Ranking</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default BottomTabs