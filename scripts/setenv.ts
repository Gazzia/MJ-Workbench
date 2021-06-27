const { writeFile } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

const isProduction = argv.environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   apiKey: "${process.env.apiKey}",
   email: "${process.env.email}"
};
`;
writeFile(targetPath, environmentFileContent,  (err: any) => {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});
