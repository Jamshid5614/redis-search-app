const express = require('express');
const router = express.Router();
const {getUsers} = require('../controllers/getUsers');


router.get('/users',getUsers);


module.exports = router;





