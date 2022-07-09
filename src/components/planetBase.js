import React, { Fragment } from "react";
import Satellites from "./satellites";

class PlanetBase extends React.Component {
    render() {
        return(
            <Fragment>
                <img src={this.props.img}/>
                <h2>{this.props.name ? this.props.name : "Nome indefinido"}</h2>
                <p>{this.props.description}</p>
                <h3>Satélites</h3>
                <ul>
                    <Satellites/>
                </ul>
            </Fragment>
        )
    }
}

export default PlanetBase