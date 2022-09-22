import styled from "styled-components";

export const Title = styled.h3`
    align-self: flex-start;
    text-align: center;
    align-self: center;
    font-weight: 800;
    font-size: 50px;
    color: #ffbc00;
    text-shadow: 1px 1px 2px red, 0 2px 15px #000, 0 0 10px #000;
    font-family: Roboto;

    @media only screen and (min-width: 768px) {
        font-weight: 800;
        font-size: 76px;
    }

    @media only screen and (max-width: 360px) {
        font-weight: 600;
        font-size: 38px;
    }
`
export const Container = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    justify-content: center;
    border-style: solid;
    display: flex;
    flex-direction: column;
    border-color: #000;
    background-position-x: center;
    border-width: 2px;
    height: 450px;
    padding: 3.5em;
    gap: 10rem;
    border-style: solid;
    border-color: #000;
    border-width: 2px;
`

export const TextHover = styled.p`
    color: #010101;
    font-weight: 700;
    font-size: 14px;
`

export const A = styled.a`
    align-self: center;
    justify-self: center;
    &:hover {
        box-shadow: 0 0 25px #ffbc00;
        border-radius: 30%;
        ${TextHover} {
        font-size: 18px;
        color: #000;
    }
    }
`
