import React from "react";
import styled from "styled-components";
import data from "../../Data";
import time from "../../Time";
import useGeoLocation from "../../useGeoLocation";



const Date = () => {
    const { location, error } = useGeoLocation();
    return (
        <DateBlock>
            <p>{location ? (
                <p>
                    Latitude: {location.latitude}, Longitude: {location.longitude}
                </p>
            ) : "Location date not available yet."}</p>
            <p>{time} PM, {data}</p>
        </DateBlock>
    )
}

export default Date;

const DateBlock = styled.div`
padding: 20px 0;
overflow: hidden;
word-wrap: break-word;
`;