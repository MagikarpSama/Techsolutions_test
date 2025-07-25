
import React, { useState } from 'react';
import { updateProyecto } from '../services/proyectoService';

const ActualizarProyecto = () => {
  const [id, setId] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    fechaInicio: '',
    estado: '',
    responsable: '',
    monto: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [updateError, setUpdateError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!id) newErrors.id = 'Este campo es obligatorio';
    if (!form.nombre) newErrors.nombre = 'Este campo es obligatorio';
    if (!form.fechaInicio) newErrors.fechaInicio = 'Este campo es obligatorio';
    if (!form.estado) newErrors.estado = 'Este campo es obligatorio';
    if (!form.responsable) newErrors.responsable = 'Este campo es obligatorio';
    if (!form.monto) newErrors.monto = 'Este campo es obligatorio';
    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess('');
    setUpdateError('');
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    const res = await updateProyecto(id, form);
    if (res && res.error) {
      setUpdateError('No se encontró el proyecto con ese ID.');
      return;
    }
    setSuccess('Proyecto actualizado correctamente');
    setId('');
    setForm({ nombre: '', fechaInicio: '', estado: '', responsable: '', monto: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Actualizar Proyecto</h2>
      <div style={{marginBottom: '1rem'}}>
        <input placeholder="ID" value={id} onChange={e => { setId(e.target.value); setErrors({ ...errors, id: '' }); }} />
        {errors.id && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{errors.id}</div>}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        {errors.nombre && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{errors.nombre}</div>}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <input type="date" name="fechaInicio" placeholder="Fecha de Inicio" value={form.fechaInicio} onChange={handleChange} />
        {errors.fechaInicio && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{errors.fechaInicio}</div>}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <select name="estado" value={form.estado} onChange={handleChange} style={{width: '100%', maxWidth: '220px', padding: '0.5rem 0.8rem', borderRadius: '6px', border: '1px solid #bfc9d1', fontSize: '1rem'}}>
          <option value="">Selecciona estado</option>
          <option value="En progreso">En progreso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        {errors.estado && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{errors.estado}</div>}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <input name="responsable" placeholder="Responsable" value={form.responsable} onChange={handleChange} />
        {errors.responsable && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{errors.responsable}</div>}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <input name="monto" placeholder="Monto" value={form.monto} onChange={handleChange} />
        {errors.monto && <div style={{color: 'crimson', fontSize: '0.95rem'}}>{errors.monto}</div>}
      </div>
      <button type="submit">Actualizar</button>
      {updateError && <div style={{color: 'crimson', marginTop: '1rem'}}>{updateError}</div>}
      {success && <div style={{color: 'green', marginTop: '1rem'}}>{success}</div>}
    </form>
  );
};

export default ActualizarProyecto;
