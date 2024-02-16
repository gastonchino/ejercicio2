// Triángulo rectángulo
const cateto1 = 3;
const cateto2 = 4;

// Hipotenusa del triángulo
const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

// Ángulo (en radianes)
const anguloRadianes = Math.atan2(cateto2, cateto1);

// Convertir radianes a grados
const anguloGrados = (anguloRadianes * 180) / Math.PI;

console.log(`d) Triángulo rectángulo: Hipotenusa = ${hipotenusa}, Ángulo = ${anguloGrados} grados`);
