import React from 'react';
import "./search-panel.css";

export default class SearchPanel extends React.Component {

    state = {
        formSearch: ""
    }

    render() {
        return (
            <div className="form-inline justify-content-center">
                <input className="form-control" placeholder="search"
                       onChange={this.props.formChange}/>
                <div className="btn-group-append" role="group">
                    <button type="button" className="btn btn-dark">first</button>
                    <button type="button" className="btn btn-dark">second</button>
                    <button type="button" className="btn btn-dark">third</button>
                </div>
            </div>
        )
    }
};
