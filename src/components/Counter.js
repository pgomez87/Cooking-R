import React, { Component } from 'react'
import { ThemeContext } from './App'

/* Class Component */

export default class Counter extends Component {
  /* Everytime we need to use "super" to override the constructor */
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount,
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button onClick={() => this.changeCount(+1)}>+</button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount }
    })
  }
}
