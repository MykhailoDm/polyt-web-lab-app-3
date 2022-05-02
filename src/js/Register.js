import {useEffect, useState} from 'react';

function Register() {

    const [emailText, setEmailText] = useState('');
    const [nameText, setNameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    let createUser = () => {
        var user_body = {
            "user_email": emailText,
            "user_name": nameText,
            "user_password": passwordText
        }
        fetch('http://127.0.0.1:5000/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'no-cors'
            },
            body: JSON.stringify(user_body)
        })
    };

    return (
        <div>
            <form autoComplete='off'>
                <p>Email</p>
                <input onChange={ event => setEmailText(event.target.value)} id="user_email_textbox" />
                <p>Name</p>
                <input onChange={ event => setNameText(event.target.value)} id="user_name_textbox" />
                <p>Password</p>
                <input onChange={ event => setPasswordText(event.target.value)} id="user_pwd_textbox" />
            </form>
            <button id="submit_user_btn" onClick={createUser}>Create user</button>
        </div>
    );
}
  
export default Register;