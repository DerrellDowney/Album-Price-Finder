import React, {useEffect, useState} from "react";
import './Album.css'


const Album = ({ id, title, artist }) => {

    const [response, setResponse] = useState();

    useEffect(() => {
        window
            .fetch(`https://api.discogs.com/marketplace/stats/${id}`)
            .then((res) => {
                res.json().then((json) => {
                    setResponse(json);
                });
            });
    }, []);
    

    return (
        <div className="album">
            <h2>{title}</h2>
            <p>{artist}</p>
            {response&&response.lowest_price.value}
            
       
           
            
        </div>
    );
};

export default Album;
