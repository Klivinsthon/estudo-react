import React, { Fragment } from "react";

function PlanetBase(props) {
    return (
        <Fragment>
            <img src={props?.img} />
            <h2>{props?.name}</h2>
            <p>{props?.description}</p>
        </Fragment>
    )
}

export default PlanetBase