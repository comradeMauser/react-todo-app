import React from "react";
import ReactDom from "react-dom"
import Header from "./header";
import SearchPanel from "./search";
import List from "./list";


const App = () => {
    return (
        <div>
            <Header/>
            <SearchPanel/>
            <List/>
        </div>
    )
}

ReactDom.render(App(), document.getElementById("root"))