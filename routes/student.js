const { Router } = require("express");
const router = Router();
const student = require('../controllers/students');
router.post('/',student.registerStudent);
module.exports = router;


