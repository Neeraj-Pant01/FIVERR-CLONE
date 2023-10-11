const { createconversations, getAllConversation, updateConversation, getAConverStaion } = require("../controllers/conversations.controller");
const verifyToken = require("../middlewares/jwt");

const router = require("express").Router();

router.post('/',verifyToken, createconversations)
router.put('/:id',verifyToken, updateConversation)
router.get('/single/:id',verifyToken, getAConverStaion)
router.get('/',verifyToken, getAllConversation)

module.exports = router;