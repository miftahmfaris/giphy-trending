import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const CardList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const Card = styled.div`
    width: 200px;
    margin: 0 10px;
    & img {
        width: 100%;
    }
`;

const Notification = styled.h2`
    font-family: monospace;
    text-align: center;
`;

export default function ListGIF(props) {
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const url =
            props.text !== ""
                ? `https://api.giphy.com/v1/stickers/search?api_key=loiUj4j9gaeC74djzbdCUiCA7eKXIxZk&q=${props.text}&limit=25&offset=0&rating=g&lang=en`
                : "https://api.giphy.com/v1/gifs/trending?api_key=loiUj4j9gaeC74djzbdCUiCA7eKXIxZk&limit=10&rating=g";
        const getData = await fetch(url);
        const result = await getData.json();

        setData(result.data);
    }, [props.text]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>
            {data.length === 0 ? (
                <Notification>Data is not found</Notification>
            ) : (
                <CardList>
                    {data.map((item) => {
                        return (
                            <Card key={item.id}>
                                <img src={item.images.original.url} alt="gif" />
                            </Card>
                        );
                    })}
                </CardList>
            )}
        </div>
    );
}
