const router = require('express').Router();

const carController = require('../controllers/carController')

router.get('/car', carController.getCar)
router.get('/views/car', carController.carPage);
router.post('/create', carController.createCar)
router.patch('/car/:id', carController.editCar)
router.delete('/car/:id', carController.deleteCar)
module.exports = router;