import React from 'react'
import ReactDOM from 'react-dom'
const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }

const Osa = (props) => {
  return (
    <div>
      <p>{props.osa} {props.tehtavat}</p>
    </div>
  )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osa[0]} tehtavat={props.tehtavat[0]}/>
        <Osa osa={props.osa[1]} tehtavat={props.tehtavat[1]}/>
        <Osa osa={props.osa[2]} tehtavat={props.tehtavat[2]}/>
      </div>
    )
}

  /** 
const Sisalto = (props) => {
    return (
      <div>
        <p>{props.osa} {props.tehtavat}</p>
      </div>
    )
  }
  **/

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.tehtavat[0] + props.tehtavat[1] + props.tehtavat[2]}</p>
      </div>
    )
  }

const App = () => {

  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osa={[osa1, osa2, osa3]} tehtavat={[tehtavia1, tehtavia2, tehtavia3]}/>
      <Yhteensa tehtavat={[tehtavia1, tehtavia2, tehtavia3]}/>  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)