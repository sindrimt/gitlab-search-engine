import styled from "styled-components";

export const SearchOuter = styled.div`
    position: relative;
    display: grid;
    gap: 1rem 1.75rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr max-content;
        align-items: center;

        h3 {
            padding: 0 0.5rem;
        }
    }
    .form-control {
        background: var(--color-white);
        display: grid;
        align-items: center;
        grid-template-columns: auto 1fr auto;
        column-gap: 0.5rem;
        border-radius: 5px;
        padding: 0.5rem;

        input {
            border-color: transparent;
            outline-color: var(--grey10);
            letter-spacing: var(--spacing);
            color: var(--color-grey3);
            padding: 0.25rem 0.5rem;

            &:focus {
                border: none;
                outline: none;
            }
        }

        input::placeholder {
            color: var(--color-grey3);
            text-transform: capitalize;
            letter-spacing: var(--spacing);
        }

        button {
            border-radius: 5px;
            border-color: transparent;
            padding: 0.25rem 0.5rem;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            background: var(--color-p5);
            color: var(--color-white);
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
