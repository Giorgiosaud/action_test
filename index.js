const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  core.setOutput("time2", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  const context = JSON.stringify(github.context, undefined, 2)
  console.log(`The event payload: ${payload}`);
  console.log(`The github context: ${context}`);
  console.log(`The github environment: ${JSON.stringify(process.env)}`);

} catch (error) {
  core.setFailed(error.message);
}