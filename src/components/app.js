import React from "react";
import AddButton from "./add-button";
import Header from "./header";
import SearchPanel from "./search-panel";
import List from "./list";


export default class App extends React.Component {
    constructor() {
        super();
        this.syntheticId = 99

        this.state = {
            elements: [
                {id: 0, label: "drink all coffee", done: false},
                {id: 1, label: "run in circles and scream", done: false},
                {id: 2, label: "do something", done: false},
                {id: 3, label: "sum summus mus", done: false},
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

        //adds new element to state
        this.elementAdd = () => {
            console.debug(`${this.syntheticId} shit added(App class)`)

            const newElement = {
                label: `a new one ${this.syntheticId}`,
                id: this.syntheticId++,
            }
            this.setState(({elements}) => {
                const result = [...elements, newElement]
                return {
                    elements: result
                }
            })
        }

        this.selectorDone = (id) => {
            console.error(id, "Done")
        }

        this.selectorImportant = (id) => {
            console.error(id, "Important")
        }

    }


    render() {
        const {elements} = this.state

        return (
            <div className="container">
                <Header undone={elements.length}/>
                <SearchPanel/>
                <List listElements={elements}
                      onDeleted={(id) => {
                          this.elementDelete(id)
                      }}
                check={this.selectorDone}
                star={this.selectorImportant}/>
                <AddButton add={this.elementAdd}/>
            </div>
        )
    }
};