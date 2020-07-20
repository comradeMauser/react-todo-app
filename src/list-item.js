import React from 'react';

const ListItem = (props) => {

    const styleListItem = {
        color : props.item.important ? "red" : "black"
    }

    return <span style={styleListItem}>{props.item.label}</span>

};

export default ListItem;