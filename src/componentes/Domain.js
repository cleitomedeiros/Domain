import React, { useState } from 'react';

const DomainNameGenerator = () => {
  const pronombres = ['mi', 'tu', 'su'];
  const adjetivos = ['mejor', 'nuevo', 'gran'];
  const sustantivos = ['sitio', 'web', 'dominio'];

  const generarCombinacionAleatoria = () => {
    const pronombreAleatorio = pronombres[Math.floor(Math.random() * pronombres.length)];
    const adjetivoAleatorio = adjetivos[Math.floor(Math.random() * adjetivos.length)];
    const sustantivoAleatorio = sustantivos[Math.floor(Math.random() * sustantivos.length)];

    return `${pronombreAleatorio}${adjetivoAleatorio}${sustantivoAleatorio}.com`;
  };

  const [combinaciones, setCombinaciones] = useState([]);

  const cambiarCombinaciones = () => {
    const nuevasCombinaciones = [];
    for (let i = 0; i < 10; i++) { 
      nuevasCombinaciones.push(generarCombinacionAleatoria());
    }
    setCombinaciones(nuevasCombinaciones);
  };

  return (
    <div>
      <button onClick={cambiarCombinaciones}>Generar Combinaciones</button>
      <ul>
        {combinaciones.map((combinacion, index) => (
          <li key={index}>{combinacion}</li>
        ))}
      </ul>
    </div>
  );
};

export default DomainNameGenerator;
