import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
`;

export const Text = styled.h3`
    display: flex;
    align-self: flex-end;
    text-align: center;
    font-weight: bold;
    margin: 10px 0 5px 0;
    
    

`;

export const Date = styled.p`
    font-style: italic;
    text-align: center;
    margin: 0;
`;

export const TextWrapper = styled.div`
    position: absolute;
    bottom: 5px;
`;

export const Image = styled.img`
    border-radius: 14.1px 14.1px 0 0;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
`;

export const EventWrapper = styled.div`
    display: inline-block;
    margin: 30px;
    border: solid;
    border: 2px solid #ccc;
    border-radius: 16px;
    width: 400px;
    height: 500px;

    position: relative;
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

