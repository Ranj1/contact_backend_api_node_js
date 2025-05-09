const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");
//@desc Get All Contact
//@route GET /api/contacts
//@access private
const getAllContact = asyncHandler (async (req,res) => {
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json({contacts});
});

//@desc Create Contact
//@route POST /api/contacts
//@access private
//Content-Type: application/json
const createContact = asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    const contact = await Contact.create({name,email,phone,user_id:req.user.id});
    console.log("created contact",contact);

    res.status(201).json({contact});
});

//@desc Get Single Contact
//@route GET /api/contacts
//@access private
const getContact = asyncHandler (async (req,res) => {
    
    const contact = await Contact.findById(req.params.id);
    
  if(!contact || contact.length === 0){
        console.log("contact not found");
        res.status(400);
        throw Error(
            "Contact Not Found"
        )
    }
    res.status(200).json({contact})
});

//@desc Update Contact
//@route PUT /api/contacts
//@access private
const updateContact = asyncHandler(async (req,res) => {
   
    try{
        const contacts = await Contact.findById(req.params.id);
        
        if(!contacts || contacts.length === 0){
            res.status(404);
            throw new error("Contact Not Found");
        }
         
        if(contacts.user_id.toString() !== req.user.id){
            res.status(403);
            throw new Error("User not authorized");
        }
    
        const updateContact = await Contact.findByIdAndUpdate(
             req.params.id,
             req.body,
             {new:true}
        );
    
        res.status(200).json({updateContact});
    }catch(error){
        throw new Error(error);
    }
        
    
});

//@desc Delete Contact
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHandler(async(req,res) => {
    const contacts = await Contact.findById(req.params.id);
    if(!contacts || contacts.length === 0){
        res.status(404);
        throw new error("Contact Not Found");
    }
    res.json({contacts});
    if(contacts.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User not authorized");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({contacts});
});
    


module.exports = {getAllContact,createContact,getContact,updateContact,deleteContact};