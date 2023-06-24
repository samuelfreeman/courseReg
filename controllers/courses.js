const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const addcourses = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const courses = await prisma.courses.create({
      data,
    });
    console.log("works!");

    res.status(201).json({
      courses,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCourses= async (req,res,next)=>{
try {
  const courses = await prisma.courses.findMany({

  })
res.status(200).json({
  courses
})

} catch (error) {
  next(error)
}

}


module.exports={
    addcourses,
    getCourses

}