import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const positive= (good*100)/all
  const average = (neutral+bad)/good
  return (
    <div>
       <h1 className='text-center text-[2rem] text-[green]'>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button>
    <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
    <button onClick={()=>setBad(bad+1)}>Bad</button>
      <div className="statistic">
        <h1>Statistic</h1>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>All {all}</p>
    <p>Average {average}</p>
    <p>Positive {positive} %</p>
    </div>
    </div>
  )
}

export default App