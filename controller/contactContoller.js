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
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({name,email,phone});
    console.log(contact);

    res.status(201).json({contact});
});

//@desc Get Single Contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler (async (req,res) => {
    console.log("req.params.id - ",req.params.id);
    
    
    const contacts = await Contact.findById(req.params.id);
    console.log("contact - ",contacts);
    if(!contacts || contacts.length === 0){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({contacts});
});

//@desc Update Contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async (req,res) => {
    const contacts = await Contact.findById(req.params.id);
    if(!contacts || contacts.length === 0){
        res.status(404);
        throw new error("Contact Not Found");
    }

    const updateContact = await Contact.findByIdAndUpdate(
         req.params.id,
         req.body,
         {new:true}
    );

    res.status(200).json({updateContact});
});

//@desc Delete Contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async(req,res) => {
    const contacts = await Contact.findById(req.params.id);
    if(!contacts || contacts.length === 0){
        res.status(404);
        throw new error("Contact Not Found");
    }
    res.json({contacts});
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({contacts});
});
    


module.exports = {getAllContact,createContact,getContact,updateContact,deleteContact};