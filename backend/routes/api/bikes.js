// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082



const express = require('express')
const router = express.Router()
const bikeController = require('../../controllers/api/bikeApiController')

//allow get ALL elements.
router.get('/', bikeController.bikes_list)

//Handle the route to post a new bike
router.post('/create', bikeController.create_bike)

//Handle delete item
router.delete('/delete', bikeController.delete_bike)

module.exports = router
