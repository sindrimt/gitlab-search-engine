/* interface SearchI {
    searchTerm?: string | number;
} */

export const getRepositoryInformation = (searchTerm: number) => {
    let repositoryObj: any = {};
    return new Promise((resolve, reject) => {
        fetch(`https://gitlab.stud.idi.ntnu.no/api/v4/projects/${searchTerm}/repository/commits?access_token=glpat-FF2rY-Gy-Pjzwqsh4467`)
            .then((response) => response.json())
            .then((data) => (repositoryObj["commits"] = data))
            .then(() => {
                return fetch(`https://gitlab.stud.idi.ntnu.no/api/v4/projects/${searchTerm}/?access_token=glpat-FF2rY-Gy-Pjzwqsh4467`);
            })
            .then((response) => response.json())
            .then((data) => (repositoryObj["other"] = data))
            .then(() => {
                return fetch(`https://gitlab.stud.idi.ntnu.no/api/v4/projects/${searchTerm}/issues?access_token=glpat-FF2rY-Gy-Pjzwqsh4467`);
            })
            .then((response) => response.json())
            .then((data) => (repositoryObj["issues"] = data))
            .then(() => {
                resolve(repositoryObj);
            })
            .catch(() => {
                reject("Error with api call");
            });
    });
};
