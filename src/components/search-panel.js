import React from 'react';
import "./search-panel.css";

const SearchPanel = (props) => {
    const {formChange, activeElements} = props

/*
    const classes = [
        {label: "first"},
        {label: "important"},
        {label: "done"},
    ]

    const buttons = classes.map((cl) => {
        const active = dashboardStatus===cl.label ? "btn btn-dark active": "btn btn-dark"
        return <button className={active}>{cl.label}</button>
    })
*/


    return (
        <div className="form-inline justify-content-center">
            <input className="form-control" placeholder="search"
                   onChange={formChange}/>

            <div className="btn-group-append btn-group-toggle">
                <button type="button" className="btn btn-dark active">first</button>

                <button type="button" className="btn btn-dark"
                        onClick={() => {
                            activeElements("important")
                        }}>important
                </button>

                <button type="button" className="btn btn-dark"
                        onClick={() => {
                            activeElements("done");

                        }}>done
                </button>
                {/*<div> {buttons}</div>*/}
            </div>
        </div>
    )
};

export default SearchPanel;