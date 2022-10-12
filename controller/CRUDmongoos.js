// const Contact = require('../model/contact'); 

// const getContact = async (req, res) => {
//     try {
//         const contact = await Contact.find();
//         res.json(contact);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     };
// };

// export const getProductsById = async (req, res) => {
//     try {
//         const contact = await Contact.findById(req.params.id);
//         res.json(contact);
//     } catch (error) {
//         res.status(404).json({message: error.message})
//     };
// };

// export const saveContact = async (req, res) => {
//     const contact = new Contact(req.body);
//     try {
//         const savedContact = await contact.save();
//         res.status(201).json(savedContact);
//     } catch (error) {
//         res.status(400).json({message: error.message})
//     };
// };

// export const updateContact = async (req, res) => { 
//     const cekId = await Contact.findById(req.params.id);
//     if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
//     try {
//         const updatedContact = await Contact.updateOne({_id: req.params.id}, {$set: req.body});
//         res.status(200).json(updatedContact);
//     } catch (error) {
//         res.status(400).json({message: error.message})
//     };
// };

// export const deleteContact = async (req, res) => { 
//     const cekId = await Contact.findById(req.params.id);
//     if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
//     try {
//         const deletedContact = await Contact.deleteOne({_id: req.params.id});
//         res.status(200).json(deletedContact);
//     } catch (error) {
//         res.status(400).json({message: error.message})
//     };
// };