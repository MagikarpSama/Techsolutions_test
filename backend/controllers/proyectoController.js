const proyectos = require('../models/Proyecto');

exports.getProyectos = (req, res) => {
  res.json(proyectos);
};

exports.getProyectoById = (req, res) => {
  const proyecto = proyectos.find(p => p.id === parseInt(req.params.id));
  if (proyecto) {
    res.json(proyecto);
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
};

exports.createProyecto = (req, res) => {
  const nuevo = {
    id: proyectos.length + 1,
    ...req.body
  };
  proyectos.push(nuevo);
  res.status(201).json(nuevo);
};

exports.updateProyecto = (req, res) => {
  const idx = proyectos.findIndex(p => p.id === parseInt(req.params.id));
  if (idx !== -1) {
    proyectos[idx] = { ...proyectos[idx], ...req.body };
    res.json(proyectos[idx]);
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
};

exports.deleteProyecto = (req, res) => {
  const idx = proyectos.findIndex(p => p.id === parseInt(req.params.id));
  if (idx !== -1) {
    const eliminado = proyectos.splice(idx, 1);
    res.json(eliminado[0]);
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
};
