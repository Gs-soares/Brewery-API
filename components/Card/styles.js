import styled from "styled-components";

export const Container = styled.div`
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h1 {
    margin: 0;
    font-weight: 200;
    font-size: 25px;
    font-family: "david-libre";
    padding: 1rem;
  }
`;

export const CardContent = styled.div`
  padding: 0rem 1rem;
  font-size: 14px;
  font-family: "david-libre";
  font-weight: 100;
`;

export const Line = styled.div`
  width: 100%;
  background-color: #d8d8d8;
  height: 1px;
`;

export const Top = styled.div`
  height: 31vh;
`;

export const Bottom = styled.div``;

export const TypeCard = styled.div`
  padding: 0.5rem 1rem;

  div {
    background-color: blueviolet;
    width: fit-content;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 600;
  }
`;
