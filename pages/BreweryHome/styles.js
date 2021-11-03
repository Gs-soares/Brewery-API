import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  p {
    margin-left: 8.3rem;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: 2rem;
  background-color: black;
  color: white;

  h1 {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.8rem;
`;

export const DropDown = styled.select`
  width: fit-content;
  display: inline-block;
  margin-left: 0.3rem;
`;

const rotacao = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 10px solid gray;
    border-color: gray transparent gray transparent;
    animation: ${rotacao} 1.2s linear infinite;
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleButton = styled.div`
  padding: 1rem;

  button {
    background-color: white;
    border-radius: 3px;
    border: solid 1px gray;
    padding: 0.5rem;
    margin: 0rem 0.2rem;
  }
  button:focus {
    background-color: black;
    color: white;
  }
`;
