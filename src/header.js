import React from 'react';

const Header = () => {
    const date = new Date().toLocaleString()
    const styles = {
        fontSize: "20px",
        // color: "red",
        marginLeft: "30px",
    }

    //temporary plug
    const undone = 22;
    const done = 33;

    return (
        <div style={styles}>
            <h1>Heavy Metal!</h1>
            <div>today is {date}
                <p>
                    you have {undone} undone tasks and {done} is complete
                </p>
            </div>
        </div>
    )
};


export default Header;