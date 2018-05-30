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
        this.positiivisia = 'positiivisia'
        this.positiivisiaUnit = '%'

        this.state = {
            hyvaCounter: 0,
            neutraaliCount: 0,
            huonoCount: 0,
            avg: (0.0).toFixed(1),
            positives: (0.0).toFixed(1)
        }
      }
  

  
  increaseHyva = () => {
    this.setState({ hyvaCounter: this.state.hyvaCounter + 1}, () => {
      this.countAvg()
      this.countPositives()
    });
  }

  increaseNeutraali = () => {
    this.setState({ neutraaliCount: this.state.neutraaliCount + 1}, () => {
      this.countAvg()
      this.countPositives()
    });
  }

  increaseHuono = () => {
      this.setState({ huonoCount: this.state.huonoCount + 1}, () => {
        this.countAvg()
        this.countPositives()
      });
  }

  countAvg = () => {
      this.setState({ avg: 
        ((this.state.hyvaCounter * 1.0 + this.state.neutraaliCount * 0.0 + this.state.huonoCount * -1.0) / 
        (this.state.hyvaCounter + this.state.neutraaliCount + this.state.huonoCount)).toFixed(1)
     });
  }

  countPositives = () => {
    this.setState({ positives: 
      (100.0 * (this.state.hyvaCounter) / (this.state.hyvaCounter + this.state.neutraaliCount + this.state.huonoCount)).toFixed(1)
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
          <p>{this.positiivisia} {this.state.positives} {this.positiivisiaUnit}</p>
          
        </div>
      )
  }
}

  

ReactDOM.render(<App />, document.getElementById('root'));
