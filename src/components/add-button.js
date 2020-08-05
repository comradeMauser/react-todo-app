import React from 'react';
import "./add-button.css"

export default class AddButton extends React.Component {

    state = {
        label: ""
    };

    //updating state with form change
    formChange = (event) => {
        this.setState({label: event.target.value})
    };

    //updating item list with form submit
    formSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state.label);
        this.setState({label: ""})
    }

    render() {
        return (
            <form className="addButton d-flex "
                  onSubmit={this.formSubmit}>
                <input className="col-9 form-control"
                       type="text"
                       onChange={this.formChange}
                       placeholder="try"
                       value={this.state.label}
                />
                <button className="col-3 btn btn-dark btn-lg btn-block">
                    ← add it
                </button>
            </form>
        )
    }
};