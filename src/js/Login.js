import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Login(props) {

    const [nameText, setNameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    return (
      <div>
        <div>
            <form autoComplete='off'>
                <p>Name</p>
                <input onChange={ event => setNameText(event.target.value)} id="user_name_textbox" />
                <p>Password</p>
                <input onChange={ event => setPasswordText(event.target.value)} id="user_pwd_textbox" />
            </form>
            <button id="submit_user_btn" onClick={() => props.headerFunc(nameText, passwordText)}>Login user</button>
            <Link to={"/playlists"}>Playlists</Link>
        </div>
      </div>
    );
  }
  
  export default Login;