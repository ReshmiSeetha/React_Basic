import React from "react";
import './App.css';

function Tweet(props){
    return(
        <div className="tweet">
            <h2>{props.name}</h2>
            <h3>{props.message}</h3>
            <p>Random Tweet</p>
        </div>
    );
}

export default Tweet;