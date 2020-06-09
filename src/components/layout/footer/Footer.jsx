import React from 'react';

export function Footer(){

    const styles = {
        backgroundColor: 'lightgray',
        height: '20px',
        width: '100%',
        position: 'fixed',
        bottom: 0
    };

    return(
        <div className="footer" style={styles}>
            <span className="info">Footer works</span>
        </div>
    );
}