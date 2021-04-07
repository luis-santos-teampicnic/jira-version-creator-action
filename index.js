const core = require("@actions/core");
const github = require("@actions/github");

const JiraApi = require("jira-client");

try {
    const host = core.getInput("host");
    const username = core.getInput("username");
    const password = core.getInput("password");
    const project = core.getInput("project");
    const version = core.getInput("version");
    const released = core.getInput("released");

    const options = {
        protocol: "https",
        host: host,
        username: username,
        password: password,
        apiVersion: "2",
        strictSSL: true,
    };
    const jira = new JiraApi(options);

    const payload = {
        name: version,
        project: project,
        released: released,
    };

    jira
        .createVersion(payload)
        .then((_) => {
            console.log(`Version '${version}' created in Jira project '${project}' successfully!`);
        })
        .catch(function(err) {
            core.setFailed(err);
        });
} catch (error) {
    core.setFailed(error.message);
}