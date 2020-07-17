import React from 'react';
import ListItem from "./list-item";

const List = () => {
    const items = [
        "drink all coffee",
        "run in circles and scream",
        "do something"
    ]
    return (
        <div>
            <ul>
                <li><ListItem item={items[0]}/></li>
                <li><ListItem item={items[1]}/></li>
                <li><ListItem item={items[2]}/></li>
            </ul>
        </div>
    )
}

export default List;