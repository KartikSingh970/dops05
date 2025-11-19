const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, query } = req.body;

    if (!name || !email || !phone || !query) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({ name, email, phone, query });
    await contact.save();

    console.log('Saved contact:', contact);
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

module.exports = router;

