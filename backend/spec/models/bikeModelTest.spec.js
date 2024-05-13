const mongoose = require('mongoose')
let Bike = require('../../models/bike')

describe('Testing bikes', () => {
  beforeEach(() => {
    const mongoDB = "mongodb://localhost/testdb"
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    db.once('open', () => {
      console.log('We are connected to test database')
      done()
    })
  })

  afterEach(() => {
    Bike.deleteMany({}, function(err, success) {
      if (err) console.log(err)
    })
  })

  describe('Bike.createInstance', () => {
    it('crea una instancia de Bike', () => {
      let bike = Bike.createInstance(1, "red", "gw", [4.579583235006287, -74.15714591958991])
      expect(bike.code).toBe(1)
      expect(bike.color).toBe("red")
      expect(bike.model).toBe("gw")
      expect(bike.location[0]).toBe(4.579583235006287)
      expect(bike.location[1]).toBe(-74.15714591958991)
    })
  })

  describe('Bike.getBikesList', () => {
    it('comienza vacia', () => {
      Bike.getBikesList((err, bikes) => {
        expect(bikes.length).toBe(0);
      })
    })
  })

  describe('Bike.add', () => {
    it('agrega una bicicleta', () => {
      const bike = new Bike({ code: 1, color: "red", model: "gw" })
      Bike.add(bike, (err, newBike) => {
        if (err) console.log(err)
        Bike.getBikesList((err, bikes) => {
          expect(bikes.length).toBe(1)
          expect(bikes[0].code).toBe(1)
        })
      })
    })
  })

  describe('Bike.findByCode', () => {
    it('debe devolver la bicicleta con code 1', () => {
      Bike.getBikesList((err, bikes) => {
        expect(bikes.length).toBe(0)

        const bike = new Bike({ code: 1, color: "red", model: "gw"})
        Bike.add(bike, (err, newBike) => {
          if (err) console.log(err)

          const bike2 = new Bike({ code: 2, color: "blue", model: "Gtx"})
          Bike.add(bike2, (err, newBike) => {
            if (err) console.log(err)

            Bike.findByCode(1, (err, targetBike) => {
              expect(targetBike.code).toBe(bike.code)
              expect(targetBike.color).toBe(bike.color)
              expect(targetBike.model).toBe(bike.model)
            })
          })
        })
      })
    })
  })

})


// describe('Bike.bikesList', () => {
//   it('comienza vacia', () => {
//     expect(Bike.bikesList.length).toBe(0)
//   })
// })

// describe('Bike.find_bike', () => {
//   it('Debe devolver la bicicleta con id 1', () => {
//     expect(Bike.bikesList.length).toBe(0)
//     let bike1 = new Bike.Bike(1, "red", "gw", [4.579583235006287, -74.15714591958991])
//     let bike2 = new Bike.Bike(2, "blue", "Gtx", [4.579583235006287, -74.160])
//     Bike.add_bike(bike1)

//     let foundBike = Bike.find_bike(1)
//     expect(foundBike.id).toEqual(1)
//     expect(foundBike.color).toEqual("red")
//     expect(foundBike.model).toEqual("gw")
//   })
// })
