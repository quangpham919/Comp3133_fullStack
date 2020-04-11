const fs = require('fs');
const path = require('path');
const process = require('process');

currDir = process.cwd();
logDir = "logDirectory";

if(!fs.existsSync(currDir+"/"+logDir))
{
  fs.mkdirSync(currDir+'/'+logDir);
}

for (let x = 0 ; x < 10 ; x++)
{
  fs.writeFile(`${currDir}/${logDir}/log${x}.txt`, "This a text file for testing purpose",(err)=>{if(err){console.log(err);}})
}

fs.readdir(currDir+'/'+logDir,(err,files)=>{
    files.forEach(file =>{
        console.log(file);
    })
})