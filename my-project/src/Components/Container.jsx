import React from "react";
import female from '../images/femaleProfile.jpg'
import male from '../images/maleProfile.jpg'

function Container(props){

  
    return(
        <div className="container">
            <div className="selction-area">
              <select onClick={props.hadelMemberTeam}>
                <option>Select Team</option>
                <option value='TeamA'>Team A</option>
                <option value='TeamB'>Team B</option>
                <option value='TeamC'>Team C</option>
                <option value='TeamD'>Team D</option>
              </select>
            </div>
            <div className="member-area">
                {
                    (props.employees).map(items => {
                    return <div className="member-card" id={items.teamName === props.memberTeam ? 'select' : ''} key={items.id} onClick={() => props.hadelEmployees(items.id)}>
                                <div className="card-header">
                                    <img src={items.gender === 'female' ? female : male} alt="profile-img" />
                                </div>
                                <div className="card-body">
                                    <p>Name: <span>{items.fullName}</span></p>
                                    <p>Designation: <span>{items.designation}</span></p>
                                    <p>Gender : <span>{items.gender}</span></p>
                                </div>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default Container;