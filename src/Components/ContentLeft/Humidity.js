import React from "react";
import styled from "styled-components";
import HumAndWind from "./HumAndWind";

const Humidity = () => {
    return (
        <MainBox>
            <HumAndWind name='Humidity' numbers='45%' />
            <HumAndWind name='Wind speed' numbers='19.2 km/j' />
        </MainBox>
    )
}

export default Humidity;

const MainBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;