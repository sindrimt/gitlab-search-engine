import React, { useContext } from "react";
import { FiGitCommit } from "react-icons/fi";
import { AiOutlineIssuesClose, AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { InfoOuter } from "./InfoStyles";
import { ContextState } from "../../context/ContextState";
import Loading from "../Loading/Loading";

const Info = () => {
    const [repositoryInformation, setRepositoryInformation] = useContext(ContextState);

    const repoInformationTags = [
        {
            icon: <FiGitCommit className="icon" />,
            type: "commits",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.commits?.length, // Show loading
            iconColor: "red",
        },
        {
            icon: <AiOutlineFork className="icon" />,
            type: "forks",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.other?.forks_count, // Show loading,
            iconColor: "purple",
        },
        {
            icon: <AiOutlineIssuesClose className="icon" />,
            type: "total issues",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.issues?.length, // Show loading,
            iconColor: "green",
        },
        {
            icon: <AiOutlineStar className="icon" />,
            type: "stars",
            value: Object.keys(repositoryInformation).length === 0 ? <Loading /> : repositoryInformation?.other?.star_count, // Show loading,
            iconColor: "yellow",
        },
    ];

    return (
        <section className="section">
            <InfoOuter className="section-center">
                {repoInformationTags.map((item, index) => {
                    return <Item key={index} {...item}></Item>;
                })}
            </InfoOuter>
        </section>
    );
};

interface ItemI {
    icon: JSX.Element;
    type: string;
    value: number;
    iconColor: string;
}

const Item = ({ icon, type, value, iconColor }: ItemI) => {
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
