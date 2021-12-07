const express = require('express');
const router = express.Router();
 
const userController = require('../controller/userdetails.controller');
 
// get all users
router.get('/', userController.getUserdetailsList);
 
// get employee by ID
router.get('/:id',userController.getUserByID);
 
 
// get ID for Update 
router.get('/searchRecord/:uname',userController.getUserByName);
 
// create new employee
router.post('/', userController.createNewUser);
 
// update employee
router.put('/:id', userController.updateUser);
 
// delete employee
router.delete('/:id',userController.deleteUser);
 
module.exports = router;