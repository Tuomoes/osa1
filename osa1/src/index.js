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
      <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    </div>
  )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osa[0]}/>
        <Osa osa={props.osa[1]}/>
        <Osa osa={props.osa[2]}/>
      </div>
    )
}


const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.osa[0].tehtavia + props.osa[1].tehtavia + props.osa[2].tehtavia}</p>
      </div>
    )
  }

const App = () => {

  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osa={[osa1, osa2, osa3]}/>
      <Yhteensa osa={[osa1, osa2, osa3]}/>  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)