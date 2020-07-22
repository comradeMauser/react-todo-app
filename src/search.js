import React from 'react';

const SearchPanel = () => {
    return (
        <div>
            <div style={{marginLeft: "20px"}} className="form-inline">
                <input className="form-control" placeholder="search"/>
                <div className="btn-group-append" role="group">
                    <button type="button" className="btn btn-light">first</button>
                    <button type="button" className="btn btn-light">second</button>
                    <button type="button" className="btn btn-light">third</button>
                </div>
            </div>
        </div>
    )
};

export default SearchPanel;