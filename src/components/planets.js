import React, { Fragment, useState } from "react";
import PlanetBase from "./planetBase";

async function getPlanets() {
    let response = await fetch("http://localhost:3000/planets-api/planets.json")
    let planetData = await response.json()
    return planetData
}

function Planets() {
    const [planets, setPlanets] = useState(0)

    return (
        <Fragment>
            <PlanetBase
                img={}
                name={}
                description={}
                key={}
            />
        </Fragment>
    )
}

export default Planets