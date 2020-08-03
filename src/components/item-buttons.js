import React from 'react';

const ItemButtons = (props) => {

    return (
        <div className="row float-right">

            {/*Important case*/}
            <div className="col-auto">
                <button className="btn btn-outline-warning float-right" type="button"
                        onClick={() => {
                            props.star()
                        }}>
                    <i className="fa fa-star"> </i>
                </button>
            </div>

            {/*Completed case*/}
            <div className="col-auto">
                <button className="btn btn-outline-success float-right" type="button"
                        onClick={() => {
                            props.check()
                        }}>
                    <i className="fa fa-check"> </i>
                </button>
            </div>

            {/*Delete case*/}
            <div className="col-auto">
                <button className="btn btn-outline-secondary float-right" type="button"
                        onClick={() => {
                            props.trash()
                        }}>
                    <i className="fa fa-trash"> </i>
                </button>
            </div>

        </div>
    );
};

export default ItemButtons;