const express = require('express');
const router = express.Router();
const personaController = require('../controllers/persona.controller');

// Rutas para el manejo de personas
router.post('/personas', personaController.createPersona);
router.get('/personas', personaController.getAllPersonas);
router.get('/personas/:id', personaController.getPersonaById);
router.put('/personas/:id', personaController.updatePersona);
router.delete('/personas/:id', personaController.deletePersona);

module.exports = router;