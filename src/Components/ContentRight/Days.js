import React from "react";
import styled from "styled-components";

const Days = (props) => {
    return (
        <DaysBlock href={props.href}>
            <p>{props.days}</p>
            <Img src={props.src} />
            <p>Humidity</p>
            <p>{props.humidity}</p>
        </DaysBlock>
    )
}

export default Days;

const DaysBlock = styled.a`
width: 125px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;
margin: 10px 0;
color: black;
border: 1px solid black;
`;

const Img = styled.img`
max-width: 75px;
max-height: 75px;
padding: 10px 0;
`;