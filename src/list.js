import React from 'react';
import ListItem from "./list-item";

const List = () => {
    const elements = [
        {id: 0, label: "drink all coffee", important: true},
        {id: 1, label: "run in circles and scream", important: false},
        {id: 2, label: "do something", important: false},
    ]
    return (
        <div>
            <ul>
                <ListItem elements={elements}/>
            </ul>
        </div>
    )
}

export default List;