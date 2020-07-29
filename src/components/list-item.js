import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

const ListItem = (props) => {
    const {label} = props

    const star = () => {
        console.log("star")
    }

    return (
        <div className="list-group-item">
            <div className="row">
                <span className="col">{label}</span>
                <span className="col"><ItemButtons check={star}/></span>
            </div>
        </div>
    );
};

export default ListItem;