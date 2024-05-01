// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082



const Bike = require('../../models/bike')



//Get all elements in the list
exports.bikes_list = (req, res) =>{
    res.status(200).json(
        {
            bikes: Bike.bikesList
        }
    )
}


//Allows save or push a new bike
exports.create_bike = (req, res) => {
    let location = [req.body.lat, req.body.lng]

    const bike = new Bike.Bike(req.body.id, req.body.color, req.body.model, location)

    Bike.add_bike(bike)

    res.status(200).json({
        code: 202,
        status: "accepted"
    })
}

// Allows delete a element in our app.
exports.delete_bike = (req, res) => {

    Bike.delete_bike(req.body.id)

    res.status(204).json({
        code: 204,
        status: "item was deleted"
    })
}
