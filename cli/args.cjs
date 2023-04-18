const parseArgs = () => {
    // Write your code here 
    const args = require('yargs').argv;
    console.log('Name: ' + args.name);
    console.log('Age: ' + args.age);
};

parseArgs();