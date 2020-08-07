import React from 'react';
import "./search-panel.css";

const SearchPanel = (props) => {
    const {formChange, activeElements} = props

    return (
        <div className="form-inline justify-content-center">
            <input className="form-control" placeholder="search"
                   onChange={formChange}/>

            <div className="btn-group-append-toggle" role="group">
                <button type="button" className="btn btn-dark">first</button>

                <button type="button" className="btn btn-dark"
                        onClick={() => {
                            activeElements("important")
                        }}>important
                </button>

                <button type="button" className="btn btn-dark"
                        onClick={() => {
                            activeElements("done")
                        }}>done
                </button>
            </div>
        </div>
    )
};

export default SearchPanel;