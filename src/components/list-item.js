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
            console.log("check", this.props.id);
            this.setState(({done}) => {
                return {
                    done: !done
                }
            })
        }

        // end column style changes to important
        this.star = () => {
            console.log("star", this.props.id);
            this.setState(({important}) => {
                return {
                    important: !important
                }
            })
        }
    }

    render() {
        const {label, id} = this.props

        //end column style
        let colClassNames = "col"
        if (this.state.done) {
            colClassNames += " done"
        }
        if (this.state.important) {
            colClassNames += " important"
        }

        // const style = {
        //     color: important ? "red" : "",
        //     fontWeight: important ? "bold" : "",
        //     fontSize: important ? "120%" : "",
        // }


        return (
            <div className="list-group-item">
                <div className="row">
                <span className={colClassNames}
                      onClick={() => {
                          this.check()
                      }}>
                    {label}
                </span>
                    <span className="col"><ItemButtons check={this.check} star={this.star} id={id}/></span>
                </div>
            </div>
        );
    }
}