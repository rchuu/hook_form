import React, { useState } from 'react';

const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { userName, firstName, lastName, email, password, confirmPassword };
        console.log('Welcome', newUser);
    };

    return (
        <div className='m-5'>
            <form onSubmit={createUser}>
                <div className='mb-3'>
                    <label>Username: </label>
                    <input type='text' onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label> First Name: </label>
                    <input type='text' onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type='text' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type='text' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type='text' onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type='submit' value='Create User' />
            </form>
        </div>
    );
};

export default UserForm