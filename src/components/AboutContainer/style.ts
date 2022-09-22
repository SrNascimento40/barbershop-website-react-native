import styled from "styled-components";

export const Title = styled.h3`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 50px;
    color: #0a0a0a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media only screen and (min-width: 768px) {
        padding-top: 40px;
        padding-bottom: 40px;
        font-weight: 600;
        font-size: 76px;
    }

    @media only screen and (max-width: 360px) {
        font-weight: 600;
        font-size: 38px;
    }
`


export const AboutView = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    box-sizing: border-box;
    align-items: center;
    gap: 60px;
`

export const ViewContainer = styled.div`
    box-sizing: border-box;
    padding: 5%;
`

export const TextAbout = styled.p`
    padding: 20px;
    font-size: 20px;
    font-weight: 200;
    color: #0a0a0a;
    font-family: system-ui;

    @media only screen and (min-width: 768px) {
        font-size: 30px;
    }

    @media only screen and (max-width: 360px) {
        font-size: 14px;
    }
`