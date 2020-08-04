import React from "react";
import AddButton from "./add-button";
import Header from "./header";
import SearchPanel from "./search-panel";
import List from "./list";


export default class App extends React.Component {
    constructor() {
        super();

        this.syntheticId = 0;

        //create new element
        this.createElement = (label = "default message") => {
            return {
                label: `${this.syntheticId} - ${label}`,
                id: this.syntheticId++,
                important: false,
                done: false
            }
        }

        this.state = {
            elements: [
                this.createElement("drink all coffee"),
                this.createElement("run in circles and scream"),
                this.createElement("do something"),
                this.createElement(),
                this.createElement(this.syntheticId),
            ]
        };

        //removing element by index
        this.elementDelete = (id) => {
            console.debug("deleted:", id)
            this.setState(({elements}) => {
                    const index = elements.findIndex((element) => element.id === id)
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


        //adds new element to state with createElement()
        this.elementAdd = (text) => {
            const newElement = this.createElement(text)

            this.setState(({elements}) => {
                const result = [...elements, newElement]
                return {
                    elements: result
                }
            })
        }

        this.selectorDone = (id) => {
            console.error(id, "Done");

            this.setState(({elements}) => {
                const index = elements.findIndex((element) => element.id === id)
                const prevElement = elements[index]
                const newElement = {...prevElement, done: !prevElement.done}

                const result = [
                    ...elements.slice(0, index),
                    newElement,
                    ...elements.slice(index + 1)
                ]

                return{
                    elements: result
                }
            })


        }

        this.selectorImportant = (id) => {
            console.error(id, "Important");
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
