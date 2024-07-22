import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import GoalList from './components/NewGoal/GoalList'
// import CatagoryList from './components/CatagoryList'
// import NewGoal from './components/NewGoal/NewGoal'

// import Home from './components/Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import AboutUs from './components/Pages/AboutUs'
// import Login from './components/Pages/Login'
// import Registration from './components/Pages/Registration'
import Home from './components/CURD/Home'
import Creat from './components/CURD/Creat'


function App() {

  const [courseGols, setCourseGoals] = useState([
    { id: "cg1", text: "Start Learning." },
    { id: "cg2", text: "Finish the course." },
    { id: "cg3", text: "Get a job." }
  ])

  // const courseGols =[
  //   {id:"cg1", text:"Start Learning."},
  //   {id:"cg2", text:"Finish the course."},
  //   {id:"cg3", text:"Get a job."}
  // ]

  const addNewGoalHandler = (newGoal) => {
    // courseGols.push(newGoal);
    setCourseGoals(courseGols.concat(newGoal));
    console.log(courseGols);
  }

  //   const catagoryList = [
  //     {id:"phone", text:"This a Smart Phone"},
  //     {id:"laptop", text:"This a Laptop"},
  //     {id:"watch", text:"This a Smart Watch"}
  // ]

  return (

    // <>
    //   <NewGoal onAddGoal={addNewGoalHandler}/>
    //   <GoalList goals={courseGols}/>
    //   {/* <CatagoryList products={catagoryList}/> */}
    // </>

    <>
      <Router>

          <Routes>
            {/* <Route path="/" Component={Home}></Route>
            <Route path="/aboutus" Component={AboutUs}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/registration" Component={Registration}></Route> */}
            <Route path="/" Component={Home}/>
            <Route path='/creat' Component={Creat}/>
          </Routes>
          {/* <Redirect to="/"/> */}

      </Router>
    </>

  )
}

export default App
