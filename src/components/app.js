import React from "react";
import Header from "./header";
import SearchPanel from "./search-panel";
import List from "./list";


export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            elements: [
                {id: 0, label: "drink all coffee"},
                {id: 1, label: "run in circles and scream"},
                {id: 2, label: "do something"},
                {id: 3, label: "sum summus mus"},
            ]
        };

        //removing element by index
        this.elementDelete = (id) => {
            console.debug("deleted:", id)
            this.setState(({elements}) => {
                    const index = elements.findIndex((element) => element.id === id);
                    const result = [
                        ...elements.slice(0, index),
                        ...elements.slice(index + 1)
                    ]
                    return {
                        elements: result
                    }
                }
            )
        }
    }


    render() {
        const {elements} = this.state

        return (
            <div className="container">
                <Header/>
                <SearchPanel/>
                <List listElements={elements}
                      onDeleted={(id) => {
                          this.elementDelete(id)
                      }}/>
            </div>
        )
    }
};