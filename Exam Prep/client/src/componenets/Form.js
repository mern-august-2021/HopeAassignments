import React, {useEffect, useState} from 'react';
import EditCartoon from './EditCartoon';






const Form = (props)=> {

    const {submitHandler, buttonText, cartoon, setCartoon, errors} = props;
    //submit handler will either = EditCartoonHandler or newSubmitHandler based upon which value it was given when it was passed as a prop

    const newChangeHandler =(e) => {
        let newStateObject= {...cartoon};
        // newCartoon.name = e.target.value
        if(e.target.type === "checkbox"){
            console.log(e.target.name, e.target.checked);
            newStateObject[e.target.name] = e.target.checked;
        }
        else {
            console.log(e.target.name, e.target.value);
            newStateObject[e.target.name] = e.target.value;
        }
        console.log(e.target);
        setCartoon(newStateObject);
        
    }



    return(

        //will equal editCartoonHandler or newSubmitHandler 
        //depending on which component is rendering and sending it down

        <form onSubmit={submitHandler}>
        <div>
        <label htmlFor ="name">Name</label>
        <input onChange={newChangeHandler} name="name" type="text" value={cartoon.name} />
        {
            errors.name ?
            //change to className error-text
            <span style={{color:"red"}}>{errors.name.message}</span>
            :null
        }
        </div>

        <div>
            <label htmlFor="era">Era</label>
                <select onChange={newChangeHandler} name="era" value={cartoon.era}>
                    <option value="none" defaultValue hidden>
                    Select an Era
                    </option>
                    <option value="1960">1960</option>
                    <option value="1970">1970</option>
                    <option value="1980">1980</option>
                    <option value="1990">1990</option>
                    <option value="2000">2000</option>
                    <option value="2010">2010</option>
                    <option value="2020">2020</option>
                </select>
                {
                    errors.era ?
                    //change to className error-text
                    <span style={{color:"red"}}>{errors.era.message}</span>
                    :null
                }
                
        </div>

        <div>
            <label htmlFor="genre">Genre</label>
            <select onChange={newChangeHandler} name="genre" value={cartoon.genre}>
                <option value="none" defaultValue hidden>
                    Select a Genre
                </option>
                <option value="Anime">Anime</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Children">Children</option>
                <option value="Mystery">Mystery</option>
            </select>
            {
                errors.genre ?
                //change to className error-text
                <span style={{color:"red"}}>{errors.genre.message}</span>
                :null
            }
        </div>

        <div>
            <label htmlFor="image">Image URL:</label>
            <input onChange={newChangeHandler} name="image" type="text" value={cartoon.image}/>
            {
                errors.image ?
                //change to className error-text
                <span style={{color:"red"}}>{errors.image.message}</span>
                :null
            }
        </div>

        <div>
            <label htmlFor="rating">Rating</label>
            <input onChange={newChangeHandler} name="rating" type="number" value={cartoon.rating}/>
            {
                errors.rating ?
                //change to className error-text
                <span style={{color:"red"}}>{errors.rating.message}</span>
                :null
            }
        </div>

        <div>
            <label htmlFor="suitableForKids">Kid Friendly:</label>
            <input onChange={newChangeHandler} name="suitableForKids" type="checkbox" checked={cartoon.suitableForKids}/>
            {
                errors.suitableForKids ?
                //change to className error-text
                <span style={{color:"red"}}>{errors.suitableForKids.message}</span>
                :null
            }
        </div>

        <button>{buttonText}</button>
    </form>
    )
}

export default Form;