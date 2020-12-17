import React from "react";
import styled from "styled-components";
import DaysOfWeek from "./DaysOfWeek";
import TitleImg from "./TitleImg";


const ContentRight = () => {
    return (
        <Content>
            <TitleImg />
            <DaysOfWeek />
        </Content>
    )
}

export default ContentRight;

const Content = styled.div`
max-width: 600px;
overflow: hidden;
`;
