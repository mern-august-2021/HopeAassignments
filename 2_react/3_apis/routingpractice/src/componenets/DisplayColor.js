import React from 'react';

const DisplayColor = (props) => {
    const {color, bgColor} = props;
    return (
        <div style = {{backgroundColor: bgColor}}>
            <p style = {{color: color}}>The word is: {props.word}</p>
        </div>
    )
}
export default DisplayColor;