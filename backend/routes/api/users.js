const express = require('express');
const router = express.Router();
const userApiController = require('../../controllers/api/userApiController');

router.get('/', userApiController.getUsers);
router.post('/create', userApiController.createUser);
router.post('/:id/reserve', userApiController.makeReservation);

module.exports = router;