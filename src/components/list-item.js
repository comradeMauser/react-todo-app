import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

const ListItem = (props) => {
    /*

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
    */

    const {star, check, onDeleted, label, important, done} = props

    //end column style
    let colClassNames = "col my-auto"
    if (done) {
        colClassNames += " done"
    }
    if (important) {
        colClassNames += " important"
    }


    return (
        <div className="list-group-item">
            <div className="row">
                <span className={colClassNames}
                      onClick={() => {
                          check()
                      }}>
                    {label}
                </span>
                <span className="col">
                        <ItemButtons check={check} star={star} trash={onDeleted}/>
                    </span>
            </div>
        </div>
    )
};

export default ListItem