import React from 'react';

const TodoList = () => {
    const items = [
        "drink all coffee",
        "run in circles and scream",
        "do something"
    ]
    return (
        <div>
            <ul>
                <li>{items[0]}</li>
                <li>{items[1]}</li>
                <li>{items[2]}</li>
            </ul>
        </div>
    )
}

export default TodoList;