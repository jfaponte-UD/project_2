const Reservation = require('../../models/reservation');
const User = require('../../models/user');
const Bike = require('../../models/bike');
const mongoose = require('mongoose');

describe('Testing users', function() {
  beforeEach(function() {
    const conection_db = 'mongodb://localhost/testdb';
    mongoose.connect(conection_db, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
    });
  })

  afterEach(function() {
    Reservation.deleteMany({}, function(err, sucess) {
      if (err) console.log(err);
      User.deleteMany({}, function(err, sucess) {
        if (err) console.log(err);
        Bike.deleteMany({}, function(err, sucess) {
          if (err) console.log(err);
          mongoose.connection.close();
        });
      });
    });
  })

  describe('User reservation', function() {
    it('should create a user with a reservation', function() {
      const user = new User({ name: 'Jorge' });
      user.save().then(() => {
        const bike = new Bike({ code: 1, color: 'red', model: 'mountain' });
        bike.save().then(() => {
          const today = new Date();
          const tomorrow = new Date();
          tomorrow.setDate(today.getDate() + 1);
          user.makeReservation(bike.code, today, tomorrow).then(() => {
            Reservation.find({}).populate('user').populate('bike').exec(function(err, reservations) {
              if (err) console.log(err);
              console.log(reservations[0]);
              expect(reservations[0].user.name).toBe(user.name);
              expect(reservations[0].bike.code).toBe(bike.code);
            });
          });
        });
      });
    });
  });
})