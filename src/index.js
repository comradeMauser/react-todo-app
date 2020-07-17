import React from "react";
import ReactDom from "react-dom"
import Header from "./header";
import SearchPanel from "./search";
import TodoList from "./todo-list";


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