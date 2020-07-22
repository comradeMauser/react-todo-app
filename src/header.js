import React from 'react';

const Header = () => {
    const date = new Date().toLocaleString()
    const styles = {
        fontSize: "20px",
        marginLeft: "30px",
    }

    //temporary plug
    const undone = 22;
    const done = 33;

    return (
        <div style={styles}>
            <h1 className="text-center">Heavy Metal!</h1>
            <div className="row">
                <span className="col">today is {date}</span>
                <span className="col text-right">you have {undone} undone tasks and {done} is complete</span>
            </div>
        </div>
    )
};

export default Header;