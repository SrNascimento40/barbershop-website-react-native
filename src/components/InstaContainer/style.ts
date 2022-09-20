import styled from "styled-components";

export const Title = styled.h3`
    padding-top: 40px;
    padding-bottom: 60px;
    font-weight: 600;
    font-size: 76px;
    color: #ffbc00;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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