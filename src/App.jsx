import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import AlbumGrid from "./components/AlbumGrid";
import handleSubmit from "./handlesubmit";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase_setup";


var key = "hlYVwXGnqOkyazkSiRrF"
var secret = "GZqvthebYAXTUCdzwOoULrpHnbVfCCYz"

function App() {

    const titleRef = useRef();
    const artistRef = useRef();
    const idRef = useRef();

    const [response, setResponse] = useState();
    const [data, setData] = useState([]);


    /*
    Submits the album information to be stored in the firestore albums collection
    */
    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(titleRef.current.value, artistRef.current.value, idRef.current.value);
        titleRef.current.value = "";
        artistRef.current.value = "";
        idRef.current.value = "";
    }


    /*
    Fetches data from the firestore albums collection

    TODO: Figure out how to refresh page when a new entry is added as albums don't display until refresh

    */
    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firestore, "albums"));
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setData(newData);
        }
        fetchData();
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
