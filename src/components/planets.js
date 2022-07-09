import React, { Fragment } from "react";
import PlanetBase from "./planetBase";

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
                {
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                    name: "Mercúrio",
                    description: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.",
                },
                {
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
                    name: "Júpiter",
                    description: "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.",
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.state.planets.map(
                        (s, i) => {
                            return (
                                    <PlanetBase
                                        img={s.img}
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