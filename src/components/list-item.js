import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

const ListItem = (props) => {
    const {star, check, onDeleted, label, important, done} = props

    //end column style
    let colClassNames = "col my-auto"
    if (done) {
        colClassNames += " done"
    }
    if (important) {
        colClassNames += " important"
    }


    return (
        <div className="list-group-item">
            <div className="row">
                <span className={colClassNames}
                      onClick={() => {
                          check()
                      }}
                      onDoubleClick={() => {
                          star()
                      }}>
                    {label}
                </span>
                <span className="col">
                        <ItemButtons check={check} star={star} trash={onDeleted}/>
                    </span>
            </div>
        </div>
    )
};

export default ListItem