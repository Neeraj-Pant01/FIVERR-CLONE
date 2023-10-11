const { createMessege, getMessage } = require("../controllers/messeges.controller");
const verifyToken = require("../middlewares/jwt");

const router = require("express").Router()

router.post('/',verifyToken,createMessege)
router.get("/:conversationId",verifyToken,getMessage)

module.exports = router;