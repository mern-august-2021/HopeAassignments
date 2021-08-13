import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfrimPass] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPass};
        console.log("Welcome", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfrimPass("");
    };

    return(
        <form onSubmit={ createUser }>
            <div>
                {
                    firstName.length > 0 && firstName.length < 2 ?
                    <span>Your  first name must be at least 2 charaters long!</span>
                    :null
                }
                <label>First Name:</label>
                <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                {
                    lastName.length > 0 && lastName.length < 2 ?
                    <span>Your last name must be at least 2 charaters long!</span>
                    :null
                }
                <label>Last Name:</label>
                <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                {
                    email.length > 0 && email.length < 5 ?
                    <span>Your email must be at least 5 charaters long!</span>
                    :null
                }
                <label>Email:</label>
                <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                {
                    password.length > 0 && password.length < 8 ?
                    <span>Your name must be at least 8 charaters long!</span>
                    :null
                }
                <label>Password:</label>
                <input type="text" value={ password } onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                {
                    password.length >= 8 && confirmPass.length > 0 ?
                    password !== confirmPass ?
                    <span>Password must match!</span>
                    :null
                    :null
                }
                <label> Confirm Password:</label>
                <input type="text" value={ confirmPass } onChange={ (e) => setConfrimPass(e.target.value) } />
            </div>
            {/* <input type="submit" value="Create User" /> */}
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPass }</p>
            </div>
        </form>
        
    )
}
export default UserForm;