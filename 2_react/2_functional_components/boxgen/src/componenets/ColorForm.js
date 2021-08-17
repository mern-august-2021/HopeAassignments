import React, {useState} from 'react';

const ColorForm =(props) => {
    const [showColor, setShowColor] = useState("");
    const { color, setColor} = props;

    const createColor = (e) => {
        e.preventDefault();

        // const newColor = {color};
        // console.log(newColor)
        setColor([...color, showColor]);
    };

    return(
        <form onSubmit={createColor}>
            <div>
                <label>Color: </label>
                <input type="text" name="showColor" onChange={(e) => setShowColor(e.target.value)}/>
            </div>
            <button>Add</button>

        </form>

    )

}

export default ColorForm;