import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
    render() {
        const { name, id,removePlayer, score, scoreChange, index } = this.props;
        console.log(name + " rendered")
        return (
            <div className="player">
                <button className="remove-player" onClick={() => removePlayer(id) }>x</button>
                <span className="player-name">
                    {name}
                </span>
                <Counter 
                    score={score}
                    scoreChange={scoreChange}
                    index={index}
                />
            </div>
        );
    }
}

export default Player;