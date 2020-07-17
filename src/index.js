import React from "react";
import ReactDom from "react-dom"


const element = (
    <div>
        <h1>Heavy Metal!</h1>
        <input placeholder={"search"}/>
        <ul>
            <li>drink all coffee</li>
            <li>run in circles and scream</li>
            <li>do something</li>
        </ul>
    </div>
);

ReactDom.render(element, document.getElementById("root"))