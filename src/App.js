import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token; //we get the access token

    if (_token) {
      setToken(_token);
      //next we are giving the access token to the spotify api
      spotify.setAccessToken(_token);
      //we get the user info
      spotify.getMe().then((user) => {
        console.log("User: ", user);
      });
    }

    console.log("I have a token ", token);
  }, []);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
      {/*Login with spotify button*/}
    </div>
  );
}

export default App;
