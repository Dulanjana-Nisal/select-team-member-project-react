import React from "react";
import './App.css'
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import Header from "./Components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Notfound from "./Components/Notfound";
import Employees from "./Components/Employees";
import Navbar from "./Components/Navbar";

function App(){

    let [memberTeam,setMemberTeam] = React.useState(JSON.parse(localStorage.getItem('memberteam')) || 'TeamA')
    let [employees,setEmployees] = React.useState(JSON.parse(localStorage.getItem('emplyees')) ||
        [ 
            {
                id: 1,
                fullName: "Bob Jones",
                designation: "JavaScript Developer",
                gender: "male",
                teamName: "TeamA"
              },
              {
                id: 2,
                fullName: "Jill Bailey",
                designation: "Node Developer",
                gender: "female",
                teamName: "TeamA"
              },
              {
                id: 3,
                fullName: "Gail Shepherd",
                designation: "Java Developer",
                gender: "female",
                teamName: "TeamA"
              },
              {
                id: 4,
                fullName: "Sam Reynolds",
                designation: "React Developer",
                gender: "male",
                teamName: "TeamB"
              },
              {
                id: 5,
                fullName: "David Henry",
                designation: "DotNet Developer",
                gender: "male",
                teamName: "TeamB"
              },
              {
                id: 6,
                fullName: "Sarah Blake",
                designation: "SQL Server DBA",
                gender: "female",
                teamName: "TeamB"
              },
              {
                id: 7,
                fullName: "James Bennet",
                designation: "Angular Developer",
                gender: "male",
                teamName: "TeamC"
              },
              {
                id: 8,
                fullName: "Jessica Faye",
                designation: "API Developer",
                gender: "female",
                teamName: "TeamC"
              },
              {
                id: 9,
                fullName: "Lita Stone",
                designation: "C++ Developer",
                gender: "female",
                teamName: "TeamC"
              },
              {
                id: 10,
                fullName: "Daniel Young",
                designation: "Python Developer",
                gender: "male",
                teamName: "TeamD"
              },
              {
                id: 11,
                fullName: "Adrian Jacobs",
                designation: "Vue Developer",
                gender: "male",
                teamName: "TeamD"
              },
              {
                id: 12,
                fullName: "Devin Monroe",
                designation: "Graphic Designer",
                gender: "male",
                teamName: "TeamD"
              }
        ]
    )

     React.useEffect(() => {
        localStorage.setItem('emplyees', JSON.stringify(employees))
     }, [employees])   

     React.useEffect(() => {
        localStorage.setItem('memberteam', JSON.stringify(memberTeam))
     }, [memberTeam])   

    function hadelMemberTeam(event){
        setMemberTeam(event.target.value)
    }

    function hadelEmployees(eventID){
        let newEmployees = [];
        employees.map(items => {
            return eventID === items.id ? items.teamName === memberTeam ? newEmployees.push({...items, teamName: ''}) : newEmployees.push({...items, teamName: memberTeam})  : newEmployees.push({...items})
        })
        setEmployees(newEmployees)
    }
    
    return(
        <Router>
          <Navbar />
          <Routes>
                <Route path='/' element={<><Header memberTeam={memberTeam} memberCount={employees} /><Container employees={employees} hadelEmployees={hadelEmployees} hadelMemberTeam={hadelMemberTeam} memberTeam={memberTeam}/></>} />
                <Route path="*" element={<Notfound/>}/>
                <Route path="/employees" element={<Employees employees={employees}/>}/>
          </Routes>
          <Footer />
        </Router>
    )
}

export default App;