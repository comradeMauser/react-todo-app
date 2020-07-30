import React from 'react';
import ItemButtons from "./item-buttons";
import "./list-item.css"

export default class ListItem extends React.Component {

    render() {
        const {label, important, id, star} = this.props
        const style = {
            color: important ? "red" : "",
            fontWeight: important ? "bold" : "",
            fontSize: important ? "30px" : "",

        }


        return (
            <div className="list-group-item">
                <div className="row">
                <span className="col" style={style} onClick={() => {star()}}>
                    {label}
                </span>
                    <span className="col"><ItemButtons check={star} id={id}/></span>
                </div>
            </div>
        );
    }
}