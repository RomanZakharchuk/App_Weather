import React from "react";
import styled from "styled-components";

const YourCity = () => {
    return (
        <div>
            <label> Your city:
            <Input type="text" value="Lviv" />
            </label>
        </div>
    )
}

export default YourCity;

const Input = styled.input`
width: 100px;
`;