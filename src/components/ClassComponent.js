import React, { Component, Fragment } from 'react';

class ClassComponent extends Component {

    state = {

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
export default ClassComponent;