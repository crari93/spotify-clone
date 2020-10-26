import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token; //we get the access token

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //next we are giving the access token to the spotify api
      spotify.setAccessToken(_token);
      //we get the user info
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
