const express = require("express");
const router = express.Router();
const validateTokenHandler = require("../middleware/validateTokenHandler");


const {getAllContact,createContact,getContact,updateContact,deleteContact} = require("../controller/contactContoller")

router.use(validateTokenHandler);

router.route("/").get(getAllContact).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;