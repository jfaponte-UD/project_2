const User = require('../../models/user');

exports.getUsers = function(req, res){
  User.find({}, (err, users) => {
    res.status(200).send(users);
  });
}

exports.createUser = function(req, res){
  let user = new User({name: req.body.name});

  user.save().then(() => {
    res.status(200).send(user);
  });
}

exports.makeReservation = function(req, res){
  User.findById(req.params.id, (err, user) => {
    if(err) res.status(500).send(err);
    user.makeReservation(req.body.bike_id, req.body.from, req.body.to).then(() => {
      res.status(200).send(user);
    });
  });
}