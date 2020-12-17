import React from "react";
import styled from "styled-components";
import Date from "./Date";
import Humidity from "./Humidity";
import Today from "./Today";
import YourCity from "./YourCity";

const ContentLeft = () => {
    return (
        <Content>
            <YourCity />
            <Date />
            <Today />
            <Humidity />
        </Content>
    )
}

export default ContentLeft;

const Content = styled.div`
width: 200px;
display: flex;
flex-direction: column;
`;