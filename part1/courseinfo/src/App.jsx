import React from "react"
import Content from "./Component/Content"
import Headers from "./Component/Header"
import Total from "./Component/Total"
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Headers course={course}/>
      <Content 
     content1={`${part1.name} ${part1.exercises}`}
     content2={`${part2.name} ${part2.exercises}`}
     content3={`${part3.name} ${part3.exercises}`}/> 
    
      <Total
      total={'Number of exercises '+ `${part1.exercises+part2.exercises+part3.exercises}`}
      />
    </div>
  )
}

export default App