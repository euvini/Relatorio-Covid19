import styled from "styled-components";

export const Container = styled.div`
    
    .body{
        display: flex;
        flex-direction: row;
        height: 100vh;
    }

    h1 {
        margin-left: 24px;
        font-size: 24px;
    }

    span {
        margin-left: 24px;
        font-size: 14px;
    }
`;

export const Header = styled.header`
    height: 50px;
    background-color: #0B0528;
    color: #FFF;
    display: flex;
    align-items: center;
    flex-direction: row;

    img {
        padding-left: 40px;
        width: 10%;
    }
`;

export const Menu = styled.menu`
    width: 15%;
    height: 100%;
    background-color: #FFF;
    margin-top: 0;
`;


export const Button = styled.button`
    margin-top: 40px;
    background-color: #0B0528;
    color: #FFF;
    width: 60px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #FFF;
    transition: border-color 0.2s;
    cursor: pointer;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Content = styled.div`
    width: 800px;
    height: 242px;
    border-radius: 10px;
    background-color: #FFF;
    margin-left: 24px;
    margin-top: 18px;
    padding: 10px;

    div {
        display: flex;
        flex-direction: row;
        
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .date {
        margin-left: 50px;
    }
    label {
        font-size: 14px;
        
    }

    select {
        border: 1px solid #ECECEC;
        box-sizing: border-box;
        border-radius: 10px;
        width: 200px;
        height: 30px;
        padding-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    input {
        border: 1px solid #ECECEC;
        box-sizing: border-box;
        border-radius: 10px;
        width: 200px;
        height: 30px;
        padding-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    button {
        margin-top: 40px;
        background-color: #0B0528;
        color: #FFF;
        height: 30px;
        border-radius: 10px;
        border: 1px solid #FFF;
        transition: border-color 0.2s;
        cursor: pointer;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
`;

export const Cards = styled.div`
    width: 800px;
    height: 242px;
    border-radius: 10px;
    background-color: #FFF;
    margin-left: 24px;
    margin-top: 18px;
    padding: 10px;
`;
