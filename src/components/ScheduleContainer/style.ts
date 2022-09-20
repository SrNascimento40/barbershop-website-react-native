import styled from "styled-components";

export const TextHover = styled.text`
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
