const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['wishlist', 'applied', 'accepted', 'rejected'],
  },
  date: {
    type: Date,
  },
});

module.exports = Job = mongoose.model('Job', jobSchema);
