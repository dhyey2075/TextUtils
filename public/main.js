const http = require('https');

const options = {
	method: 'POST',
	hostname: 'ginger4.p.rapidapi.com',
	port: null,
	path: '/correction?lang=US&generateRecommendations=false&flagInfomralLanguage=true',
	headers: {
		'content-type': 'text/plain',
		'Content-Type': 'text/plain',
		'Accept-Encoding': 'identity',
		'X-RapidAPI-Key': 'a69d3154dbmshf3f21bbe9384c04p1d7031jsn9ff9cc71c3cb',
		'X-RapidAPI-Host': 'ginger4.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write('"Type your text here"');
req.end();