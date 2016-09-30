var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  //default handler
  //res.send('respond with a resource');

  //load a users view instead
  //assign users to an array
  var userList = ['Harsh', 'Prashant', 'Mahesh', 'Jimmy'];

  //render title and user information to the user view
  res.render('users', {
    title: 'User List',
    users: userList});
});

module.exports = router;
