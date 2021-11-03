import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 96%;
  height: 20vh;
  margin: 0 auto;
  background: rgb(1, 0, 23);
  background: linear-gradient(
    90deg,
    rgba(1, 0, 23, 1) 0%,
    rgba(80, 80, 80, 1) 100%
  );
`;

export const TitleNavbar = styled.div`
  padding: 1.5rem 0rem;
  width: 79%;
  color: white;
  margin: 0 auto;

  h1 {
    margin: 0;
    font-weight: 400;
  }
  h3 {
    margin: 0;
    font-weight: 100;
  }
`;
