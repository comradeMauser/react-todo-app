import React from 'react';
import ListItem from "./list-item";
import "./list.css";

const List = () => {

    const elements = [
        {id: 0, label: "drink all coffee", important: true},
        {id: 1, label: "run in circles and scream", important: false},
        {id: 2, label: "do something", important: false},
        {id: 3, label: "sum summus mus", important: false},

    ];

    const list = elements.map((element) => {
        return (
            <span key={element.id}>
                <ListItem {...element}/>
            </span>
        )
    });

    return (
        <div>
            <ul className="list-group">
                <li style={{listStyleType: "none"}}>{list}</li>
            </ul>
        </div>
    )
};

export default List;