import React from "react";

import './UnderConstruction.css';

function UnderConstruction() {
    return(
        <div className="UC-App">
            <div className="UC-Container">
                <span style={{fontSize:'80px', color:'#EEA204'}}>Coming Soon!</span><br/>
                <span style={{fontSize:'20px'}}>This page is currently under construction. Please refer to the bottom of the page for contact information.</span> 
            </div>
        </div>
    );
}

export default UnderConstruction;