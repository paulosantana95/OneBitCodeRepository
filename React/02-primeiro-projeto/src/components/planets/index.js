import React, { Fragment } from 'react';
import Planet from './planet';



const Planets = () => {
    return(
        <Fragment>
            <h3>Planets List</h3>
            <button>Show message!</button>
            <hr />
            <Planet 
            name="Mercúrio"
            // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at nobis exercitationem ipsum ipsam magni illum tempora eius nostrum vero sint numquam, odio tenetur quia ut cupiditate quis, possimus optio!"
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            img_url="https://s2.glbimg.com/HLls-3koR7z8f7OKyeTaFYxBOeI=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/09/22/pia16853mercury.jpg"
            title_with_underline={true}
            gray={true}
            /> 
<hr />
            <Planet 
            name="Plutão"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at nobis exercitationem ipsum ipsam magni illum tempora eius nostrum vero sint numquam, odio tenetur quia ut cupiditate quis, possimus optio!"
            // link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            img_url="https://s2.glbimg.com/HLls-3koR7z8f7OKyeTaFYxBOeI=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/09/22/pia16853mercury.jpg"
            />
        </Fragment>
    )
}

export default Planets;