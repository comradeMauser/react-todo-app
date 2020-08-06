import React from "react";
import AddButton from "./add-button";
import Header from "./header";
import SearchPanel from "./search-panel";
import List from "./list";


export default class App extends React.Component {
    constructor() {
        super();

        //sets the local id
        this.syntheticId = 0;

        //create new element
        this.createElement = (label = "default message") => {
            return {
                label: `${label}`,
                id: this.syntheticId++,
                important: false,
                done: false,
            }
        }

        this.state = {
            elements: [
                this.createElement("drink all coffee"),
                this.createElement("run in circles and scream"),
                this.createElement("do something"),
            ],
            formSearch: ""
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

        //change element field property
        this.selectorProperty = (stateArray, id, selectorName) => {
            console.error(id, `${selectorName}`);

            const index = stateArray.findIndex((element) => element.id === id)
            const prevElement = stateArray[index]
            const newElement = {
                ...prevElement,
                [selectorName]: !prevElement[selectorName]
            }

            return [
                ...stateArray.slice(0, index),
                newElement,
                ...stateArray.slice(index + 1)
            ]
        }

        //selectorProperty for done
        this.selectorDone = (id) => {
            this.setState(({elements}) => {
                return {
                    elements: this.selectorProperty(elements, id, "done")
                }
            })

        }

        //selectorProperty for important
        this.selectorImportant = (id) => {
            this.setState(({elements}) => {
                return {
                    elements: this.selectorProperty(elements, id, "important")
                }
            })
        }


        this.search = (elements, searchValue) => {
            return elements.filter(
                (element) => element.label.indexOf(searchValue) > -1
            )
        }

        this.formSearch = (event) => {
            this.setState({formSearch: event.target.value})
            console.debug("this.state.formformSearch:", this.state.formSearch)
            console.debug("event.target.value:", event.target.value)
        }

    }

    render() {
        const {elements, formSearch} = this.state
        const total = elements.length
        const count = elements.filter((element) => element.done).length;

        const sight = this.search(elements, formSearch)

        return (
            <div className="container">

                <Header total={total} done={count}/>
                <SearchPanel formChange={this.formSearch}/>
                <List listElements={sight}
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
