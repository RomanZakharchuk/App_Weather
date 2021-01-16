import React from "react";
import Day from "./Day";
import styled from 'styled-components';
import serverData from "../../serverData";

const DaysOfWeek = () => {
    return (
        <Days >
            {serverData.map(item => <Day days={item.days} src={item.src} humidity={item.humidity} />)}
        </Days>
    )
}

export default DaysOfWeek;

const Days = styled.div`
display: flex;
justify-content: space-between;
`;