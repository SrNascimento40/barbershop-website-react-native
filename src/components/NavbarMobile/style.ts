import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow: hidden;
  backdrop-filter: blur(4px);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  align-items: center;
  justify-content: center;

  background: rgb(255,188,0);
  background: linear-gradient(0deg, rgba(255,188,0,0.8) 0%, rgba(39,39,39,0.82) 20%, rgba(39,39,39,0.7) 80%, rgba(255,188,0,0.7) 100%);  
  
  nav {
    display: flex;
    width: 100%;
    height: 100vh;    
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    transform: scale(0.7);
    transition: .7s;
  }
`

export const OptionsMobile = styled.li`
    color: #fff;
    align-items: center;
    padding: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 48px;
    font-weight: '600';

    &:hover {
        color: rgb(255, 188, 0);
        font-size: 62px;
    }
`