const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const personaRoutes = require('./src/routes/persona.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', personaRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});