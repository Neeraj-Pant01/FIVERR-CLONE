const { createGig, getGig, deleteGig, getAllGigs } = require("../controllers/gigs.controller");
const verifyToken = require("../middlewares/jwt");

const router = require("express").Router();

router.post('/create',verifyToken,createGig)
router.get('/:id',getGig)
router.delete('/:id',verifyToken,deleteGig)
router.get('/',getAllGigs)

module.exports = router;