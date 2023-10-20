import React, { useState } from "react";

function Spent(props){
    return (
        <div className="alert alert-primary" role="alert">
            <span> Spent total: {props.value}€</span>
        </div>
    )
}

export default Spent;