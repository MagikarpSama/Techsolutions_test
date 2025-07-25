import React, { useEffect, useState } from 'react';
import { getProyectos, deleteProyecto } from '../services/proyectoService';

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    getProyectos().then(setProyectos);
  }, []);

  const handleDelete = async (id) => {
    await deleteProyecto(id);
    setProyectos(proyectos.filter(p => p.id !== id));
  };

  return (
    <div className="custom-list">
      <h2>Proyectos</h2>
      <ul>
        {proyectos.map(p => (
          <li key={p.id}>
            <span>{p.nombre} - {p.estado} - {p.responsable}</span>
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProyectos;
