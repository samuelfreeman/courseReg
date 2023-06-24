const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const  registerStudent = async (req, res, next) => {
    try {
      const data = req.body;
      console.log(data);
      const student = await prisma.student.create({
        data,
      });
      console.log("works!");
  
      res.status(201).json({
        student,
      });
    } catch (error) {
      console.log(error)
    }
  }





  module.exports = {
  registerStudent


  }



