import React, { useEffect, useState } from "react";
import "./Album.css";

const token = "UsyFtBgphAgtqvVhiveUcxHNCpidstoWHGhDHDCy";

const Album = ({ id, title, artist }) => {
    //* Grabbing the price of the album

    const [priceResponse, setPriceResponse] = useState();
    const [idResponse, setIdResponse] = useState();

    

    useEffect(() => {
        window
            .fetch(
                `https://api.discogs.com/database/search?release_title=${encodeURIComponent(title)}&type=master`,
                {
                    method: "GET",
                    headers: {
                        Authorization: "Discogs token=" + token,
                    },
                }
            )
            .then((idRes) => {
                idRes.json().then((json) => {
                    setIdResponse(json);
                    console.log(json);

                    const resultId = json.results.find((result) => result.country === "US")?.id;
                    console.log(title + " - " +id)
        
                    // Now that idResponse has been set, make the second fetch request
                    // const resultId = json.results?.[0]?.id;
                    if (resultId) {
                        window
                            .fetch(
                                `https://api.discogs.com/marketplace/stats/${resultId}`,
                                {
                                    method: "GET",
                                    headers: {
                                        Authorization: "Discogs token=" + token,
                                    },
                                }
                            )
                            .then((priceRes) => {
                                priceRes.json().then((json) => {
                                    setPriceResponse(json);
                                    console.log(json);
                                });
                            });
                    }
                });
            });
    }, []);

    return (
        <div className="album">
            <h2>{title}</h2>
            <p>{artist}</p>
            ${priceResponse?.lowest_price?.value ?? 'N/A'}
        </div>
    );
};

export default Album;
