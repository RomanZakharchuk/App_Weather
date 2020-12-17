import React from "react";
import styled from "styled-components";

const HumAndWind = (props) => {
    return (
        <Container>
            <p>{props.name}</p>
            <p>{props.numbers}</p>
        </Container>
    )
}

export default HumAndWind;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;