

import React, { useState } from 'react';
import { getProyectoById } from '../services/proyectoService';

const ObtenerProyecto = () => {
  const [id, setId] = useState('');
  const [proyecto, setProyecto] = useState(null);
  const [error, setError] = useState('');
  const [idError, setIdError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setProyecto(null);
    setIdError('');
    if (!id) {
      setIdError('Este campo es obligatorio');
      return;
    }
    try {
      const data = await getProyectoById(id);
      if (!data || data.error || Object.keys(data).length === 0) {
        setError('No se encontró el proyecto con ese ID.');
      } else {
        setProyecto(data);
      }
    } catch {
      setError('Error al buscar el proyecto.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Obtener Proyecto por ID</h2>
        <div style={{marginBottom: '1rem'}}>
          <input placeholder="ID" value={id} onChange={e => { setId(e.target.value); setIdError(''); }} />
          {idError && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{idError}</div>}
        </div>
        <button type="submit">Buscar</button>
      </form>
      {error && <div style={{color: 'crimson', marginBottom: '1rem'}}>{error}</div>}
      {proyecto && (
        <div>
          <h3>{proyecto.nombre}</h3>
          <p>Fecha de Inicio: {proyecto.fechaInicio}</p>
          <p>Estado: {proyecto.estado}</p>
          <p>Responsable: {proyecto.responsable}</p>
          <p>Monto: {proyecto.monto}</p>
        </div>
      )}
    </div>
  );
};

export default ObtenerProyecto;
