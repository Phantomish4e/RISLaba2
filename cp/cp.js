import { fork } from 'node:child_process'
import { execArgv } from "node:process";
const spawnChildProcess = async (args) => {
    // Write your code here
    const controller = new AbortController()
    const child = fork('./cp/files/script.js',args ,{execArgv})
    child.on('error', (err) => {
        // This will be called with err being an AbortError if the controller aborts
      });
      controller.abort();
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['aafsdf', 'asdfasfd']);
