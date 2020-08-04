import React from 'react';

const AddButton = ({add}) => {
    return (
        <div >
            <button className="btn btn-dark btn-lg btn-block"
            onClick={add}>
                adding a new one shit
            </button>
        </div>
    );
};

export default AddButton;