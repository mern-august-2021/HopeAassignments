import React, { useState }  from 'react';

const PersonCard = (props) => {
    const [ birthAge, setBirthAge ] = useState(props.age);
    const {firstName, lastName, hairColor} = props;
    return(
        <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { birthAge }</p>
            <p>Hair Color: { hairColor}</p>
            <button onClick={ (e) => {
                console.log(birthAge);
                setBirthAge(birthAge + 1)} }>Birthday Button for { firstName } { lastName }</button>
        </div>
    )
}

export default PersonCard;
