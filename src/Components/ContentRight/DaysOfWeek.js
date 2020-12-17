import React from "react";
import { cloudy, sunny, snow, blizzard } from "./../../img";
import Days from "./Days";
import styled from 'styled-components';

const DaysOfWeek = () => {
    return (
        <Day >
            <Days href='/monday' days='Monday' src={cloudy} humidity='30%' />
            <Days href='/tuesday' days='Tuesday' src={sunny} humidity='36%' />
            <Days href='/wednesday' days='Wednesday' src={snow} humidity='20%' />
            <Days href='/thursday' days='Thursday' src={blizzard} humidity='15%' />
        </Day>
    )
}

export default DaysOfWeek;

const Day = styled.div`
display: flex;
justify-content: space-between;
`;