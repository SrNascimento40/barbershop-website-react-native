import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(35deg, rgba(39, 39, 39, 0.6) 0%, rgba(168, 124, 0, 0.5494572829131652) 50%, rgba(39, 39, 39, 0.5) 100%);
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  > Image {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }
`