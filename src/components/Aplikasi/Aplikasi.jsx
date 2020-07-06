import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

// Style

function Aplikasi() {
    const { username } = useParams();

    const [data, setData] = useState({});

    // Async await
    const fetchDetail = useCallback(async () => {
        const url = await `https://api.giphy.com/v1/gifs/search?api_key=TCDFPU6TaQEiNmj0P02HwceGvITu5GZi&q=${username}&limit=25&offset=0&rating=g&lang=en`;
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(result);
    }, [username]);

    useEffect(() => {
        fetchDetail();
    }, [fetchDetail]);

    // Function

    return (
        <div>
            <div style={{ textAlign: "center" }}></div>
        </div>
    );
}

export default Aplikasi;
