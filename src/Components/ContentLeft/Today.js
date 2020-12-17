import React from "react";
import styled from "styled-components";
import { cloudy, sunny, snow, blizzard } from "./../../img";

const Today = () => {
    return (
        <TodayMain>
            <MainInside>
                <Img src={cloudy} />
                <TextDegree>
                    <P>72</P>
                    <p>&#8457;</p>
                </TextDegree>
            </MainInside>
            <div>
                <PCloudy>Cloudy</PCloudy>
            </div>
        </TodayMain>
    )
}

export default Today;

const TodayMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const MainInside = styled.div`
display: flex;
align-items: center;
`;

const TextDegree = styled.div`
display: flex;
`;

const Img = styled.img`
max-width: 125px;
max-height: 125px;
`;

const P = styled.p`
font-size: 32px;
font-weight: bold;
`;

const PCloudy = styled.p`
font-size: 32px;
font-weight: bold;
padding: 0 0 20px 0;
`;