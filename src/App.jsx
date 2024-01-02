import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import AlbumGrid from "./components/AlbumGrid";
import handleSubmit from "./handlesubmit";
import data from "./albums.json";


var key = "hlYVwXGnqOkyazkSiRrF"
var secret = "GZqvthebYAXTUCdzwOoULrpHnbVfCCYz"

function App() {

    const titleRef = useRef();
    const artistRef = useRef();
    const idRef = useRef();

    const [response, setResponse] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(titleRef.current.value, artistRef.current.value, idRef.current.value);
        titleRef.current.value = "";
        artistRef.current.value = "";
        idRef.current.value = "";
    }

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

            <form onSubmit={submitHandler}>
                <input type="text" ref={titleRef} placeholder="Title" />
                <input type="text" ref={artistRef} placeholder="Artist" />
                <input type="text" ref={idRef} placeholder="ID" />
                <button type="submit">Save</button>
            </form>

            <AlbumGrid albums={data} />

            
            
        </div>
    );
}

export default App;
