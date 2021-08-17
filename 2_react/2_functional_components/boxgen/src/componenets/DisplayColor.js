import React from 'react';

const DisplayColor = (props) => {

    const {color} = props;

    return (
        <div>
            {
                color.map((showColor, index) => (
                    <div key ={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "50px",
                        width: "50px",
                        backgroundColor: showColor
                    }}>
                    </div>
                ))
            }
        </div>
    );
    
}



export default DisplayColor;