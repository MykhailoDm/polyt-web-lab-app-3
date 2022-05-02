import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function Playlists(props) {

  const [p, setP] = useState([])

  let loadPlayLists = () => {
    fetch('http://127.0.0.1:5000/playlist', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => setP(data));
  }

  return (
      <div>
        <h1>Playlists</h1>
        {loadPlayLists()}
        {props.basicHeader !== '' ? p:<Link to={'/login'} >Login</Link>}
      </div>
    );
  }
  
  export default Playlists;