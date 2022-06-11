import {useEffect, useState} from 'react';
import '../css/general_styles.css'
import { Link } from "react-router-dom";

function Playlists(props) {

  const [pl, setPl] = useState([])
  const [playlistNameText, setPlaylistNameText] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    loadPlayLists()
  });

  let loadPlayLists = () => {
    fetch('http://127.0.0.1:5000/playlist', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => setPl(data));
      let p = "Playlist King"
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      console.log(p);
      return pl;
  }

  function createPlaylist() {
    fetch('http://127.0.0.1:5000/playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${props.basicHeader}`
      },
      body: JSON.stringify({
        playlist_name: playlistNameText,
        is_private: isPrivate
      })      
    }).then(response => response.json())
    .then(data => setPl(...pl, data));
  }

  return (
      <div className="text-format">
        <h1>Playlists</h1>
        {props.basicHeader === '' || props.basicHeader === undefined || props.basicHeader === null ? "": pl.map(item => {
          return <li>{item.playlist_name}</li>;
        })}
        {props.basicHeader === '' || props.basicHeader === undefined || props.basicHeader === null ? <Link to={'/login'} >Login</Link> : ""}
        {props.basicHeader === '' || props.basicHeader === undefined || props.basicHeader === null ? "" : (<><form autoComplete='off'>
        <p>Playlist name</p>
        <input onChange={event => setPlaylistNameText(event.target.value)} id="user_name_textbox" />
        <p>Is Private</p>
        <input type="checkbox" defaultChecked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />
      </form><button id="submit_user_btn" onClick={() => createPlaylist()}>Create playlist</button></>)}
      </div>
    );
  }
  
  export default Playlists;