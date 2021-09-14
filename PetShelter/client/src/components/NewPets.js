import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const NewPets = (props) => {

    const[ errors, setErrors] = useState({});

    const [newPet, setNewPet] = useState({
        name:"",
        image:"",
        type:"",
        description:"",

    })

    
    

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets',
        newPet
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate('/pet');
        })
        .catch((err)=> {
            console.log(err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }


    return (
        <div>
            <Form 
            submitHandler={newSubmitHandler} 
            buttonText="Add New Pet"
            pet={newPet}
            setPet={setNewPet}
            errors={errors}
            />
        </div>
    )
}

export default NewPets;