import styled from "styled-components";

export const LoadingAnimation = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--color-grey8);
    outline: 1px solid transparent;
    animation: pulseanim 0.7s ease-in-out infinite;

    @keyframes pulseanim {
        0% {
            transform: scale(0);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
