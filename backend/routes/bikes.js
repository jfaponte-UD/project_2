// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082

const express = require('express')
const router = express.Router()
const bikeController = require('../controllers/bike')

// Get all bikes
router.get('/', bikeController.bikes_list)

//Create a bike
router.get('/create', bikeController.bike_create_get)
router.post('/create', bikeController.bike_create_post)

//Delete a bike
router.post('/delete/:id', bikeController.bike_delete)

// modify a bike
router.get('/modify/:id', bikeController.bike_modify_get)
router.post('/modify/:id', bikeController.bike_modify_post)


module.exports = router
