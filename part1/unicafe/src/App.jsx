import { useState } from 'react'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const positive= (good*100)/all
  const average = (neutral+bad)/good
const StatisticLine=(props)=>{
  return(
  <div style={{display:"flex", gap:".5rem"}}>
  <p>{props.text}</p>
  <p>{props.value}</p>
  </div>
  )
}


const Stattistics = (props) =>{
  if(all<=0){
    return 'No feedback given'
  }else{

  
  return(
 <>
  {/* <h1>Statistic</h1>
<p>Good {props.good}</p>
<p>Neutral {props.neutral}</p>
<p>Bad {props.bad}</p>
<p>All {props.all}</p>
<p>Average {props.average}</p>
<p>Positive {props.positive} %</p> */}
<StatisticLine text="good" value={props.good}/>
<StatisticLine text="neutral" value={props.neutral}/>
<StatisticLine text="bad" value={props.bad}/>
<StatisticLine text="average" value={props.average}/>
<StatisticLine text="positive" value={props.positive}/>


</>
  )
}
}
  return (
    <div>
       <h1 className='text-center text-[2rem] text-[green]'>Give Feedback</h1>
    <button onClick={()=>setGood(good+1)}>Good</button>
    <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
    <button onClick={()=>setBad(bad+1)}>Bad</button>
    <div className="statistic">
     <Stattistics
     good={good}
     neutral={neutral}
     bad={bad}
     all={all}
     average={average}
     positive={positive}

     />
    </div>
    </div>
  )
}

export default App