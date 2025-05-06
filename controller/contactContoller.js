const asyncHandler = require("express-async-handler");

//@desc Get All Contact
//@route GET /api/contacts
//@access public
const getAllContact = asyncHandler ((req,res) => {
    res.status(200).json({
        message:"Get All Contact"
    });
});

//@desc Create Contact
//@route POST /api/contacts
//@access public
//Content-Type: application/json
const createContact = asyncHandler((req,res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400).json({
            message: "All fields are required"
        })
        return;
    }

    res.status(201).json({
        message:"create a new contact"
    })
});

//@desc Get Single Contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler ((req,res) => {
    res.status(200).json({
        message: `contact get with ID :${req.params.id}`
    })
});

//@desc Update Contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler((req,res) => {
    res.status(200).json({
        message: `contact updated with ID :${req.params.id}`
    })
});

//@desc Delete Contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler((req,res) => {
    res.status(200).json({
        message:`contact deleted with ID :${req.params.id}`
    })
});
    


module.exports = {getAllContact,createContact,getContact,updateContact,deleteContact};