const db = require('../config/db.config');

// Crear una nueva persona
exports.createPersona = (req, res) => {
  const { cedula, nombres, apellidos, fecha_nacimiento, telefono, direccion } = req.body;

  const query = 'INSERT INTO persona (cedula, nombres, apellidos, fecha_nacimiento, telefono, direccion) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [cedula, nombres, apellidos, fecha_nacimiento, telefono, direccion], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error inserting data');
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

// Obtener todas las personas
exports.getAllPersonas = (req, res) => {
  db.query('SELECT * FROM persona', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    res.status(200).json(results);
  });
};

// Obtener una persona por ID
exports.getPersonaById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM persona WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    if (result.length === 0) {
      return res.status(404).send('Persona not found');
    }
    res.status(200).json(result[0]);
  });
};

// Actualizar una persona por ID
exports.updatePersona = (req, res) => {
  const { id } = req.params;
  const { cedula, nombres, apellidos, fecha_nacimiento, telefono, direccion } = req.body;

  const query = 'UPDATE persona SET cedula = ?, nombres = ?, apellidos = ?, fecha_nacimiento = ?, telefono = ?, direccion = ? WHERE id = ?';
  db.query(query, [cedula, nombres, apellidos, fecha_nacimiento, telefono, direccion, id], (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).send('Error updating data');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Persona not found');
    }
    res.status(200).send('Persona updated successfully');
  });
};

// Eliminar una persona por ID
exports.deletePersona = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM persona WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).send('Error deleting data');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Persona not found');
    }
    res.status(200).send('Persona deleted successfully');
  });
};