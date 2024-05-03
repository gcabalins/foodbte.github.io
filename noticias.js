var url = 'https://newsapi.org/v2/everything?' +
'q=Apple&' +
'from=2024-04-22&' +
'sortBy=popularity&' +
'apiKey=698280876bdc4c9d839f4f80e7250ca1';

fetch(url)
.then(function(response) {
    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
    }
    // Convertir la respuesta a JSON
    return response.json();
})
.then(function(data) {
    // Obtener el elemento de la noticia destacada
    var noticiaDestacada = document.getElementById('noticias_index');
    // Obtener la primera noticia del arreglo de artículos
    var primeraNoticia = data.articles[0];
    // Crear elementos HTML para mostrar la noticia
    var titulo = document.createElement('h2');
    titulo.textContent = primeraNoticia.title;
    var autor = document.createElement('p');
    autor.textContent = "Autor: " + primeraNoticia.author;
    var descripcion = document.createElement('p');
    descripcion.textContent = primeraNoticia.description;
    var enlace = document.createElement('a');
    enlace.textContent = "Leer más";
    enlace.href = primeraNoticia.url;
    // Agregar los elementos al contenedor de la noticia destacada
    noticiaDestacada.appendChild(titulo);
    noticiaDestacada.appendChild(autor);
    noticiaDestacada.appendChild(descripcion);
    noticiaDestacada.appendChild(enlace);
})
.catch(function(error) {
    console.error('Hubo un problema con la solicitud:', error);
});
