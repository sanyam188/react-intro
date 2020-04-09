import React, { Component } from 'react'
import Table from './Table'



class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
  // render() {
  //   const characters = [
  //     {
  //       name: 'Charlie',
  //       job: 'Janitor',
  //     },
  //     {
  //       name: 'Mac',
  //       job: 'Bouncer',
  //     },
  //     {
  //       name: 'Dee',
  //       job: 'Aspring actress',
  //     },
  //     {
  //       name: 'Dennis',
  //       job: 'Bartender',
  //     },
  //   ]
  //   return (
  //     <div className="container">
  //       <Table  characterData={characters} />
  //     </div>
  //   )
  // }
}

export default App