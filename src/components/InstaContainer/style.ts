import styled from "styled-components";

export const Title = styled.h3`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
    font-weight: 600;
    font-size: 50px;
    color: #ffbc00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media only screen and (min-width: 768px) {
        padding-top: 40px;
        padding-bottom: 60px;
        font-weight: 600;
        font-size: 76px;
    }

    @media only screen and (max-width: 360px) {
        padding-top: 15px;
        padding-bottom: 30px;
        font-weight: 600;
        font-size: 38px;
    }
`
export const PhotosLine = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;
`

export const Photo = styled.img`
    max-width:425px;
    max-height:425px;
    border-style: solid;
    border-color: #ffbc00;
    border-width:2px;

    &:hover {
        opacity: 0.5;
        transition: 0.18s ease-in;
        box-shadow: 0 0 15px #ffbc00;
    }
`
export const ColorHover = styled.div`
    &:hover {
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    margin: 0;
    padding: 0;
    }
`