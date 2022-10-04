import styled from "styled-components";

export const Test = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: fit-content;
    //    padding: 10px 10px 10px 0px;
    background-color: white;
    position: absolute;
    top: 52px;
    z-index: 999;
    row-gap: 8px;
    border: 1px solid rgba(60, 60, 60, 0.1);
    border-top: none;

    div {
        background-color: white;
        // border-bottom: 1px solid rgba(60, 60, 60, 0.2);
        padding: 10px;
        &:hover {
            background-color: rgb(250, 250, 250);
            cursor: pointer;
        }
    }
`;

export const SearchOuter = styled.div`
    position: relative;
    display: grid;
    justify-content: center;
    width: 40%;
    gap: 1rem 1.75rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr;
        align-items: center;

        h3 {
            padding: 0 0.5rem;
        }
    }

    .form-control {
        background: var(--color-white);
        display: grid;
        align-items: center;
        justify-content: center;
        column-gap: 0.5rem;
        row-gap: 0.5rem;
        grid-template-columns: 1fr;
        padding: 0.5rem;
        width: 100%;
        border-radius: 5px;

        input {
            border-color: transparent;
            outline-color: var(--grey10);
            letter-spacing: var(--spacing);
            color: var(--color-grey3);
            padding: 0.25rem 0.5rem;
            text-align: center;

            &:focus {
                border: none;
                outline: none;
            }
        }

        button {
            border-radius: 5px;
            width: 50%;
            border-color: transparent;
            padding: 0.25rem 0.5rem;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            background: var(--color-p5);
            color: var(--color-white);
            transform: translate(50%, 0%);
            transition: var(--transition);

            &:hover {
                cursor: pointer;
                background: var(--color-p8);
                color: var(--color-p1);
            }
        }

        svg {
            color: var(--color-grey5);
        }

        input::placeholder {
            color: var(--color-grey3);
            text-transform: capitalize;
            letter-spacing: var(--spacing);
        }

        input,
        button,
        svg {
            font-size: 1.3rem;
        }

        @media (max-width: 800px) {
            button,
            input,
            svg {
                font-size: 0.85rem;
            }

            input {
                padding: 0.5rem;
            }
        }
    }
    h3 {
        margin-bottom: 0;
        color: var(--color-grey5);
        font-weight: 400;
    }
`;
