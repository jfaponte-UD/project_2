// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bikeSchema = new Schema({
    code: Number,
    color: String,
    model: String,
    location: {
        type: [Number],
        index: { type: '2dsphere', sparse: true }
    }
})

bikeSchema.statics.createInstance = function(code, color, model, location) {
    return new this({
        code,
        color,
        model,
        location
    })
}

bikeSchema.methods.toString = function() {
    return `code: ${this.code} || color: ${this.color}`
}

bikeSchema.statics.add = function(bike, cb) {
    this.create(bike, cb)
}

bikeSchema.statics.getBikesList = async function(cb) {
    return this.find({}, cb)
}

bikeSchema.statics.findByCode = function(code, cb) {
    return this.findOne({ code: code }, cb)
}

bikeSchema.statics.removeByCode = function(code, cb) {
    return this.deleteOne({ code: code }, cb)
}

module.exports = mongoose.model('Bike', bikeSchema)