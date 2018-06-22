import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      topAnecdote: 0,
      points: [0, 0, 0, 0, 0, 0]
    }
  }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    selectRandomAnecdote = () => {
        return () => { 
            this.setState({selected: this.getRandomInt(0, anecdotes.length - 1)})
        }
    }

    voteAnecdote = () => {
        return () => {
            const copyPoints = [ ...this.state.points ]
            copyPoints[this.state.selected] += 1

            let topAnecdote = 0
            copyPoints.forEach((x, i) => {
                if (x > copyPoints[topAnecdote]) topAnecdote = i
            })

            this.setState({
                points: copyPoints,
                topAnecdote: topAnecdote
            })

        }
    }



  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p>has {this.state.points[this.state.selected]} votes</p>
        <p>
            <button onClick={this.voteAnecdote()}>vote</button>
            <button onClick={this.selectRandomAnecdote()}>next anecdote</button>   
        </p>
        <h2>anecdote with most wotes:</h2>
        <p>{anecdotes[this.state.topAnecdote]}</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

