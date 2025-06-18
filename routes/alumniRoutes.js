// routes/alumniRoutes.js
const express = require('express');
const router = express.Router();

const alumniController = require('../controllers/alumniController');
const { authenticate } = require('../middleware/auth');

// Define routes
router.get('/', alumniController.getAllAlumni);
router.get('/:id', alumniController.getAlumniById);
router.get('/search', alumniController.searchAlumni);
router.get('/stats', alumniController.getAlumniStats);
router.post('/', authenticate, alumniController.createAlumniProfile);
router.put('/:id', authenticate, alumniController.updateAlumniProfile);
router.delete('/:id', authenticate, alumniController.deleteAlumniProfile);

module.exports = router;
