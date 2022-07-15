import React, { Fragment, useState, useEffect } from "react";
import PlanetBase from "./planetBase";

async function getPlanets() {
    const response = await fetch("http://localhost:3000/planets-api/planets.json")
    const planetData = await response.json()
    return planetData["planets"]
}

function Planets() {
    const [planets, setPlanets] = useState([])
  
    useEffect(() => {
      setPlanets(
          [
              {
                  "id": "mars",
                  "name": "Mars",
                  "description": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
                  "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
                  "link": "https://en.wikipedia.org/wiki/Mars"
                },
                {
                  "id": "pluto",
                  "name": "Pluto",
                  "description": "Pluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered and is the largest known plutoid (or ice dwarf).",
                  "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                  "link": "https://en.wikipedia.org/wiki/Pluto"
                },
                {
                  "id": "uranus",
                  "name": "Uranus",
                  "description": "Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
                  "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg",
                  "link": "https://en.wikipedia.org/wiki/Uranus"
                }
          ]
      )
    }, [])
    
  
    return (

        planets.map(
            (currentElement, i) => {
                return (
                    <PlanetBase
                        img = {currentElement?.img_url}
                        name = {currentElement?.name}
                        description = {currentElement?.description}
                        key = {i}
                    />
                )
            }
        )
    )
}

export default Planets