import React from 'react';
import EnfantJoueur from './EnfantJoueur'
import axios from 'axios'
import DisplayEnigme from './DisplayEnigme'
import CombattreCTA from './CombattreCTA';



class Joueur1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            enigme : 0,
            data :0,
            count :0,
            countbis:-1,
            bouton:""
        }
        this.getEnigme=this.getEnigme.bind(this)
    }

    getEnigme() {
        // Send the request
        axios.get('https://api-jumanji.herokuapp.com/api/cards')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
        console.log(data)
        const index = Math.floor((Math.random()*(data.length -1)))
        const countTest = []
        if (this.state.count < 14) {
        this.setState({
            count: this.state.count + 1,
            enigme: data[this.state.count],
            bouton: <CombattreCTA enigmaCount={this.state.count + 1} />
            
           
     
            });
     
        } else {
            this.setState({
                count: this.state.countbis + 1,
                enigme: data[this.state.count],
                bouton: <CombattreCTA message="hello chloe"/>
              
         
                });
            
        }




        }); 
    

        
      }


   
    render () {
     
         

        return (
            <div>
                la couleur est {this.props.message}
                lolilol
                <EnfantJoueur />
                <button onClick={this.getEnigme}>afficher enigme</button>
                <div className="enigmeContent">
                          <DisplayEnigme className="enigme" enigme={this.state.enigme} />
                          {this.state.bouton}
                    </div>
                    <di>
                   
                    </di>
            </div>
        )
    }
}


export default Joueur1;