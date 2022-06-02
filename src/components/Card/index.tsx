import React, { } from 'react';
import Other from '../../entities/Other';
import { Container } from './styled';
import Coworker from '../../assets/trabajador.png';

export interface ICardProps {
  other: Other
}

const Card: React.FC<ICardProps> = ({ other }) => {
  if (!other) {
    return null;
  }
  const { firstName } = other;
  return (
    <Container data-testid="card-container" image={''}>
    <div className="image">
      <div className="header">
        <div>
          <span>...</span>
        </div>
        <img
          src={Coworker}
          alt='Star...'
        />
      </div>
    </div>
    <div className="textos">
      <h2 className="titulo">{firstName}</h2>
		  <p className="description">{firstName}</p>
    </div>
    <div className="line" />
    <div className="footer">
      <div>
        <img
          src={Coworker}
          alt='User...'
        />
        <span>{firstName}</span>
      </div>
      <div>
        <span>{firstName}</span>
      </div>
    </div>
  </Container>
  );
}

export default Card;