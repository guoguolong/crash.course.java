import React from 'react'

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 5
        }
    }
    render() {
        if (this.state.counter === 5) {
          // Simulate a JS error
          throw new Error('I crashed!');
        }
        return (
            <div>
                This is Toolbar
            </div>
        )
    }
}