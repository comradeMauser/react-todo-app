import React from 'react';
import ListItem from "./list-item";
import "./list.css";

const List = () => {
    const elements = [
        {id: 0, label: "drink all coffee", important: true},
        {id: 1, label: "run in circles and scream", important: false},
        {id: 2, label: "do something", important: false},
    ]
    return (
        <div>
            <ul className="list-group">
                <ListItem elements={elements}/>
            </ul>
        </div>
    )
};

export default List;