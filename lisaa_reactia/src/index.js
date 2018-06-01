import React from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  return (
    <div>
      <Statistic statTopic={props.counterTopics[0]} counter={props.counters[0]}/>
      <Statistic statTopic={props.counterTopics[1]} counter={props.counters[1]}/>
      <Statistic statTopic={props.counterTopics[2]} counter={props.counters[2]}/>
      <Statistic statTopic={props.avgTopic} counter={props.avg}/>
      <Statistic statTopic={props.posTopic} counter={props.positives} unit={props.posUnit}/>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p>{props.statTopic} {props.counter} {props.unit}</p>
    </div>
  ) 
  
}

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
            hyvaCount: 0,
            neutraaliCount: 0,
            huonoCount: 0,
            avg: (0.0).toFixed(1),
            positives: (0.0).toFixed(1)
        }
      }
  

  
  increaseHyva = () => {
    this.setState({ hyvaCount: this.state.hyvaCount + 1}, () => {
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
        ((this.state.hyvaCount * 1.0 + this.state.neutraaliCount * 0.0 + this.state.huonoCount * -1.0) / 
        (this.state.hyvaCount + this.state.neutraaliCount + this.state.huonoCount)).toFixed(1)
     });
  }

  countPositives = () => {
    this.setState({ positives: 
      (100.0 * (this.state.hyvaCount) / (this.state.hyvaCount + this.state.neutraaliCount + this.state.huonoCount)).toFixed(1)
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
          <Statistics 
              counterTopics={[this.hyva, this.neutraali, this.huono]} 
              counters={[this.state.hyvaCount, this.state.neutraaliCount, this.state.huonoCount]}
              avgTopic={this.ka}
              avg={this.state.avg}
              posTopic={this.positiivisia}
              positives={this.state.positives}
              posUnit={this.positiivisiaUnit}
          />          
        </div>
      )
  }
}

  

ReactDOM.render(<App />, document.getElementById('root'));
