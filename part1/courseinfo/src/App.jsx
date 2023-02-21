import React from "react"
import Content from "./Component/Content"
import Headers from "./Component/Header"
import Total from "./Component/Total"
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Headers course={course}/>
      <Content 
     content1={`${part1} ${exercises1}`}
     content2={`${part2} ${exercises2}`}
     content3={`${part3} ${exercises3}`}/> 
    
      <Total
      total={'Number of exercises '+ `${exercises1+exercises2+exercises3}`}
      />
    </div>
  )
}

export default App