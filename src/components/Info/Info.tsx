import React, { useContext } from "react";
import { FiGitCommit } from "react-icons/fi";
import { AiOutlineIssuesClose, AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { InfoOuter } from "./InfoStyles";
import { ContextState } from "../../context/ContextState";
import Loading from "../Loading/Loading";

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
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);

    const items = [
        {
            id: 1,
            icon: <FiGitCommit className="icon" />,
            type: "commits",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.commits?.length, // Show loading
            iconColor: "red",
        },
        {
            id: 2,
            icon: <AiOutlineIssuesClose className="icon" />,
            type: "total issues",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.issues?.length, // Show loading,
            iconColor: "green",
        },
        {
            id: 3,
            icon: <AiOutlineFork className="icon" />,
            type: "forks",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.other?.forks_count, // Show loading,
            iconColor: "purple",
        },
        {
            id: 4,
            icon: <AiOutlineStar className="icon" />,
            type: "stars",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.other?.star_count, // Show loading,
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
