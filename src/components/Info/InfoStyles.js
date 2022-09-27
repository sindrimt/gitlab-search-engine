import styled from "styled-components";

export const InfoOuter = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem 2rem;

    @media (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }

    .item {
        background: var(--color-white);
        border-radius: var(--radius);
        padding: 1rem 2rem;
        grid-template-columns: auto 1fr;
        align-items: center;
        display: grid;
        column-gap: 3rem;

        span {
            width: 3rem;
            place-items: center;
            display: grid;
            height: 3rem;
            border-radius: 50%;
        }

        .icon {
            font-size: 1.5rem;
        }

        h3 {
            margin-bottom: 0;
            letter-spacing: 0;
        }

        p {
            margin-bottom: 0;
            text-transform: capitalize;
        }

        .red {
            color: #da4a91;
            background: #ffe0f0;
        }

        .green {
            color: var(--color-p5);
            background: var(--color-p10);
        }

        .purple {
            color: #5d55fa;
            background: #e6e6ff;
        }

        .yellow {
            color: #f0b429;
            background: #fffbea;
        }
    }
`;
