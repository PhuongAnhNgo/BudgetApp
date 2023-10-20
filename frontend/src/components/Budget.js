import React, { useEffect, useState } from "react";
import axios from 'axios';

function Budget(props){
    return (
        <div className="alert alert-secondary" role="alert">
            <span> Budget: {props.value}€</span>
        </div>
    )
}

export default Budget;