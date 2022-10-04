/* interface SearchI  {
    searchTerm?: string | number;
} */

export const getRepositoryInformation = (searchTerm: number | string) => {
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
                /* console.log("New Object =======");
                console.log(repositoryObj); */
            })
            .catch(() => {
                reject("Error with api call");
            });
    });
};

export const proccessCommitDataFromApi = (data: any, groupId: number) => {
    const members: any = [];

    return new Promise((resolve, reject) => {
        // Get information from the Gitlab api for how many members there are in the project
        fetch(`https://gitlab.stud.idi.ntnu.no/api/v4/projects/${groupId}/members/all?access_token=glpat-FF2rY-Gy-Pjzwqsh4467`)
            .then((response) => response.json())
            // Then add them to an array and store them as an object with name and commitCount
            .then((data) =>
                data?.map((item: any) => {
                    members.push({ name: item.name, commitCount: 0 });
                })
            )
            // We loop through each member in the group, and for each commit - check if the name is in the commit
            //if it is, increment the commitCount
            .then(() => {
                members.map((member: any) => {
                    data?.commits?.map((commit: any) => {
                        if (commit.author_name === member.name) {
                            member.commitCount++;
                        }
                    });
                });

                // At last, resolve the members array with updated commitCount :)
                resolve(members);
                console.log("New Object =======");
                console.log(members);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
