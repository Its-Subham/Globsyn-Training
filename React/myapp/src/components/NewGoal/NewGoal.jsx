import React from 'react'


const NewGoal = (props) => {
    const addGoalHandelar = (event)=>{
        event.preventDefault();
        const newGoal={
            id: Math.random().toString(),
            text: document.getElementById("inputmsg").value
        }
        console.log(newGoal);
        props.onAddGoal(newGoal);
    }

  return (
    <>
    <form action="submit" onSubmit={addGoalHandelar}>
        <input type="textbox" id='inputmsg' />
        <button type="Submit">Add Goal</button>
    </form>
    </>
  )
}

export default NewGoal