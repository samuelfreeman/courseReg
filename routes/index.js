const { Router } = require("express");
const appRouter = Router();
 const student = require('../routes/student');
const programe = require('../routes/programes')
const courses = require('../routes/courses')

appRouter.use('/students',student)
appRouter.use('/programes',programe)
appRouter.use('/courses',courses)

module.exports =appRouter;