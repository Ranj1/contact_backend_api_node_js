const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");
//@desc Get All Contact
//@route GET /api/contacts
//@access public
const getAllContact = asyncHandler (async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json({contacts});
});

//@desc Create Contact
//@route POST /api/contacts
//@access public
//Content-Type: application/json
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400).json({
            message: "All fields are required"
        });
        return;
    }

    const contact = await Contact.createContact({name,email,phone});
    console.log(contact);

    res.status(201).json({contact});
});

//@desc Get Single Contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler (async (req,res) => {
    res.status(200).json({
        message: `contact get with ID :${req.params.id}`
    })
});

//@desc Update Contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).json({
        message: `contact updated with ID :${req.params.id}`
    })
});

//@desc Delete Contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async(req,res) => {
    res.status(200).json({
        message:`contact deleted with ID :${req.params.id}`
    })
});
    


module.exports = {getAllContact,createContact,getContact,updateContact,deleteContact};