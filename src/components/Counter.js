import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        this.random = this.random.bind(this)
    }
    increment(){
        if(this.state.count < 30) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }
    decrement(){
            this.setState({
                count: this.state.count - 1
            })
    }
    random() {

        this.setState({
            count:  Math.floor(Math.random() * ((30 - 1 + 1)) + 1)
        })
    }
    reset(){
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Inc</button>
                <button onClick={this.decrement}>Dec</button>
                <button onClick={this.random}>Ran</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter