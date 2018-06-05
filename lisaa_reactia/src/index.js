import React from 'react'
import ReactDOM from 'react-dom'


const FeedbackButton = (props) => {
  return (
    <button title={props.buttonTitle} onClick={props.buttonAction}> 
      {props.buttonText}
    </button>
  )
}

const Statistics = (props) => {
  if ((props.counters[0] + props.counters[1] + props.counters[2]) === 0)  {
    return (
      <div>
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Statistic statTopic={props.counterTopics[0]} counter={props.counters[0]}/>
            <Statistic statTopic={props.counterTopics[1]} counter={props.counters[1]}/>
            <Statistic statTopic={props.counterTopics[2]} counter={props.counters[2]}/>
            <Statistic statTopic={props.avgTopic} counter={props.avg}/>
            <Statistic statTopic={props.posTopic} counter={props.positives} unit={props.posUnit}/>
          </tbody>
        </table>
      </div>  
    )
  }
  
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.statTopic} </td> 
      <td>{props.counter} {props.unit} </td>
    </tr>
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
  
  
  feedbackAction = (counter, newValue) => {
    return () => this.setState({ [counter]: newValue}, () => {
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
          <FeedbackButton
            buttonTitle={'HYVÄ BUTTON'}
            buttonText={'hyvä'}
            buttonAction={this.feedbackAction('hyvaCount', this.state.hyvaCount + 1)}
          />
          <FeedbackButton
            buttonTitle={'NEUTRAALI BUTTON'}
            buttonText={'neutraali'}
            buttonAction={this.feedbackAction('neutraaliCount', this.state.neutraaliCount + 1)}
          />
          <FeedbackButton
            buttonTitle={'HUONO BUTTON'}
            buttonText={'huono'}
            buttonAction={this.feedbackAction('huonoCount', this.state.huonoCount + 1)}
          />
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
