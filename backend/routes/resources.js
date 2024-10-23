// routes/resources.js
const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resources');

// Define routes and attach the controller functions
// Create a new resource
router.post('/', resourceController.createResource);   

// Get all resources
router.get('/', resourceController.getAllResources); 

// Get a specific resource by ID
router.get('/:id', resourceController.getResourceById);       

// Update a resource by ID
router.put('/:id', resourceController.updateResource);

// Delete a resource by ID
router.delete('/:id', resourceController.deleteResource);


module.exports = router;