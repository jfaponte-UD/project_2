let Bike = require('../../models/bike')
let request = require('request')
let server = require('../../bin/www')

describe('Bike API', () => {
  describe('GET BIKES /', () => {
    it('Status 200', () => {
      let bike = new Bike.Bike(1, "red", "gw", [4.579583235006287, -74.15714591958991])
      Bike.add_bike(bike)

      request.get('http://localhost:3000/bikes', function(error, response, body) {
        expect(response.statusCode).toBe(200)
      })
    })
  })
})

describe('POST BIKES /create', () => {
  it('Status 200', (done) => {
    let headers = {'content-type': 'application/json'}
    let bike = {id: 10, color: "red", model: "gw", lat: 4.579583235006287, lng: -74.15714591958991}
    request.post({
      headers: headers,
      url: 'http://localhost:3000/bikes/create',
      body: JSON.stringify(bike)
    }, function(error, response, body) {
      expect(response.statusCode).toBe(200)
      expect(Bike.find_bike(10).color).toBe("red")
      done()
    })
  })
})