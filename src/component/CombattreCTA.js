import React from 'react'
import axios from 'axios'
import DisplayEnigme from './DisplayEnigme'
import DisplaySolution from './DisplaySolution'
import DisplayRightSolution from './DisplayRightSolution'


class CombattreCTA extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            solution: [],
            countSolution : this.props.enigmaCount,
            solution2: this.props.enigmaCount,
            answerSubmit: "",
            rightSolution:"",

        }
        this.getSolution=this.getSolution.bind(this)
       
     
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.enigmaCount !== prevProps.enigmaCount) {
            this.setState({countSolution: this.props.enigmaCount})
            this.setState({solution2: this.props.enigmaCount})

            axios.get(`https://api-jumanji.herokuapp.com/api/cards/${this.state.solution2}/solutions?idcard=${this.state.solution2}`)
            .then (res => {
                const solution = res.data;
                this.setState ({solution})
            })

        }
    }


    getSolution() {
        axios.get(`https://api-jumanji.herokuapp.com/api/cards/${this.state.solution2}/solutions?idcard=${this.state.solution2}`)
        .then (res => {
            const solution = res.data;
            this.setState ({solution})
        })
      }


     getVerified = () => {
         // Send the request
    axios.get('https://api-jumanji.herokuapp.com/api/cards')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
    this.setState({
    answersubmit: data[1],
        });
    }); 

  }



 









      
  


    render() {
      
    
        return (
            <div>
                <button onClick={this.getSolution}>Combattre</button>
                <ul>
                    {this.state.solution.map(solutions => <li><input className="checkboxSolution" type="checkbox" />{solutions.text} </li>)}
                    
                </ul>
                                <button onClick={() => this.getVerified()}>Valider</button>
            </div>
        )
    }
}

export default CombattreCTA