import styled from "styled-components";

export const Title = styled.h3`
    text-align: center;
    padding-top: 80px;
    padding-bottom: 100px;
    font-weight: 600;
    font-size: 50px;
    color: #ffbc00;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media only screen and (min-width: 768px) {
        padding-top:60px;
        padding-bottom: 64px;
        font-weight: 600;
        font-size: 60px;
    }

    @media only screen and (max-width: 360px) {
        padding-top:60px;
        padding-bottom: 64px;
        font-size: 38px;
    }
`

export const TextHover = styled.p`
    color: #272727;
    font-weight: 700;
    font-size: 14px;

    &:hover {
        font-size: 18px;
        color: #fff;
    }
`

export const A = styled.a`
    &:hover {
        box-shadow: 0 0 25px #ffbc00;
        border-radius: 30%;
        ${TextHover} {
        font-size: 18px;
        color: #fff;
    }
    }
`
