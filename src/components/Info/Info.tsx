import { FiGitCommit } from "react-icons/fi";
import { AiOutlineIssuesClose, AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { InfoOuter } from "./InfoStyles";

/* interface UserInfoI {
    items: Array<{
        id: string;
        icon: HTMLElement;
        type: string;
        value: number;
        iconColor: string;
    }>;
} */

const Info = () => {
    const items = [
        {
            id: 1,
            icon: <FiGitCommit className="icon" />,
            type: "commits",
            value: 1,
            iconColor: "red",
        },
        {
            id: 2,
            icon: <AiOutlineIssuesClose className="icon" />,
            type: "issues",
            value: 2,
            iconColor: "green",
        },
        {
            id: 3,
            icon: <AiOutlineFork className="icon" />,
            type: "forks",
            value: 3,
            iconColor: "purple",
        },
        {
            id: 4,
            icon: <AiOutlineStar className="icon" />,
            type: "stars",
            value: 4,
            iconColor: "yellow",
        },
    ];

    return (
        <section className="section">
            <InfoOuter className="section-center">
                {items.map((item) => {
                    return <Item key={item.id} {...item}></Item>;
                })}
            </InfoOuter>
        </section>
    );
};

const Item = ({ icon, type, value, iconColor }: any) => {
    return (
        <article className="item">
            <span className={iconColor}>{icon}</span>
            <div>
                <h3>{value}</h3>
                <p>{type}</p>
            </div>
        </article>
    );
};

export default Info;
