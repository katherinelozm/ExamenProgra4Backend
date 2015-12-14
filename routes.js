var studentsController = require('./controllers/giftsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Gifts')}}},
	{method: 'GET', path: '/v1/gifts', config: studentsController.getStudents},
  {method: 'POST', path: '/v1/gift', config: studentsController.createStudent},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
