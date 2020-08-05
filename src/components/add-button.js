import React from 'react';
import "./add-button.css"

const AddButton = ({add}) => {
    return (
        <div className="addButton">
            <button className="btn btn-dark btn-lg btn-block"
                    onClick={add}>
                adding a new one shit
            </button>
        </div>
    );
};

export default AddButton;