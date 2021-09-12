import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../componenets/Form';

const NewCartoon = (props) => {

    const [errors, setErrors] = useState({});
    const [newCartoon, setNewCartoon] = useState({
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


    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/cartoons',
        //request's body that the back-end is asking for (controller)
        newCartoon
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
            submitHandler={newSubmitHandler} 
            buttonText="Add New Cartoon"
            cartoon = {newCartoon}
            setCartoon = {setNewCartoon}
            errors={errors}
            />
        </div>
    )
}

export default NewCartoon;