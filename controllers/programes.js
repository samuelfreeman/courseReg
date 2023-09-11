const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const addPrograme = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const programe = await prisma.program.create({
      data,
    });
    console.log("works!");

    res.status(201).json({
      programe,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPrograme = async(req,res,next)=>{

try {
  const programs =await prisma.program.findMany({
include:{
 courses:true

}

})
res.status(200).json({
  programs
})
} catch (error) {
  next(error).log(error)
}



}

module.exports={
    addPrograme,
    getPrograme

}