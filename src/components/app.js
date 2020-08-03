import React from "react";
import Header from "./header";
import SearchPanel from "./search-panel";
import List from "./list";


const App = () => {

    const elements = [
        {id: 0, label: "drink all coffee"},
        {id: 1, label: "run in circles and scream"},
        {id: 2, label: "do something"},
        {id: 3, label: "sum summus mus"},
    ];

    return (
        <div className="container">
            <Header/>
            <SearchPanel/>
            <List listElements={elements}
                  onDeleted={(id) => {
                      console.debug(`id: ${id} from App`)
                  }}/>
        </div>
    )
};

export default App;