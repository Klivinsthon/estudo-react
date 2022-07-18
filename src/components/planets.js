import React, { useState, useEffect } from "react";
import PlanetBase from "./planetBase";

function Planets() {
    const [planets, setPlanets] = useState([])
    
    /* REQUISIÇÃO LOCAL RETORNANDO PLANETAS */
    async function getPlanets() {
        const response = await fetch("http://localhost:3000/planets-api/planets.json")
        const planetData = await response.json()
        setPlanets(planetData["planets"])
    }

    useEffect(
        () => {
            getPlanets()
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