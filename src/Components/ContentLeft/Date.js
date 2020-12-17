import React from "react";
import styled from "styled-components";

const Date = () => {
    return (
        <DateBlock>
            <p>5:05 PM, Mon, Nov 23, 2020</p>
        </DateBlock>
    )
}

export default Date;

const DateBlock = styled.div`
padding: 20px 0;
`;