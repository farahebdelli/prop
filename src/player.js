import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageURL} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Team: {team}</p>
        <p className="card-text">Nationality: {nationality}</p>
        <p className="card-text">Jersey Number: {jerseyNumber}</p>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
  );
}

export default Player;