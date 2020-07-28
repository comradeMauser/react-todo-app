import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

const ListItem = (props) => {
    const {label} = props
    return (
        <div className="list-group-item">
            <div className="row">
                <span className="col">{label}</span>
                <span className="col"><ItemButtons/></span>
            </div>
        </div>
    );
};

export default ListItem;