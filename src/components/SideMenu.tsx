import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonLabel, IonImg, IonToggle } from '@ionic/react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useHistory } from 'react-router-dom'
import logoClaro from '../assets/logo-b.png'
import logoOscuro from '../assets/logo-b2.png'
import skullIcon from '../assets/skull-icon.png'
import './SideMenu.css'

const SideMenu = () => {
  const { logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const history = useHistory()

  const closeMenu = () => {
    const menu = document.querySelector('ion-menu')
    menu?.close()
  }

  const handleLogout = () => {
    logout()
    closeMenu()
    history.replace('/login')
  }

  const handleNavigation = (path: string) => {
    closeMenu()
    history.push(path)
  }

  // Elegir logo según el tema
  const logo = isDark ? logoOscuro : logoClaro

  return (
    <IonMenu contentId="main-content" side="start" className="modern-side-menu">
      <IonHeader>
        <IonToolbar className="menu-header">
          <div className="logo-container">
            <IonImg 
              src={logo} 
              alt="Oldskull Companion Logo"
              className="menu-logo"
            />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList className="menu-list">  
          <IonItem 
            button 
            onClick={() => handleNavigation('/perfil')}
            detail={false}
            className="menu-item"
          >
            <IonLabel className="menu-label">Perfil</IonLabel>
          </IonItem>

          <IonItem 
            button 
            onClick={() => handleNavigation('/perfil')}
            detail={false}
            className="menu-item plus-item"
          >
            <div className="plus-content">
              <IonLabel className="menu-label plus-label">Oldskull Plus</IonLabel>
              <IonImg 
                src={skullIcon} 
                alt="Skull Icon"
                className="skull-icon"
              />
            </div>
          </IonItem>
          
          <IonItem 
            button 
            onClick={() => handleNavigation('/configuracion')}
            detail={false}
            className="menu-item"
          >
            <IonLabel className="menu-label">Configuración</IonLabel>
          </IonItem>

          {/* Toggle para modo oscuro/claro */}
          <IonItem detail={false} className="menu-item toggle-item">
            <div className="toggle-content">
              <IonLabel className="menu-label">Modo Oscuro</IonLabel>
              <IonToggle 
                checked={isDark} 
                onIonChange={toggleTheme}
                className="theme-toggle"
              />
            </div>
          </IonItem>
          
          <IonItem 
            button 
            onClick={handleLogout}
            detail={false}
            className="menu-item"
          >
            <IonLabel className="menu-label">Cerrar Sesión</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default SideMenu