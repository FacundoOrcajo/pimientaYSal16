const express = require('express');
const {detail} = require('../controllers/productsController');
const router = express.Router();

router
    .get('/detail/:id', detail)

module.exports = router;