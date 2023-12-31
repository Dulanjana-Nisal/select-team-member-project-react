import React from "react";

function Header(props){

    let [memberArray,setMemberArray] = React.useState(props.memberCount)

    React.useEffect(() => {
        let pushArray = [];
        props.memberCount.map(items => {
            return items.teamName === props.memberTeam ? pushArray.push([{...items}]) : ''
        })
        setMemberArray(pushArray)
    }, [props.memberTeam,props.memberCount])
    


    return(
        <div className="header">
            <h1>{props.memberTeam} Have {memberArray.length === 0 ? 'No Members' : memberArray.length} {memberArray.length === 0 ? '' : memberArray.length > 1 ? 'Members' : 'Member'}</h1>
        </div>
    )
}

export default Header;