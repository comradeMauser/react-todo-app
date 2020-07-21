import React from 'react';
import ListItem from "./list-item";

const List = () => {
    const items = [
        {label: "drink all coffee", important: true},
        {label: "run in circles and scream", important: false},
        {label: "do something", important: false},
    ]
    return (
        <div>
            <ul>
                <li><ListItem items={items}/></li>
            </ul>
        </div>
    )
}

export default List;