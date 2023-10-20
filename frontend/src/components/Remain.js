import React, { useState } from "react";

function Remain(props){
    return (
        <div className="alert alert-success" role="alert">
            <span> Remaining: {props.value}€</span>
        </div>
    )
}

export default Remain;