import React from 'react';

class EnfantJoueur extends React.Component {

   
    render () {
       
         

        return (
            <div>
                <p>la couleur est VRAIMENT {this.props.message}</p>
            </div>
        )
    }
}


export default EnfantJoueur ;