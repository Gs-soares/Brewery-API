import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`

export const Voltar = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 0.3rem;
    span{
        font-weight: 600;
        margin-left: 0.5rem;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Detail = styled.div`
    margin-top: 0.5rem;
    width: 80%;
    min-height: 30vh;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem;

    h1{
        margin-top: 0;
        margin-bottom: 0.8rem;
        font-weight: 600;
    }
    p{
        margin: 0;
        font-size: 14px;
        font-weight: 400;
    }
    span{
        color: #0064FF;
    }
`