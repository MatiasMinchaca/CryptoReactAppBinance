import styled from 'styled-components';

export const ContainerHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(60, 60, 67, 0.9);
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0 5%;
    background: #ffffff97;
    transition: all 0.5s;
    z-index: 999;
    input{
        border: 1px solid rgba(60, 60, 67, 0.9);
        height: 35px;
        border-radius: 10px;
        width: 300px;
        padding-left: 10px;
        transition: all 0.5s;
        :focus-visible{
            outline: none;
        }
    }
    a{
        color: rgba(60, 60, 67, 0.9);
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;
        opacity: 1;
        :active{
        transform: scale(0.8);
        }
    }
    .opacity{
        opacity: 0;
    }
`;

export const Block = styled.div`
    width: 100%;
    height: 60px;

`;