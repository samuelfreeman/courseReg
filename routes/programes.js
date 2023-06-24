const { Router } = require("express");
const router = Router();
const programe = require('../controllers/programes');
router.post('/',programe.addPrograme);
router.get('/',programe.getPrograme);
module.exports = router;
