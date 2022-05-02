import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Music(props) {

  const [m, setM] = useState([])

  let loadPlayLists = () => {
    fetch('http://127.0.0.1:5000/music', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': props.basicHeader
            }
        }).then(response => response.json())
        .then(data => setM(data));
  }

  return (
      <div>
        <h1>Music</h1>
        {loadPlayLists()}
        {props.basicHeader !== '' ? m:<Link to={'/login'} >Login</Link>}
      </div>
    );
  }
  
  export default Music;