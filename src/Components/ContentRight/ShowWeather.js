import React from "react";
import styled from "styled-components";
import { cloudy_img, sunny_img, snow_img, blizzard_img } from "./../../image";

const ShowWeather = () => {
    return (
        <ImageWeather>
            <img src={cloudy_img} />
        </ImageWeather>
    )
}

export default ShowWeather;

const ImageWeather = styled.div`
border-radius: 10px;
max-height: 150px;
overflow: hidden;
`;