const { register, login, getUsers, updateUser, deleteUser, getAuser } = require("../controllers/auth.controller");
const verifyToken = require("../middlewares/jwt");

const router = require("express").Router();

router.post('/register',register)
router.post('/login',login)
router.put('/update/:id',verifyToken,updateUser)
router.delete('/:id',verifyToken, deleteUser)
router.get('/:id',getAuser)


module.exports = router;