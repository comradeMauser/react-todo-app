import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

export default class ListItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false
        }

        this.check = () => {
            console.log("check", this.props.id);
            this.setState(({done})=>{
                return{
                    done: !done
                }
            })
        }
    }

    render() {
        const {label, important, id} = this.props
        // const

        let colClassNames = "col"
        if (this.state.done) {
            colClassNames += " done"
        }

        const style = {
            color: important ? "red" : "",
            fontWeight: important ? "bold" : "",
            fontSize: important ? "30px" : "",

        }


        return (
            <div className="list-group-item">
                <div className="row">
                <span className={colClassNames} style={style}
                      onClick={() => {
                          this.check()
                      }}
                >
                    {label}
                </span>
                    <span className="col"><ItemButtons check={this.check} id={id}/></span>
                </div>
            </div>
        );
    }
}