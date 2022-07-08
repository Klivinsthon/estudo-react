import React, {Fragment} from "react";
import Satellites from "../satellites";

function Planet(props) {
    
    return(
        <Fragment>
            <img src={props.url}/>
            <h2>{props.name ? props.name : "Nome indefinido"}</h2>
            <p>{props.description}</p>
            <a target="blank" href={props.wiki}>Link para wikipedia</a>
            <h3>Satélites</h3>
            <ul>
                <Satellites/>
            </ul>
        </Fragment>
    )
}

export default Planet