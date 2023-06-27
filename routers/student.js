const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');


router.get('/', async(req, res) => {
    try {
        const student = await Student.find();
        res.json(student);
    }
    catch (err) {
         console.log('Error' + err);
    }
});

module.exports = router;