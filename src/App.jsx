import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import AlbumGrid from "./components/AlbumGrid";
import handleSubmit from "./handlesubmit";
import data from "./albums.json";


var key = "hlYVwXGnqOkyazkSiRrF"
var secret = "GZqvthebYAXTUCdzwOoULrpHnbVfCCYz"

function App() {

    const [response, setResponse] = useState();

    useEffect(() => {
        window
            .fetch("https://api.discogs.com/marketplace/stats/4664769")
            .then((res) => {
                res.json().then((json) => {
                    setResponse(json);
                });
            });
    }, []);

    

    return (
        <div className="App">
            <h1>Music Albums</h1>

            <AlbumGrid albums={data} />
            
        </div>
    );
}

export default App;
