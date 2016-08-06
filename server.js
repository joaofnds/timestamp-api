var express = require('express');
var app = express();

var moment = require('moment');

var port = process.env.PORT || 3000;

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

app.listen(port, function () {
	console.log('Listening on port', port);
});
