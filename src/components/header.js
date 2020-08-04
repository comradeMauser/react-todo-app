import React from 'react';

const Header = ({undone}) => {
    const date = new Date().toLocaleString()

    //temporary plug
    const done = 33;

    return (
        <div>
            <h1 className="text-center" style={{color:"red"}}>suffering list</h1>
            <div className="row">
                <span className="col">today is {date}</span>
                <span className="col text-right">you have {undone} undone tasks and {done} is complete</span>
            </div>
        </div>
    )
};

export default Header;