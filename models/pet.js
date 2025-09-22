"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const PetSchema = new Schema({
  name: { type: String, required: true }
  , birthday: {type: String, required: true }
  , species: { type: String, required: true }
  , picUrl: { type: String }
  , picUrlSq: { type: String }
  , avatarUrl: { type: String }
  , favoriteFood: { type: String, required: true }
  , description: { type: String, minlength: 140, required: true }
  , price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

// Add text index with weights

PetSchema.index({ 
  name: 'text', 
  species: 'text', 
  favoriteFood: 'text', 
  description: 'text' 
}, {
  name: 'My text index', 
  weights: {
    name: 10,        // Highest priority
    species: 4,      // High priority  
    favoriteFood: 2, // Medium priority
    description: 1   // Lowest priority
  }
});

PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
