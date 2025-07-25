

import React, { useState } from 'react';
import { deleteProyecto } from '../services/proyectoService';

const EliminarProyecto = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [idError, setIdError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIdError('');
    if (!id) {
      setIdError('Este campo es obligatorio');
      return;
    }
    try {
      const res = await deleteProyecto(id);
      if (res && (res.error || res.message === 'No encontrado' || res.status === 404)) {
        setError('No se encontró el proyecto con ese ID.');
      } else {
        setSuccess('Proyecto eliminado correctamente.');
      }
    } catch {
      setError('Error al eliminar el proyecto.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Eliminar Proyecto</h2>
      <div style={{marginBottom: '1rem'}}>
        <input placeholder="ID" value={id} onChange={e => { setId(e.target.value); setIdError(''); }} />
        {idError && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{idError}</div>}
      </div>
      <button type="submit">Eliminar</button>
      {error && <div style={{color: 'crimson', marginTop: '1rem'}}>{error}</div>}
      {success && <div style={{color: 'green', marginTop: '1rem'}}>{success}</div>}
    </form>
  );
};

export default EliminarProyecto;
