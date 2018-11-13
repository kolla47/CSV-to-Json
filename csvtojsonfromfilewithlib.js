const csvToJson = require('csvtojson/v2');
const fs = require('fs');
const path = require('path');

const pathToCsvFile = './customer-data.csv';

csvToJson().fromFile(pathToCsvFile).then((jsonObj)=>{
    fs.writeFile(path.join(__dirname, './customer-data.json'), JSON.stringify(jsonObj), (error)=>{
        if(error){
            console.log(error.message);
        }
        console.log('Data convertion from CSV to JSON finished successfully!');
    })
});
