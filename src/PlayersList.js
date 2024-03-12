
import React from 'react';
import Player from './player'; 
import './PlayerList.css'; 

import players from './players'; 

const Playerlist = () => {
  return (
    <div className='farah'>
     
      {players.map((player, index) => {
        return (
          <Player key={index} {...player} />
        );
      })}
    </div>
  );
}

export default Playerlist;