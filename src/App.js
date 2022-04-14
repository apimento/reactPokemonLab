import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Pokemon from './components/Pokemon/Pokemon';

export default class App extends Component {

state = { 
      hp1: 120, 
      hp2: 100
    } 

  handlePikachuAttack = () => {
    this.setState({hp1: this.state.hp1 - 10})
    }

    handleCharizardAttack = () => {
    this.setState({hp2: this.state.hp2 - 10})
    }


  render(){
    return (
      <div className="App"> 
      <Pokemon name={"Charizard"} hp={this.state.hp1} image={"https://pokestop.io/img/pokemon/charizard-256x256.png"} handleAttack={this.handleCharizardAttack}>  </Pokemon> 
      <Pokemon name={"Pikachu"} hp={this.state.hp2} image= {"https://pokestop.io/img/pokemon/pikachu-256x256.png"} handleAttack={this.handlePikachuAttack}> </Pokemon>
      </div>
    )
  }
}
