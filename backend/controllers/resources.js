// controllers/resources.js

const mongoose = require("mongoose");
const { Resource } = require("../models/resource");

module.exports = {
  getAllResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
};

// GET ALL RESOURCES
async function getAllResources(req, res) {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json(err);
  }
}

// GET A SPECIFIC RESOURCE BY ID
async function getResourceById(req, res) {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json(err);
  }
}

// CREATE A NEW RESOURCE
async function createResource(req, res) {
  try {
    const newResource = new Resource({
      ...req.body,
      user: req.user._id,
    });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(400).json({ message: "Error creating resource", err });
  }
}

// UPDATE A RESOURCE
async function updateResource(req, res) {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json(updatedResource);
  } catch (err) {
    res.status(400).json({ message: "Error updating resource", err });
  }
}

// DELETE A RESOURCE
async function deleteResource(req, res) {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ message: "Resource not found" });
    }
    res.status(200).json({ message: "Resource deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting resource", err });
  }
}
