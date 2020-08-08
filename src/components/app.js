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
        this.elementCreate = (label = "default message") => {
            return {
                label: `${label}`,
                id: this.syntheticId++,
                important: false,
                done: false,
            }
        }

        this.state = {
            elements: [
                this.elementCreate("drink all coffee"),
                this.elementCreate("run in circles and scream"),
                this.elementCreate("do something"),
            ],
            formSearch: "",
            dashboardStatus: "all",
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

        //adds new element to state with elementCreate()
        this.elementAdd = (text) => {
            const newElement = this.elementCreate(text)

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

        //return filtered elements to list
        this.searchFilter = (elements, searchValue) => {
            if (searchValue.length === 0) {
                return elements
            }
            return elements.filter(
                (element) => element.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
            )
        }

        //sets form value(search-panel) to state
        this.formSearch = (event) => {
            this.setState({formSearch: event.target.value})
        }

        this.activeElements = (status) => {
            this.setState(({dashboardStatus}) => {
                if (dashboardStatus === status) {
                    return {dashboardStatus: "all"}
                }
                return {dashboardStatus: status}
            })
        }

    }

    render() {
        const {elements, formSearch, dashboardStatus} = this.state
        const total = elements.length
        const count = elements.filter((element) => element.done).length

        const result = () => {
            switch (dashboardStatus) {
                case "all":
                    return elements
                case "important":
                    return elements.filter((element) => element.important)
                case "done":
                    return elements.filter((element) => element.done)
                default:
                    console.error("retard!")
            }

        }

        //dostoprimechatel`nosti
        const sights = this.searchFilter(result(), formSearch); //all visible elements


        return (
            <div className="container">

                <button className="btn-lg btn-block"
                        onClick={() => {
                            console.debug(dashboardStatus)
                        }}>status
                </button>

                <Header total={total} done={count}/>
                <SearchPanel formChange={this.formSearch}
                             activeElements={this.activeElements}
                             dashboardStatus={dashboardStatus}
                />
                <List listElements={sights}
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
