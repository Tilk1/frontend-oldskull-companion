import {
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonMenuButton,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { calendar, people } from 'ionicons/icons';
import React from 'react';
import bgImage from '../assets/phyrexian_arena.png';
import './Jugar.css';

const Jugar: React.FC = () => {
  const activeTournaments = [
    {
      id: 1,
      name: 'Torneo Invierno 2025',
      players: 42,
      maxPlayers: 64,
      status: 'Inscripciones Abiertas',
      startDate: '15 Ago 2025',
      format: 'Premodern',
      rounds: 5,
      entryFee: 'Gratis',
      prize: 'Puntos de li'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Inscripciones Abiertas': return 'success';
      case 'En Progreso': return 'warning';
      case 'Finalizando': return 'danger';
      default: return 'medium';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'Premodern': return 'secondary';
    }
  };

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
          className="jugar-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="jugar-overlay">
            <div className="jugar-content" style={{ padding: '5px' }}>

              {/* Títulos */}
              <IonCard
                style={{
                  background: 'transparent',
                  color: 'white',
                  display: 'block',
                  textAlign: 'center',
                  boxShadow: 'none'
                }}
              >
                <h1 className="jugar-title">
                  Torneos Activos
                </h1>
                <p className="jugar-subtitle">
                  Únete a la competencia
                </p>
              </IonCard>

              {/* Lista de Torneos */}
              <div >
                {activeTournaments.map((tournament) => (
                  <IonCard 
                    key={tournament.id}
                    style={{ 
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      marginBottom: '16px'
                    }}
                  >
                    <IonCardContent>
                      {/* Header del torneo */}
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start',
                        marginBottom: '12px'
                      }}>
                        <div>
                            <h2
                            style={{
                                color: 'white',
                                fontWeight: 700,
                                margin: '0 0 8px 0',
                                fontSize: '1.2rem',
                                fontFamily: 'Cinzel, serif' // misma fuente del botón
                            }}
                            >
                            {tournament.name}
                            </h2>
                          <IonBadge color={getStatusColor(tournament.status)}>
                            {tournament.status}
                          </IonBadge>
                        </div>
                        
                        {/* Información de jugadores */}
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'flex-end',
                            marginBottom: '4px'
                          }}>
                            <IonIcon icon={people} style={{ marginRight: '4px' }} />
                            <span>{tournament.players}/{tournament.maxPlayers}</span>
                          </div>
                          <IonChip color="medium">
                            <IonIcon icon={calendar} />
                            <IonLabel>{tournament.startDate}</IonLabel>
                          </IonChip>
                        </div>
                      </div>

                      {/* Detalles del torneo */}
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                        marginBottom: '16px'
                      }}>
                        <div>
                          <p style={{ 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8rem',
                            margin: '2px 0'
                          }}>
                            <strong>Formato:</strong>
                          </p>
                          <IonChip color={getFormatColor(tournament.format)} >
                            <IonLabel>{tournament.format}</IonLabel>
                          </IonChip>
                        </div>
                        
                        <div>
                          <p style={{ 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8rem',
                            margin: '2px 0'
                          }}>
                            <strong>Rondas:</strong> {tournament.rounds}
                          </p>
                        </div>
                        
                        <div>
                          <p style={{ 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8rem',
                            margin: '2px 0'
                          }}>
                            <strong>Inscripción:</strong> {tournament.entryFee}
                          </p>
                        </div>
                        
                        <div>
                          <p style={{ 
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8rem',
                            margin: '2px 0'
                          }}>
                            <strong>Premio:</strong> {tournament.prize}
                          </p>
                        </div>
                      </div>
                      {/* Botón Unirse */}
                        <IonButton
                        className="golden-button"
                        >
                        Unirse
                        </IonButton>
                    </IonCardContent>
                  </IonCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default Jugar;