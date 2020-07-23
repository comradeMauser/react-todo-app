import React from 'react';
import "./list-item.css";

const ListItem = ({elements}) => {

    const items = elements.map((item) => {

            const styleListItem = {
                color: item.important ? "red" : "black",
                fontSize: item.important ? "larger" : "medium",
                fontWeight: item.important ? "bolder" : "normal",

            }

            return <li className="list-group-item"
                       key={item.id}
                       style={styleListItem}
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
        }
    )

    return <span>{items}</span>
};

export default ListItem;