import React from "react";
import Header from "./header";
import SearchPanel from "./search-panel";
import List from "./list";


const App = () => {
    return (
        <div className="container">
            <Header/>
            <SearchPanel/>
            <List/>
        </div>
    )
};

export default App;