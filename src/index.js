import React from "react";
import ReactDom from "react-dom"


const Header = () => {
    const date = new Date().toLocaleString()
    const styles = {
        fontSize: "20px",
        color: "red",
        marginLeft: "30px",
    }
    return (
        <div style={styles}>
            <h1>Heavy Metal!</h1>
            <p>today is {date}</p>
        </div>
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
    const items = [
        "drink all coffee",
        "run in circles and scream",
        "do something"
    ]
    return (
        <div>
            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
            </ul>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

ReactDom.render(App(), document.getElementById("root"))