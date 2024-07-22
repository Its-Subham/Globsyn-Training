import React from 'react'

const GoalList = (props) => {

return (
  <ul>
    <h1>Course Goals</h1>
    {props.goals.map((goal)=>(<li key={goal.id}>{goal.text}</li>
    ))}
  </ul>
)
  
  // return (
  //   <div>
  //     <h1>My React Goal.</h1>
  //     <ul>
  //       <li>Start Learning.</li>
  //       <li>Finish the course.</li>
  //       <li>Get a job.</li>
  //     </ul>
  //   </div>
  // )
}

export default GoalList