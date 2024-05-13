const mongoose = require('mongoose');
const Reservation = require('./reservation');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String
});

userSchema.methods.userMakeReservation = function (bikeId, from, until) {
    const objectIdBikeId = mongoose.Types.ObjectId(bikeId);
    const reservation = new Reservation({ from, until, bike: objectIdBikeId, user: this._id });
    return reservation.save();
};

module.exports = mongoose.model('User', userSchema);
