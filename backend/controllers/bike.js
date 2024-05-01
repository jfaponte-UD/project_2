// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082

const Bike = require('../models/bike')

//create obj, this obj allow using as a database
exports.bikes_list = (req, res) => {
    res.render("bikes/index", {bikes: Bike.bikesList})
}

// Get the view
exports.bike_create_get = (req, res) => {
    res.render("bikes/create")
}

// here allows to create a bike
exports.bike_create_post = (req, res) => {

    //parser the location to array
    let location = [req.body.lat, req.body.lng]
    console.log(req.body)
    console.log(location)

    // Create a bike using the attributes from the view
    let bike = new Bike.Bike(
        req.body.id,
        req.body.color,
        req.body.model,
        location
    )

    // push the bike
    Bike.add_bike(bike)

    res.redirect("/bikes")
}

// handle to delete
exports.bike_delete = (req, res) => {

    Bike.delete_bike(req.body.id)
    res.redirect("/bikes")
}

// handle modify view
exports.bike_modify_get = (req, res) => {

    let bike = Bike.find_bike(req.params.id)
    console.log(bike)
    res.render("bikes/modify", {bike})
}

exports.bike_modify_post = (req, res) => {
    // get the bike
    let bike = Bike.find_bike(req.body.id)

    console.log('EDITING')
    console.log(bike)
    console.log('EDITING')

    bike.id = req.body.id
    bike.color = req.body.color
    bike.model = req.body.model
    bike.location = [req.body.lat, req.body.lng]

    res.redirect("/bikes")
}
