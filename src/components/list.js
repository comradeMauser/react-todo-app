import React from 'react';
import ListItem from "./list-item";
import "./list.css";

const List = (props) => {
        const {listElements, onDeleted, star, check} = props

        const list = listElements.map((element) => {
            return (
                <span key={element.id}>
                    <ListItem {...element}
                              onDeleted={() => {onDeleted(element.id)}}
                              star={() => {star(element.id)}}
                              check={() => {check(element.id)}}
                    />
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
    }
;

export default List;