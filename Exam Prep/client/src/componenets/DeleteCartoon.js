import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const DeleteCartoon = (props) => {

    //filtermethod
    const {id, cartoonList, setCartoonList} = props;

    const deleteFilter = (id) => {
        let newList = cartoonList.deleteFilter((cartoon) => 
        cartoon.id !== id);
        setCartoonList(newList);
    }

    const deleteHandler =(e) =>{
        axios.delete(`http://localhost:8000/api/cartoons/${id}`)
        .then((res) =>{
            console.log(res.data);
            //filtermethod
            if(cartoonList){
                deleteFilter(id);
            }
            else{
                navigate('/');
            }
            

        })
        .catch((err)=> console.log(err))
    }



    return (

        <div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default DeleteCartoon;