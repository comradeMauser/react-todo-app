import React from 'react';
import "./list-item.css";

const ListItem = ({elements}) => {

    const items = elements.map((item) => {

            const styleListItem = {
                color: item.important ? "red" : "black",
                fontSize: item.important ? "larger" : "medium",
                fontWeight: item.important ? "bolder" : "normal",

            }

            return <li className={"list-group-item"}
                       key={item.id}
                       style={styleListItem}
            >
                {item.label}
            </li>
        }
    )

    return <span>{items}</span>
};

export default ListItem;