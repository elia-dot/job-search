const express = require('express');
const router = express.Router();
const Job = require('../models/JobModel');

//get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

//post new job
router.post('/', async (req, res) => {
  try {
    const { company, position, location, link, status, date } = req.body;
    const newJob = new Job({
      company,
      position,
      location,
      link,
      status,
    });
    if (date) newJob.date = date;

    const job = await newJob.save();
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

//update job
router.patch('/:jobId', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.jobId, req.body, {new : true});
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

//delete job
router.delete('/:jobId', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.jobId);
    res.status(200).send('job deleted');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
