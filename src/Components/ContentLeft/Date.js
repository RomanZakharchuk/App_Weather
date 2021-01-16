import React from "react";
import styled from "styled-components";
import data from "../../Data";
import time from "../../Time";



const Date = () => {
    return (
        <DateBlock>
            <p>{time} PM, {data}</p>
        </DateBlock>
    )
}

export default Date;

const DateBlock = styled.div`
padding: 20px 0;
`;