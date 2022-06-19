import React, { Component, Fragment } from 'react';

class lista extends Component {

    state = {
        titulo: "Titulo de la lista"
    }

    render() {
        const { titulo } = this.props
        return (
            <Fragment>
                <h1 className='titulo-nuevo'> {titulo}</h1>
            </Fragment>
        )
    }
}
export default lista;