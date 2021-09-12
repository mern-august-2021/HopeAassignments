import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../componenets/Form';

const EditCartoon = (props) => {

    const [errors, setErrors] = useState({});
    const [editedCartoon, setEditedCartoon] = useState({
        //helps get rid of the uncontrolled input
        //allows us to set the type ahead  of time to prevent bugs
        name: "",
        era: "",
        image: "",
        //MT strings will not show in the db
        genre:"",
        rating:"",
        suitableForKids: true
        //type number shows by default
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/cartoons/${props.id}`)
        .then((res)=>{
            console.log(res.data);
            setEditedCartoon(res.data);

        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])

    const editCartoontHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/cartoons/${props.id}`,
        //request's body that the back-end is asking for (controller)
        editedCartoon
        )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate('/cartoon');

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
            submitHandler={editCartoontHandler} 
            buttonText="Update Cartoon"
            cartoon = {editedCartoon}
            setCartoon = {setEditedCartoon}
            errors = {errors}
            />
        </div>
    )
}

export default EditCartoon;