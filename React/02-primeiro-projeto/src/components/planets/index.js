import React, { Fragment } from 'react';
import Planet from './planet';

class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [
                {
                    name:"Mercúrio",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at nobis exercitationem ipsum ipsam magni illum tempora eius nostrum vero sint numquam, odio tenetur quia ut cupiditate quis, possimus optio!",
                    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url:"https://s2.glbimg.com/HLls-3koR7z8f7OKyeTaFYxBOeI=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/09/22/pia16853mercury.jpg"
                },
                {
                    name:"Plutão",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at nobis exercitationem ipsum ipsam magni illum tempora eius nostrum vero sint numquam, odio tenetur quia ut cupiditate quis, possimus optio!",
                    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url:"https://s2.glbimg.com/HLls-3koR7z8f7OKyeTaFYxBOeI=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/09/22/pia16853mercury.jpg"
                },
                {
                    name:"Mercúrio",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at nobis exercitationem ipsum ipsam magni illum tempora eius nostrum vero sint numquam, odio tenetur quia ut cupiditate quis, possimus optio!",
                    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                    img_url:"https://s2.glbimg.com/HLls-3koR7z8f7OKyeTaFYxBOeI=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/09/22/pia16853mercury.jpg"
                }
            ]
        }
    }


    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }


    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length -1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render(){
        return(
            <Fragment>
                <h3>Planets List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Laste</button>
                <hr />
                {this.state.planets.map((planet) =>
                <Planet 
                    name={planet.name}
                    description={planet.description}
                    link={planet.link}
                    img_url={planet.img_url}
                /> 
                )}
                <hr />
            </Fragment>
        )
    };
}

export default Planets;