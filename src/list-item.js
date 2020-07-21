import React from 'react';

const ListItem = (props) => {


    const items = props.items.map((item) => {

        const styleListItem = {
            color: item.important ? "red" : "black"
        }
        return <li style={styleListItem}>{item.label}</li>
    })

    return <span>{items}</span>
    // return <span style={styleListItem}>{props.items.label}</span>

};

export default ListItem;