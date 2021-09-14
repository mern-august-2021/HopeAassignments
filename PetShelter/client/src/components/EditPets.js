import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const EditPets = (props) => {

    const[ errors, setErrors] = useState({});

    const [editedPet, setEditedPet] = useState({
        name:"",
        image:"",
        type:"",
        description:"",

    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then((res)=>{
            console.log(res.data);
            setEditedPet(res.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }, [])



    const editPetHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props.id}`,
        editedPet
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
            submitHandler={editPetHandler} 
            buttonText="Update Pet"
            pet={editedPet}
            setPet={setEditedPet}
            errors={errors}
            />
        </div>
    )
}


export default EditPets;