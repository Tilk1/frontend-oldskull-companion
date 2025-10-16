import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonAvatar
} from '@ionic/react'
import React from 'react'
import './Ranking.css'
import bgImage from '../assets/natural_order.jpg'

const Ranking: React.FC = () => {
  const rankingData = [
    { position: 1, name: 'Lucas Cattoni', points: 111, id:1 },
    { position: 2, name: 'Juan Ignacio Pujol', points: 110, id:2 },
    { position: 3, name: 'Santiago «Sun» Lizondo', points: 9, id:3 },
    { position: 4, name: 'Martín Oviedo', points: 98, id:4 },
    { position: 5, name: 'Stefy', points: 76, id:5 },
    { position: 6, name: 'Marcos «Discoteca» Jassik', points: 70, id:6 },
    { position: 6, name: 'Mauricio Zonni', points: 70, id:7 },
    { position: 8, name: 'Exequiel «Fanta» Basualdo', points: 68, id:8 },
    { position: 8, name: 'Martín Ruccella', points: 68, id:9 },
    { position: 10, name: 'Joaquín «Nino» Carro', points: 66, id:10 },
    { position: 11, name: 'Luz Sanz', points: 61, id:11 },
    { position: 12, name: 'Leila', points: 60, id:12 },
    { position: 13, name: 'Ernesto «Hito» Mendez Morel', points: 55, id:13 },
    { position: 14, name: 'Cristian Vaca Ferreira', points: 53, id:14 },
    { position: 15, name: 'Javier «Jale» Cussi', points: 51, id:15 },
    { position: 16, name: 'José Luis Matar', points: 45, id:16 },
    { position: 17, name: 'Sebastian Padin', points: 44, id:17 },
    { position: 18, name: 'Matías D’Alessandro', points: 40, id:18 },
    { position: 19, name: 'Nicolas D’angelo', points: 36, id:19 },
    { position: 20, name: 'Sebastian Rodriguez', points: 35, id:20 },
    { position: 21, name: 'Maxi «Maser» Boese', points: 34, id:21 },
    { position: 22, name: 'Ian Menzel', points: 32, id:22 },
    { position: 23, name: 'Federico Busso', points: 31, id:23 },
    { position: 24, name: 'Silvano Scalzo', points: 27, id:24 },
    { position: 25, name: 'Mario Ichikawa', points: 26, id:25 },
    { position: 25, name: 'Carlos Bassetti', points: 26, id:26 },
    { position: 25, name: 'Guido Schinca', points: 26, id:27 },
    { position: 28, name: 'Leandro «Malky» Luck', points: 25, id:28 },
    { position: 29, name: 'Carlos «Kongui» Tilkiev', points: 23, id:29 },
    { position: 30, name: 'Sebastián Bosco', points: 22, id:30 },
    { position: 31, name: 'Maximiliano Argüello Sosa', points: 21, id:31 },
    { position: 32, name: 'Manuel Blanco', points: 19, id:32 },
    { position: 33, name: 'Facundo «Fuku» Aquino', points: 15, id:33 },
    { position: 33, name: 'Rodrigo Zamponi', points: 15, id:34 },
    { position: 35, name: 'Santiago Taborda', points: 14, id:35 },
    { position: 35, name: 'Pedro Hasalik', points: 14, id:36 },
    { position: 35, name: 'Juan Manuel Melichio', points: 14, id:37 },
    { position: 38, name: 'Rodrigo Hartl', points: 13, id:38 },
    { position: 39, name: 'Gabriel Pugliese', points: 10, id:39 },
    { position: 40, name: 'Santiago Trejo', points: 9, id:40 },
    { position: 40, name: 'Pablo «Hiroki» Obrach', points: 9, id:41 },
    { position: 42, name: 'Juan Marcos Mucci', points: 7, id:42 },
    { position: 43, name: 'Hipolito Forno', points: 6, id:43 },
    { position: 44, name: 'Emiliano Monbelli', points: 5, id:44 },
    { position: 44, name: 'Lisandro Medel', points: 5,  id:45 },
    { position: 46, name: 'Andrés Manceñido', points: 4, id:46 },
    { position: 47, name: 'Fraun Alexander Rey', points: 2, id:47 },
    { position: 47, name: 'Emanuel Santana', points: 2, id:48 },
    { position: 47, name: 'Fernando Rodriguez', points: 2, id:49 },
    { position: 47, name: 'Sebastián «Maiden» Maidan', points: 2, id:50 },
    { position: 51, name: 'Mario García', points: 1, id:51 },
    { position: 51, name: 'Héctor Cattoni', points: 1, id:52 },
    { position: 51, name: 'Demian «Kuban» Verneri', points: 1, id:53 },
    { position: 51, name: 'Ignacio Re', points: 1 ,id:54 },
    { position: 51, name: 'Agustín Zaccara', points: 1 ,id:55 },
    { position: 51, name: 'Gastón Melgar', points: 1 ,id:56 },
    { position: 51, name: 'Lucio Zava', points: 1 ,id:57 },
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
          className="ranking-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="ranking-overlay" >
            <div className="ranking-content" style={{ padding: '5px' }}>
              
              {/* Card para los títulos */}
                <IonCard
                style={{
                    background: 'transparent',
                    color: 'white',
                    display: 'block',
                    textAlign: 'center',
                    boxShadow: 'none'
                }}
                >
                    <h1 className="ranking-title" >
                    Ranking Invierno 2025
                    </h1>

                    <p className="ranking-subtitle">
                    ". . . but the price of Mangara's freedom was Asmira's life."
                    </p>

                </IonCard>

              
              {/* Card del ranking */}
              <IonCard style={{ 
                background: 'rgba(0, 0, 0, 0.8)', 
                color: 'white'
              }}>
                <IonCardContent>
                  <IonList style={{ background: 'transparent' }}>
                    {rankingData.map((player) => (
                      <IonItem 
                        key={player.id}
                        style={{ 
                          '--background': 'transparent',
                          '--color': 'white',
                          marginBottom: '8px',
                          borderLeft: player.position === 1 ? '4px solid gold' : 'none'
                        }}
                      >
                        <IonBadge 
                          slot="start" 
                          color={player.position <= 8 ? "warning" : "medium"}
                          style={{ marginRight: '12px' }}
                        >
                          #{player.position}
                        </IonBadge>
                        
                        <IonLabel>
                          <h2 style={{ 
                            color: 'white', 
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            {player.name}
                            {player.position === 1 && (
                              <span style={{ fontSize: '1.5rem' }}>👑</span>
                            )}
                          </h2>
                        </IonLabel>
                        
                        <IonBadge color="success" slot="end">
                          {player.points} pts
                        </IonBadge>
                      </IonItem>
                    ))}
                  </IonList>
                </IonCardContent>
              </IonCard>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  )
}

export default Ranking