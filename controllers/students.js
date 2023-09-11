const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const registerStudent = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const student = await prisma.student.create({
      data,
      include: {
        program: {
          include:{
            course: true,
          }
        },
      },
    });
    console.log("works!");

    res.status(201).json({
      student,
    });
  } catch (error) {
    console.log(error);
  }
};
const getStudents = async (req, res, next) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        program: {
          include:{
            course: true,
          }
        },
      },
    });
    res.status(200).json({
      students,
    });
    console.log("works!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerStudent,
  getStudents,
};
