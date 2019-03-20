import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {

    state = {
        players: [
            {
                name: "Adrien",
                score: 0,
                id: 1
            },
            {
                name: "Anne",
                score: 0,
                id: 2
            },
            {
                name: "Dennis",
                score: 0,
                id: 3
            },
            {
                name: "Ozzy",
                score: 0,
                id: 4
            },
            {
                name: "Raza",
                score: 0,
                id: 5
            },
            {
                name: "Vadim",
                score: 0,
                id: 6
            },
        ]
    }

    // Player id counter
    prevPlayerId = this.state.players.length;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            if(prevState.players[index].score === 0 && delta === -1) {
                return;
            }
            return {
                score: prevState.players[index].score += delta
            };

        });
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1,
                    }
                ]
            };
        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {

                players: prevState.players.filter(p => p.id !== id)
            }
        });
    }

    render() {

        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard"
                    players={this.state.players}
                />

                {/* Player list */}
                {this.state.players.map( (player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()}
                        index = {index}
                        removePlayer={this.handleRemovePlayer}
                        scoreChange={this.handleScoreChange}
                    />
                )}
                <AddPlayerForm 
                    addPlayer={this.handleAddPlayer}
                />
            </div>
        );
    }
}

export default App;
