const router = require("express").Router()
const { createReview, getReview, deleteReview } = require("../controllers/reviw.controller");
const verifyToken = require("../middlewares/jwt");

router.post('/',verifyToken,createReview)
router.get('/:gigId',getReview)
router.delete('/:id',verifyToken, deleteReview)

module.exports = router;