const mongoose = require('mongoose')
const Reservation = require('./reservation')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String
})

userSchema.methods.makeReservation = function(bikeId, from, until, cb) {
  const reservation = new Reservation({ from, until, bike: bikeId, user: this._id })
  reservation.save(cb)
}

module.exports = mongoose.model('User', userSchema)