import React, { useEffect, useState } from "react";
import "./App.css";
import AlbumGrid from "./components/AlbumGrid";
import data from "./albums.json";

var key = "hlYVwXGnqOkyazkSiRrF"
var secret = "GZqvthebYAXTUCdzwOoULrpHnbVfCCYz"

function App() {

    
    return (
        <div className="App">
            <h1>Music Albums</h1>

            <AlbumGrid albums={data} />
            
            
        </div>
    );
}

export default App;
