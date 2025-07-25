const API_URL = 'http://localhost:4000/api/proyectos';

export const getProyectos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getProyectoById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createProyecto = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateProyecto = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteProyecto = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};
