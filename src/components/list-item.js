import React, {Component} from 'react';
import "./list-item.css";

export default class ListItem extends Component {

    state = {
        done: false,
        elementClassName: "row",
        // elementClassName: "row done",
    }

    render() {
        const {elements} = this.props
        const {done, elementClassName} = this.state

        const items = elements.map((item) => {

            const styleListItem = {
                color: item.important ? "red" : "black",
                fontSize: item.important ? "larger" : "medium",
                fontWeight: item.important ? "bolder" : "normal",

            }

            const onElementClick = () => {
                console.debug(item.id, done )
                this.setState(()=>{
                    return{
                        elementClassName: "row done"
                    }
                })

            }

            if (done){
                this.setState(()=>{
                    return{
                        done: done,
                        elementClassName: "row done"
                    }
                })
            }

            return <li className="list-group-item"
                       key={item.id}
                       style={styleListItem}
                       // onClick={onElementClick}
            >
                <div className="row">
                    <div className="col done"> {item.label} </div>

                    {/*Important case*/}
                    <div className="col-auto">
                        <button className="btn btn-outline-warning float-right" type="button">
                            <i className="fa fa-star"> </i>
                        </button>
                    </div>

                    {/*Completed case*/}
                    <div className="col-auto">
                        <button className="btn btn-outline-success float-right" type="button"
                                onClick={onElementClick}>
                            <i className="fa fa-check"> </i>
                        </button>
                    </div>

                    {/*Delete case*/}
                    <div className="col-auto">
                        <button className="btn btn-outline-secondary float-right" type="button">
                            <i className="fa fa-trash"> </i>
                        </button>
                    </div>
                </div>
            </li>
        })

        return <span>{items}</span>
    }
}

