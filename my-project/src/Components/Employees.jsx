import React from 'react';

function Employees(props){

 let teamNames = [
    {
        id: 1,
        teamName : 'Team A'
    },
    {
        id: 2,
        teamName : 'Team B'
    },
    {
        id: 3,
        teamName : 'Team C'
    },
    {
        id: 4,
        teamName : 'Team D'
    }
 ]

 let teamA = [props.employees.map(items => {return items.teamName === 'TeamA' ? <p>{items.fullName}</p> : false})]
 let teamB = [props.employees.map(items => {return items.teamName === 'TeamB' ? <p>{items.fullName}</p> : false})]
 let teamC = [props.employees.map(items => {return items.teamName === 'TeamC' ? <p>{items.fullName}</p> : false})]
 let teamD = [props.employees.map(items => {return items.teamName === 'TeamD' ? <p>{items.fullName}</p> : false})]



    return(
        <div className='employees'>
            <div className='employees-area'>
                {
                    teamNames.map(items => {
                        return <div className='employees-card' key={items.id}>
                                    <div className='employee-team'>
                                        <h1>{items.teamName}</h1>
                                    </div>
                                    <div className='card-data'>
                                        {
                                        items.teamName === 'Team A' ? teamA.map(items => items) : items.teamName === 'Team B' ? teamB.map(items => items) : items.teamName === 'Team C' ? teamC.map(items => items) : items.teamName === 'Team D' ? teamD.map(items => items) : ''
                                        }
                                    </div>
                                </div>
                    })
                } 
                
            </div>
        </div>
    )
}

export default Employees;