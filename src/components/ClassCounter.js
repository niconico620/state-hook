import React, { Component } from 'react'

 class ClassCounter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }

     incrementCount = () => {
         this.setState({
             count: this.state.count + 1
         })
     }
     
    render() {
        return (
            <div>
                <h3>Counter in Class Component: {this.state.count}</h3>
                <button onClick={this.incrementCount}>Add</button>
            </div>
        )
    }
}

export default ClassCounter
