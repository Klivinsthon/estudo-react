import React, {useState, useEffect } from "react";
import PlanetBase from "./planetBase";

async function getPlanets() {
    const response = await fetch("http://localhost:3000/planets-api/planets.json")
    const planetData = await response.json()
    return planetData["planets"]
}

function Planets() {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        setPlanets(getPlanets().promiseResult())
    }, [])

    return (
        planets.map(
            (currentElement, i) => {
                return (
                    <PlanetBase
                        img={currentElement?.img_url}
                        name={currentElement?.name}
                        description={currentElement?.description}
                        key={i}
                    />
                )
            }
        )
    )
}

export default Planets