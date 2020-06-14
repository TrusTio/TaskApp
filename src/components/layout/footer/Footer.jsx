import React from 'react';

const styles = {
    backgroundColor: 'lightblue',
    height: '20px',
    width: '100%',
    position: 'fixed',
    bottom: 0
};

export function Footer(){
    return(
        <div className="footer" style={styles}>
            <span className="info">Footer works</span>
        </div>
    );
}