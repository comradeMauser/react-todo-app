import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

export default class ListItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        }

        // end column style changes to completed
        this.check = () => {
            console.log("check", this.props.id, "class ListItem");
            this.setState(({done}) => {
                return {
                    done: !done
                }
            })
        }

        // end column style changes to important
        this.star = () => {
            console.log("star", this.props.id, "class ListItem");
            this.setState(({important}) => {
                return {
                    important: !important
                }
            })
        }
    }


    render() {
        const {label, id, onDeleted} = this.props

        //end column style
        let colClassNames = "col my-auto"
        if (this.state.done) {
            colClassNames += " done"
        }
        if (this.state.important) {
            colClassNames += " important"
        }


        return (
            <div className="list-group-item">
                <div className="row">
                <span className={colClassNames}
                      onClick={() => {
                          this.check()
                      }}>
                    {label}
                </span>
                    <span className="col">
                        <ItemButtons check={this.check} star={this.star} id={id} trash={onDeleted}/>
                    </span>
                </div>
            </div>
        );
    }
}