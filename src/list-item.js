import React from 'react';

const ListItem = ({elements}) => {

    const items = elements.map((item) => {

        const styleListItem = {
            color: item.important ? "red" : "black"
        }
        return <li style={styleListItem}>{item.label}</li>
    })

    return <span>{items}</span>

};

export default ListItem;