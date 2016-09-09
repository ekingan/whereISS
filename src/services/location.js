var https = require('https');
var http = require('http');


function getData(id, url) {

	var request = https.get(url + id, function(res) {
		console.log(res.statusCode);	
		var body = '';
		res.on('data', function (chunk) {
			body += chunk;
		});

		function printError(error){
			console.error(error.message);
		}

		res.on('end', function () {
			if (res.statusCode === 200) {
				try { 
					//Parse Data
					var satellite = JSON.parse(body);
					//Print Data
					console.log(satellite.name, satellite.latitude, satellite.longitude);
				} catch(error) {
					//Parse error
					printError(error);
				}
			} else {
				//status code error 
				printError({message: "there was an error getting the satellite location, status code: " + http.STATUS_CODES[res.statusCode] });
			}
		});
	});


	//connection error
	request.on("error", function(error) {
	 console.error(error.message);
	});

};
	module.exports.getData = getData;
