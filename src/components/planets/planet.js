import React, {Fragment} from "react";

function Planet(props) {
    return(
        <Fragment>
            <img src={props.url}/>
            <h2>{props.name ? props.name : "Nome indefinido"}</h2>
            <p>{props.description}</p>
            <a target="blank" href={props.wiki}>Link para wikipedia</a>
        </Fragment>
    )
}

export default Planet