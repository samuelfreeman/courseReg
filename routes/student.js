const { Router } = require("express");
const router = Router();
const student = require('../controllers/students');
router.post('/',student.registerStudent);
router.get('/',student.getStudents)
module.exports = router;


