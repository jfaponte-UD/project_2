// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082

const Bike = require('../../models/bike')

//Get all elements in the list
exports.bikes_list = (req, res) => {
    Bike.getBikesList((err, bikes) => {
        if (err) {
            console.error('Error fetching bikes:', err);
            return res.status(500).json({
                code: 500,
                status: "error",
                message: "Failed to fetch bikes"
            });
        }
        res.status(200).json({
            code: 200,
            status: "success",
            bikes: bikes
        });
    });
};


//Allows save or push a new bike
exports.create_bike = (req, res) => {

    console.log({
        id: req.body.id,
        color: req.body.color,
        model: req.body.model
    });

    const bikeData = {
        code: req.body.id, // Assuming req.body.id contains the bike code
        color: req.body.color,
        model: req.body.model
    };

    const bike = Bike.createInstance(bikeData.code, bikeData.color, bikeData.model);

    bike.location = [req.body.lat, req.body.lng]

    Bike.add(bike, (err, savedBike) => {
        if (err) {
            console.error('Error adding bike:', err);
            return res.status(500).json({
                code: 500,
                status: "error",
                message: "Failed to create bike"
            });
        }
        res.status(200).json({
            code: 200,
            status: "success",
            bike: savedBike // Assuming savedBike contains the saved bike object with an ID
        });
    });
};


// Allows delete a element in our app.
exports.delete_bike = (req, res) => {
    const bikeId = req.body.id; // Suponiendo que el ID de la bicicleta está en req.body.id
    Bike.removeByCode(bikeId, (err) => {
        if (err) {
            console.error('Error deleting bike:', err);
            return res.status(500).json({
                code: 500,
                status: "error",
                message: "Failed to delete bike"
            });
        }
        res.status(204).json({
            code: 204,
            status: "success",
            message: "Bike was deleted"
        });
    });
};

