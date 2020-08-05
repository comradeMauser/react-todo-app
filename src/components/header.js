import React from 'react';

const Header = (props) => {
    const date = new Date().toLocaleString()

    //temporary plug
    const {done, total} = props


    return (
        <div>
            <h1 className="text-center" style={{color: "red"}}>suffering list</h1>
            <div className="row">
                <span className="col">today is {date}</span>
                <span className="col text-right">you have total {total} tasks, {done} of these is done</span>
            </div>
        </div>
    )
};

export default Header;