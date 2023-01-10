import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { getTokenFromUrl } from './Spotify/spotify'
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import {useDataLayerValue} from "./DataLayer"

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">{token ? <h1>Logged in</h1>: <Login />}</div>
  )
}

export default App
