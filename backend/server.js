const express = require('express');
const cors = require('cors');
const app = express();
const proyectoRoutes = require('./routes/proyectoRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/proyectos', proyectoRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
