import React from 'react';

const SearchPanel = () => {
    return (
        <div className="form-inline justify-content-center">
            <input className="form-control text-center" placeholder="search"/>
            <div className="btn-group-append" role="group">
                <button type="button" className="btn btn-dark">first</button>
                <button type="button" className="btn btn-dark">second</button>
                <button type="button" className="btn btn-dark">third</button>
            </div>
        </div>
    )
};

export default SearchPanel;
