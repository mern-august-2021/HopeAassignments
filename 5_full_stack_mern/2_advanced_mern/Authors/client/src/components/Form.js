import React, {useState, useEffect} from 'react';


const Form = (props) => {
    
    const {submitHandler, buttonText, author, setAuthor, errors} = props;

    const newChangeHandler = (e) =>{
        let newStateObject ={...author};
        newStateObject[e.target.name] = e.target.value;
        console.log(e.target);
        setAuthor(newStateObject);
    }





    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor = "name">Name: </label>
                    <input onChange={newChangeHandler}
                    name="name" type="text" value={author.name}/>
                    {
                        errors.name ?
                        <span style= {{color: "red"}}>{errors.name.message}</span>
                        :null
                    }
                    <div>
                    <button>{buttonText}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;