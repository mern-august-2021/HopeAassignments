import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteCartoon from './DeleteCartoon';

const OneCartoon = (props) => {

    const [oneCartoon, setOneCartoon] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/cartoons/${props.id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneCartoon(res.data);
        })
        .catch((err) => console.log(err))
    }, [])




    return (

        <div>
        
                <p>{oneCartoon.name}</p>
                <img src={oneCartoon.image} alt="image"/>
                <p>{oneCartoon.era}</p>
                <p>{oneCartoon.genre}</p>
                <p>{oneCartoon.rating}</p>
            {/* this is a ternary operator */}
            {
                oneCartoon.suitableForKids === true?
                <p>Kid Friendly? Yes</p>
                :<p>Kid Friendly? No</p>
            }
            <DeleteCartoon id={oneCartoon._id} />

            
        </div>
    )
}

export default OneCartoon;