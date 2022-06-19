import React, { Component, Fragment } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valor: 0,
        };

        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    decrement() {
        if (this.state.valor>0){//no tomara valores negativos
            this.setState ({
                valor: this.state.valor -1
            })
        }
    }

    increment() {
        this.setState ({
            valor: this.state.valor +1
        })
    }
    render() {
        console.log(this.state);
        return (
            <Fragment>
                <div className='flex-counter'>
                    <button onClick={this.decrement}>-</button>
                    <h1>{this.state.valor}</h1>
                    <button onClick={this.increment}>+</button>
                </div>
            </Fragment>
        )
    }
}
export default Counter;