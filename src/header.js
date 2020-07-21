import React from 'react';

const Header = () => {
    const date = new Date().toLocaleString()
    const styles = {
        fontSize: "20px",
        // color: "red",
        marginLeft: "30px",
    }

    return (
        <div style={styles}>
            <h1>Heavy Metal!</h1>
            <p>today is {date}</p>
        </div>
    )
};


export default Header;