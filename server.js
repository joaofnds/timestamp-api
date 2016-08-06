var express = require('express');
var app = express();

var moment = require('moment');

app.get('/:date', function (req, res) {
	var inputDate = (moment(req.params.date).isValid()) ? moment(req.params.date) : moment(req.params.date, 'X');
	if(inputDate.isValid()) {
		res.json({
			unix: inputDate.format('X'),
			natural: inputDate.format('MMMM DD, YYYY')
		});
	} else {
		res.json(null);
	}
});

app.listen(8080, function () {
	console.log('Example listening on port 8080!');
});
