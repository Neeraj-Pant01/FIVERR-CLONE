const { register, login, getUsers, updateUser } = require("../controllers/auth.controller");
const verifyToken = require("../middlewares/jwt");

const router = require("express").Router();

router.post('/register',register)
router.post('/login',login)
router.put('/update/:id',verifyToken,updateUser)

module.exports = router;