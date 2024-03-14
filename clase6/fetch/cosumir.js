// Hacer una solicitud HTTP GET para obtener el archivo JSON
fetch('datos.json')
  .then(response => {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    // Parsear la respuesta JSON
    return response.json();
  })
  .then(data => {
    // Procesar los datos
    console.log('Nombre:', data.nombre);
    console.log('Edad:', data.edad);
    console.log('Ciudad:', data.ciudad);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error('Error al cargar el archivo JSON:', error);
  });
