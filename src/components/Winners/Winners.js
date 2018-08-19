import React from 'react';

import Winner from './Winner/Winner';

const tylerWinners = (props) => {
    
    return props.winners.map((winner, winnerId) => {
        return <Winner name={winner.name}
        score={winner.score}
        key={winnerId}/>
    });
}

export default tylerWinners;