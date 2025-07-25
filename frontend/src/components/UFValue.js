import React, { useEffect, useState } from 'react';

const UFValue = () => {
  const [uf, setUf] = useState(null);

  useEffect(() => {
    fetch('https://mindicador.cl/api/uf')
      .then(res => res.json())
      .then(data => setUf(data.serie[0].valor))
      .catch(() => setUf('Error'));
  }, []);

  return (
    <div>
      <strong>UF del día:</strong> {uf ? uf : 'Cargando...'}
    </div>
  );
};

export default UFValue;
