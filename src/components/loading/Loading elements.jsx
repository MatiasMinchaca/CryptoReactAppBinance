import styled from'styled-components';

export const ContainerLoading = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50%;
    font-size: 40px;
    font-weight: bold;
    svg{
        fill: #1a1a19d1;
        animation: rotation 1s infinite ;
        @keyframes rotation {
            25% { transform: rotate(45deg) }
            50% { transform: rotate(90deg) }
            75% { transform: rotate(135deg) }
            100% { transform: rotate(180deg) }
        }
    }

`;