import React, { Component } from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }
    resetValueChange = () => {
        this.setState({ value: '' })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.resetValueChange();
    }


    render() {
        console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <input
                    type="text"
                    value={ this.state.value }
                    onChange={ this.handleValueChange }
                    placeholder="Enter a player's name"
                />
                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;