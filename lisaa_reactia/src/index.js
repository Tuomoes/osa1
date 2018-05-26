import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {
  
    constructor() {
        super()
        this.title1 = 'anna palautetta'
        this.title2 = 'statistiikka'
        
        this.hyva = 'hyvä'
        this.neutraali = 'neutraali'
        this.huono = 'huono'

        this.ka = 'keskiarvo'

        this.state = {
            hyvaCounter: 0,
            neutraaliCount: 0,
            huonoCount: 0,
            avg: 0.0
        }
      }
  

  
  increaseHyva = () => {
    this.setState({ hyvaCounter: this.state.hyvaCounter + 1}, () => this.countAvg());
  }

  increaseNeutraali = () => {
    this.setState({ neutraaliCount: this.state.neutraaliCount + 1}, () => this.countAvg());
  }

  increaseHuono = () => {
      this.setState({ huonoCount: this.state.huonoCount + 1}, () => this.countAvg());
  }

  countAvg = () => {
      this.setState({ avg: 
        (this.state.hyvaCounter * 1.0 + this.state.neutraaliCount * 0.0 + this.state.huonoCount * -1.0) / 
        (this.state.hyvaCounter + this.state.neutraaliCount + this.state.huonoCount)
     });
  }

  render() {
    return (
        <div>
          <h1>{this.title1}</h1>
          <button title='HYVÄ BUTTON' onClick={this.increaseHyva.bind(this)}> 
            hyvä
          </button>
          <button title='NEUTRAALI BUTTON' onClick={this.increaseNeutraali.bind(this)}>
            neutraali
          </button>
          <button title='HUONO BUTTON' onClick={this.increaseHuono.bind(this)}>
            huono
          </button>
          <h1>{this.title2}</h1>
          <p>{this.hyva} {this.state.hyvaCounter}</p>
          <p>{this.neutraali} {this.state.neutraaliCount}</p>
          <p>{this.huono} {this.state.huonoCount}</p>
          <p>{this.ka} {this.state.avg}</p>
        </div>
      )
  }
}

  

ReactDOM.render(<App />, document.getElementById('root'));
