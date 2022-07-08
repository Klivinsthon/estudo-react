import React, {Fragment} from "react";

export default function Satellites() {
    const satellitesList = ["astro", "nivus", "onix", "elemental", "zyxu"]
    return(
        satellitesList.map(
            (e, i) => {
                return <li key={i}>Satélite {e}</li>
            }
        )
    )
}