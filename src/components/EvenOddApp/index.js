// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {increaseValue: 0}

  btnClicked = () => {
    this.setState(prevState => ({
      increaseValue: prevState.increaseValue + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {increaseValue} = this.state

    const isEvenOrOdd = increaseValue % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-main-container">
        <div className="card-container">
          <h1 className="title">Count {increaseValue}</h1>
          <p className="pera">Count is {isEvenOrOdd}</p>
          <div>
            <button className="btn-sty" type="button" onClick={this.btnClicked}>
              Increment
            </button>
          </div>
          <p className="bottom-pera">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
