import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { homeOutline, playOutline, trophyOutline } from 'ionicons/icons'
import { Redirect, Route } from 'react-router-dom'
import Configuracion from '../pages/Configuracion'
import Home from '../pages/Home'
import PlusPage from '../pages/PlusPage'
import Perfil from '../pages/Perfil'
import MainLayout from './MainLayout'
import Ranking from '../pages/Ranking'
import Jugar from '../pages/Jugar'

const TabsLayout: React.FC = () => {
  return (
    <MainLayout>
      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app/perfil" component={Perfil} />
          <Route exact path="/app/plus" component={PlusPage} />
          <Route exact path="/app/configuracion" component={Configuracion} />
          <Route exact path="/app/ranking" component={Ranking} />
          <Route exact path="/app/jugar" component={Jugar} />
          <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Inicio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="perfil" href="/app/jugar">
            <IonIcon icon={playOutline} />
            <IonLabel>Jugar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ranking" href="/app/ranking">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Ranking</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </MainLayout>
  )
}

export default TabsLayout