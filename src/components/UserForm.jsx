import React, { useState } from 'react';

const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { userName, firstName, lastName, email, password, confirmPassword };
    //     console.log('Welcome', newUser);
    // };

    return (
        <div className='m-5'>
            <form className='align-items-center'>
                <div className='mb-3'>
                    <label className='col-sm-2 col-form-label'>Username: </label>
                    <input type='text' onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='col-sm-2 col-form-label'> First Name: </label>
                    <input type='text' onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='col-sm-2 col-form-label'>Last Name: </label>
                    <input type='text' onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='col-sm-2 col-form-label'>Email Address: </label>
                    <input type='text' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='col-sm-2 col-form-label'>Password: </label>
                    <input type='password' value='{password}' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='col-sm-2 col-form-label'>Confirm Password: </label>
                    <input type='password'
                        value='{confirmPassword}'
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {/* <input type='submit' value='Create User' /> */}
            </form>
            <div className='card text-center'>
                <li>User Name: {userName}</li>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>Email: {email}</li>
                <li>Password: {password}</li>
                <li>Confirm Password: {confirmPassword}</li>
            </div>
        </div>
    );
};

export default UserForm