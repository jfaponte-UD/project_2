const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const reservationSchema = new Schema({
  from: Date,
  until: Date,
  bike: { type: Schema.Types.ObjectId, ref: 'Bike' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

reservationSchema.methods.duration = function() {
  return moment(this.until).diff(moment(this.from), 'days') + 1
}

module.exports = mongoose.model('Reservation', reservationSchema)