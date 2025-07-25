import React from 'react';
import ListaProyectos from './views/ListaProyectos';
import CrearProyecto from './views/CrearProyecto';
import ActualizarProyecto from './views/ActualizarProyecto';
import EliminarProyecto from './views/EliminarProyecto';
import ObtenerProyecto from './views/ObtenerProyecto';
import UFValue from './components/UFValue';

const App = () => {
  return (
    <div className="main-container">
      <h1>Gestión de Proyectos - Tech Solutions</h1>
      <div className="uf-value"><UFValue /></div>
      <CrearProyecto />
      <ListaProyectos />
      <ActualizarProyecto />
      <EliminarProyecto />
      <ObtenerProyecto />
    </div>
  );
};

export default App;
