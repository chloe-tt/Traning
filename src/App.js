import React from 'react';
import Joueur1 from './component/Joueur1'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color : "blue"
    }
      this.getColor=this.getColor.bind(this)
  }


  getColor () {
    this.setState ({color:"Red"})
}

  render () {
      return (
          <div>
              <button onClick={this.getColor} >click me to change color</button>
              <Joueur1 message={this.state.color}/>
          </div>
      )
  }
}


export default App;
