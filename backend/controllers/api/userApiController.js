const User = require('../../models/user');

exports.getUsers = function (req, res) {
    User.find({}, (err, users) => {
        res.status(200).send(users);
    });
}

exports.createUser = function (req, res) {
    let user = new User({name: req.body.name});

    user.save().then(() => {
        res.status(200).send(user);
    });
}

exports.makeReservation = function (req, res) {
    console.log('asdsaddasdsadas');

    User.findById(req.params.id, (err, user) => {

        console.log(user)

        if (err) {
            return res.status(500).send(err);
        }

        if (!user) {
            return res.status(404).send('User not found');
        }

        user.userMakeReservation(req.body.bike_id, req.body.from, req.body.until)
            .then((reservation) => {
                res.status(200).send(reservation);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    });
};


