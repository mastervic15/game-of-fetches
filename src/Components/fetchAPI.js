import React, {Component} from 'react';
import axios from 'axios';

export default class fetchAPI extends React.Component {
    state = {
        gameOfThrone: []
    };

    componentDidMount() {
            let jonhBirthPlace = "https://anapioficeandfire.com/api/characters/583";
            let margaeryBirthPlace = "http://anapioficeandfire.com/api/characters/16"
            let targaryenRegion = "http://www.anapioficeandfire.com/api/houses/378"
            

        // axios.get(`https://anapioficeandfire.com/api/characters/583`).then(logOut =>{ 
        //         console.log(logOut);
        //     this.setState({gameOfThrone: logOut.data });
            
        });
    }

    render(){
        return(
            <ul>
                {this.state.gameOfThrone.map(information => <li key={information.id}>{information.name}</li>)}
            </ul>
        )
    }
}

    

