const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  resource: { type: Schema.Types.ObjectId, ref: 'Resource', required: true },
  rating: { type: Number, min: 1, max: 5, required: true }, 
  comment: { type: String, required: true },  
  createdAt: { type: Date, default: Date.now },
});

const resourceSchema = new Schema({
  title: { type: String, required: true },  
  url: { type: String, required: true }, 
  description: String,  
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: false },  
  tags: [String], 
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  bookmarkedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], 
  createdAt: { type: Date, default: Date.now }
});


const Resource = mongoose.model('Resource', resourceSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { Resource, Review };
