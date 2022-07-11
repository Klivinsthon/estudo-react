import React, { Fragment } from "react";

class PlanetBase extends React.Component {
    render() {
        return(
            <Fragment>
                <img src={this.props.img}/>
                <h2>{this.props.name ? this.props.name : "Nome indefinido"}</h2>
                <p>{this.props.description}</p>
            </Fragment>
        )
    }
}

export default PlanetBase