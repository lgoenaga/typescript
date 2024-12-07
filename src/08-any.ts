( () => {
  let dinamico: any; // any type no es recomendado
  dinamico = 'Hola';
  console.log(dinamico);
  dinamico = 123;
  console.log(dinamico);
  dinamico = true;
  console.log(dinamico);

  dinamico = 'Hola';
  const rta = (dinamico as string).toLocaleUpperCase();
  console.log(rta);

  dinamico = 123;
  const rta2 = (<number>dinamico).toFixed(2);
  console.log(rta2);

  dinamico = 567;
  const rta3 = (dinamico as number).toPrecision(2);
  console.log(rta3);

  dinamico = true;
  const rta4 = dinamico.toString();
  console.log(rta4);
}
)();