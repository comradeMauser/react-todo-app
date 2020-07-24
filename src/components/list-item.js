import React, {Component} from 'react';
import "./list-item.css";

export default class ListItem extends Component {

    render() {
        const {elements} = this.props

        const items = elements.map((item) => {

            const styleListItem = {
                color: item.important ? "red" : "black",
                fontSize: item.important ? "larger" : "medium",
                fontWeight: item.important ? "bolder" : "normal",

            }

            const onElementClick = () => {
                console.debug((item.label.toUpperCase().split("").reverse().join("")))
            }

            return <li className="list-group-item"
                       key={item.id}
                       style={styleListItem}
                       onClick={onElementClick}
            >
                <div className="row">
                    <div className="col"> {item.label} </div>

                    <div className="col-auto">
                        <button className="btn btn-outline-success float-right" type="button">
                            <i className="fa fa-star"> </i>
                        </button>
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-outline-warning float-right" type="button">
                            <i className="fa fa-trash"> </i>
                        </button>
                    </div>
                </div>
            </li>
        })

        return <span>{items}</span>
    }
}

