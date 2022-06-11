import {useEffect, useState} from 'react';
import '../css/general_styles.css'
import { Link } from "react-router-dom";

function Music(props) {

  const [m, setM] = useState([])

  useEffect(() => {
    loadMusic()
  })

  let loadMusic = () => {
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
      <div className="text-format">
        <h1>Music</h1>
        {props.basicHeader === '' || props.basicHeader === undefined || props.basicHeader === null ? "": m.map(item => {
          return <li>{item.music_name}</li>;
        })}
        {props.basicHeader === '' || props.basicHeader === undefined || props.basicHeader === null ? <Link to={'/login'} >Login</Link> : ""}
      </div>
    );
  }
  
  export default Music;