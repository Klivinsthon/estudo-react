import React, { Fragment } from "react";
import PlanetBase from "./planetBase";

async function getPlanets() {
    let response = await fetch("http://localhost:3000/planets-api/planets.json")
    let planetData = await response.json()
    return planetData
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        getPlanets().then(
            planetData => {
                this.setState({
                    planets: this.state.planets = planetData["planets"]
                })
            }
        )
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.planets.map(
                        (s, i) => {
                            return (
                                <PlanetBase
                                    img={s.img_url}
                                    name={s.name}
                                    description={s.description}
                                    key={i}
                                />
                            )
                        }
                    )
                }
            </Fragment>
        )
    }
}

export default Planets