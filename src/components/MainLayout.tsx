import { IonPage } from '@ionic/react'
import SideMenu from './SideMenu'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <IonPage>
        {children}
      </IonPage>
      <SideMenu />
    </>
  )
}

export default MainLayout