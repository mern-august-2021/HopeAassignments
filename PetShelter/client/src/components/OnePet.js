import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeletePets from './DeletePet';

const OnePet = (props) => {

    const [onePet, setOnePet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${[props.id]}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setOnePet(res.data);
        })
        .catch((err) => console.log(err))
    }, [])



    return (
        <div >
            {
                onePet?
                <div>
                    <p style={{border: "10px double green",fontSize: "30px", color:"blue"}}>{onePet.name}</p>
                    <img src={onePet.image} alt="image"/>
                    <p>{onePet.type}</p>
                    <p>{onePet.description}</p>
                    <h3>Skills:</h3>
                    <ul style={{listStyle:"none"}}>
                        <li>{onePet.skillOne}</li>
                        <li>{onePet.skillTwo}</li>
                        <li>{onePet.skillThree}</li>
                    </ul>
                    <DeletePets id={onePet._id} />
                </div>
                :null
            }
        </div>
    )
}

export default OnePet;