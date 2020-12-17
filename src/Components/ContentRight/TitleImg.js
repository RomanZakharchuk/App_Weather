import React from "react";
import styled from "styled-components";
import ShowWeather from "./ShowWeather";


const TitleImg = () => {
    return (
        <div>
            <Text>Temperature</Text>
            <ShowWeather />
        </div>
    )
}

export default TitleImg;

const Text = styled.p`
font-size: 23px;
margin-bottom: 10px;
`;