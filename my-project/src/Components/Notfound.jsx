import React from "react";
import notFound from '../images/not-found.png';

function Notfound(){
    return(
        <div className="not-found">
            <div className="header">
                <img src={notFound} alt="not-found" />
            </div>
            <div className="footer">
                <a href="/">Back To Home Page</a>
            </div>
        </div>
    )
}

export default Notfound;