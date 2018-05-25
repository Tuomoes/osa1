import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const title1 = 'anna palautetta'
  const titl2 = 'statistiikka'
  
  const hyva = 'hyvä'
  const hyvaCount = 0
  const neutraali = 'neutraali'
  const neutraaliCount = 0
  const huono = 'huono'
  const huonoCount = 0

  return (
    <div>
      <h1>{title1}</h1>
      <button title='HYVÄ BUTTON'>
        hyvä
      </button>
      <button title='NEUTRAALI BUTTON'>
        neutraali
      </button>
      <button title='HUONO BUTTON'>
        huono
      </button>
      <h1>{titl2}</h1>
      <p>{hyva} {hyvaCount}</p>
      <p>{neutraali} {neutraaliCount}</p>
      <p>{huono} {huonoCount}</p>
    </div>
  )
}

  

ReactDOM.render(<App />, document.getElementById('root'));
