const fs = require('fs');
const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('create', 'Create a file')
  .example('$0 create -f foo.js', 'creates a file foo.js in files')
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', 'Create a file')
  .demandOption(['f'])
  .help('h')
  .alias('h', 'help').argv;
const fileListPath = "./file-list.txt";
const fileDirectory = "./files/";

if (fs.existsSync(fileDirectory + argv.file)) {
  console.log("File aleady exists. Enter a new file name.");
} else {
  fs.writeFile(fileDirectory + argv.file, "You are awesome", (error) => {
    if (error) console.log("Error occurred: ", error);
    else console.log(argv.file + " created");
  });

  fs.appendFile(fileListPath, argv.file + ", ", (error) => {
    if (error) console.log("Error occurred: ", error);
    else console.log(argv.file +  " added to file-list.txt");
  });
}
