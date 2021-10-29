import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    
    a{
        margin-left: 12rem; 
        font-weight: 600;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Detail = styled.div`
    margin-top: 1rem;
    width: 75%;
    min-height: 40vh;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem;

    h1{
        margin-top: 0;
        margin-bottom: 0.8rem;
        font-weight: 600;
    }
    p{
        margin: 0;
        font-size: 13px;
        font-weight: 600;
    }
`