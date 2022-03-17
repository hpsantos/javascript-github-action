const core = require("@actions/core");
const github = require("@actions/github");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const pull_request = github.context.payload.pull_request;
  const prNumber = github.context.payload.pull_request.number;
  const title = github.context.payload.pull_request.title;
  console.log(`Pull request data: PR-${prNumber}: ${title}`);
  console.log(`Event context: ${JSON.stringify(github.context, undefined, 2)}`);
} catch (error) {
  core.setFailed(error.message);
}
