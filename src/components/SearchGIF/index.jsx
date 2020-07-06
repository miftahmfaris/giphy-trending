import React, { useState } from "react";
import styled from "styled-components";
import ListGIF from "../ListGIF";

const Form = styled.form`
    text-align: center;

    & input {
        font-size: 15px;
        padding: 5px;
    }
`;

const Title = styled.h2`
    font-family: monospace;
    text-align: center;
`;
export default function SearchGIF() {
    const [search, setSearch] = useState({ text: "" });
    const handleChange = (event) => {
        const value = event.target.value;

        setSearch((prevState) => {
            return {
                ...prevState,
                text: value,
            };
        });
    };

    return (
        <div>
            <div style={{ margin: "20px 0" }}>
                <Form>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleChange}
                        value={search.text}
                    />
                </Form>
            </div>
            {search.text === "" ? <Title>Trending GIF</Title> : null}
            <ListGIF text={search.text} />
        </div>
    );
}
