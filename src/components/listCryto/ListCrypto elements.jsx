import styled from 'styled-components'

export const ContainerList = styled.table`
    margin: 20px auto;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    border-spacing: 0;
    align-items: center;
    border: 1px solid rgba(229, 231, 235, 1);
    border-radius: 10px 10px 0px 0px;
    thead{
        border-radius: 10px 10px 0px 0px;
        width: 100%;
        tr{
            background-color: #f5f5f5;
            border-radius: 10px 10px 0px 0px;
            color: rgba(107,114,128,1);
            width: 100%;
            display: flex;
            th{
                background-color: #f5f5f5;
                border-bottom-width: 1px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                padding: 5px 0;
                border-radius: 10px 10px 0px 0px;
                h3{
                    font-weight: 100;
                    color: rgba(107, 114, 128, 1);
                    text-align: center;
                }
            }
        }
    }
    tbody{
        background: #ffffffae;
        border-color: rgba(229, 231, 235, 1);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        tr{
            width: 100%;
            td{
                width: 150px;
                border-bottom: 1px solid #eee;
                color: rgba(107, 114, 128, 1);
                font-size: 0.875rem;
                line-height: 1.25rem;
                text-align: center;
                padding: 5px 0;
            }
        }
    }
    
`;

export const PrevButton = styled.button`
    position: fixed;
    bottom: 10px;
    left: 10%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border: 1px solid rgba(60, 60, 67, 0.9);
    cursor: pointer;
    transition: all 0.5s;
    pointer-events: auto;
    svg{
        fill: #585656;
    }
    :focus-visible {
        outline: none;
    }
    :active{
        transform: scale(0.8);
    }
`;

export const NextButton = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    border: 1px solid rgba(60, 60, 67, 0.9);
    cursor: pointer;
    transition: all 0.5s;
    pointer-events: auto;
    svg{
        fill: #585656;
    }
    :focus-visible {
        outline: none;
    }
    :active{
        transform: scale(0.8);
    }
`;
