const { Router } = require("express");
const router = Router();
const courses = require('../controllers/courses');
router.post('/',courses.addcourses);
router.get ('/',courses.getCourses)
module.exports = router;
