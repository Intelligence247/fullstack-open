import React from "react"
import Content from "./Component/Content"
import Headers from "./Component/Header"
import Total from "./Component/Total"
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
let total=0
parts.map((part)=>(
   total+=part.exercises
  ))
  return (
    <div>
      <Headers course={course}/>
      {parts.map((part, index)=>(
        <div key={index}>
       <Content 
       content1={`${part.name} ${part.exercises}`}/>
       </div>
       
        ))}
    

   <div>Number of exercises {total}</div> 
     </div>
  )
}

export default App