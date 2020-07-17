import React from "react";
import ReactDom from "react-dom"


const Header = () => {
    return (
        <h1>Heavy Metal!</h1>
    )
}

const SearchPanel = () => {
    return (
        <div>
            <input placeholder="search"/>
        </div>
    )
}

const TodoList = () => {
    return (
        <div>
            <ul>
                <li>drink all coffee</li>
                <li>run in circles and scream</li>
                <li>do something</li>
            </ul>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

ReactDom.render(App(), document.getElementById("root"))