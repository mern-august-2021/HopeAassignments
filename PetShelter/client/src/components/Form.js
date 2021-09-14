import React, {useState, useEffect } from 'react';



const Form = (props) => {

    const {submitHandler, buttonText, pet, setPet, errors} = props;

    const newChangeHandler =(e) => {
        let newStateObject = {...pet};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target);
        setPet(newStateObject);
    }




    return(
        
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor = "name">Name: </label>
                    <input onChange={newChangeHandler} name="name" type="text" value={pet.name} />
                    {
                        errors.name ?
                        <span style={{color:"red"}}>{errors.name.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label htmlFor = "image">Image URL: </label>
                    <input onChange={newChangeHandler} name="image" type="text" value={pet.image} />
                    {
                        errors.image ?
                        <span style={{color:"red"}}>{errors.image.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label htmlFor = "type">Type: </label>
                    <input onChange={newChangeHandler} name="type" type="text" value={pet.type} />
                    {
                        errors.type ?
                        <span style={{color:"red"}}>{errors.type.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label htmlFor = "description">Description: </label>
                    <input onChange={newChangeHandler} name="description" type="text" value={pet.description} />
                    {
                        errors.description ?
                        <span style={{color:"red"}}>{errors.description.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label htmlFor = "skillOne">Skill 1(optional): </label>
                    <input onChange={newChangeHandler} name="skillOne" type="text" value={pet.skillOne} />
                </div>
                <div>
                    <label htmlFor = "skillTwo">Skill 2(optional): </label>
                    <input onChange={newChangeHandler} name="skillTwo" type="text" value={pet.skillTwo} />
                </div>
                <div>
                    <label htmlFor = "skillThree">Skill 3(optional): </label>
                    <input onChange={newChangeHandler} name="skillThree" type="text" value={pet.skillThree} />
                </div>
                <button>{buttonText}</button>
            </form>
    
    )
}

export default Form;