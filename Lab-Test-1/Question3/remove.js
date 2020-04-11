const fs = require('fs');
const path = require('path');
const process = require('process');

currDir = process.cwd();

fs.readdir(currDir+'/logDirectory', (err,files)=>{
  
  files.forEach(file =>{
 
    if (file.includes('.txt'))
      {
        console.log('Deleting...', file);
        fs.unlink(currDir+'/logDirectory/'+file,(err)=>{
          if (err) 
            {console.log(err);}
        });
      }  
  })
  fs.rmdir(currDir+'/'+'logDirectory',(err)=>{if(err){console.log(err);}});
  if (err) { console.log(err);}
})

