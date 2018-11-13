const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './customer-data.csv'), function(error, data){
	if(error){
		console.log(error.message);
	}else{
		let toObject= {};
		let counter = 0;
		let objarr = [];
		let csvdata = data.toString().split('\r\n');
		let headerArray = csvdata[0].split(',');

		for(let index=1; index<csvdata.length; index++){

			let dataarr = csvdata[index].split(',');

			for(let index=0; index<dataarr.length; index++){

				toObject[headerArray[index]] = dataarr[index];
				counter++;

				if(index === dataarr.length - 1 && Object.keys(toObject).length === headerArray.length){
					objarr.push(toObject);
					counter = 0;
					toObject = {};
				}
			}
		}
		fs.writeFile(path.join(__dirname, './customer-data.json'), JSON.stringify(objarr), function(error){
			if(error){
				console.log(error.message);
			}
			console.log('Data converted from CSV to JSON successfully!');
		})
	}
});
