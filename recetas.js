
function mostrarDatosComida(comida) {
  const receta = `
      <div class="comida">
        <h2>${comida.strMeal}</h2>
        <img src="${comida.strMealThumb}">
        <p><h4 class="ocultar">Category <i class="fa-solid fa-chevron-down" style="color: #000000;"></i></h4> <span class="oculto" id="category">${comida.strCategory}</span></p>
        <p><h4 class="ocultar">Area <i class="fa-solid fa-chevron-down" style="color: #000000;"></i></h4> <span class="oculto" id="area">${comida.strArea}</span></p>
        <p><h4 class="ocultar">Instructions <i class="fa-solid fa-chevron-down" style="color: #000000;"></i></h4> <span class="oculto" id="instructions">${comida.strInstructions}</span></p>
        <p><h4 class="ocultar">Ingredients <i class="fa-solid fa-chevron-down" style="color: #000000;"></i></h4>
        <ul>
        ${Object.keys(comida)
      .filter(key => key.startsWith('strIngredient') && comida[key])
      .map(key => `<li>${comida[key]} - ${comida[`strMeasure${key.split('strIngredient')[1]}`]}</li>`).join('')
    }  </p>
       </ul>
      <a href="${comida.strSource}" target="_blank">Source</a>
      <a href="${comida.strYoutube}" target="_blank">YouTube</a>
    </div>
    `;

  $('.contenedor_recetas').append(receta);

  $('.ocultar').click(function () {
    const flecha = $(this).find('i');
    const contenido = $(this).next();
    contenido.toggle();
    
    // Si la flecha está rotada, deshacer la rotación
    if (flecha.hasClass('rotada')) {
      flecha.removeClass('rotada');
      flecha.css('transform', 'rotate(0deg)');
    } else {
      // Si la flecha no está rotada, rotarla 180 grados
      flecha.addClass('rotada');
      flecha.css('transform', 'rotate(180deg)');
    }
  });
}

function mostrarDatosComidaSimple(comida) {
  const recetaSimple = `
      <div class="comida-simple">
        <img src="${comida.strMealThumb}" alt="${comida.strMeal}">
        <a href="#" class="enlace-comida" data-id="${comida.idMeal}" title="${comida.strMeal}">${comida.strMeal}</a>
      </div>
    `;

  $('.contenedor_recetas').append(recetaSimple);

}

function cargarDetallesComida(comidaId) {
  const apiURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${comidaId}`;

  $.get(apiURL)
    .done(function (data) {
      const comida = data.meals[0];
      mostrarDatosComida(comida);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('Hubo un problema con la operación de obtención:', textStatus, errorThrown);
    });
}

function obtenerRecetaAleatoria() {
  $('.comida').remove();
  $('.comida-simple').remove();
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  $.get(apiURL)
    .done(function (data) {
      const comida = data.meals[0];
      mostrarDatosComida(comida);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('There was a problem with your fetch operation:', textStatus, errorThrown);
    });
}

function obtenerRecetaPorComida() {
  $('.comida').remove();
  $('.comida-simple').remove();
  $('#contenedor_recetas').hide();
  const busqueda = $('#buscador_recetas').val().trim();

  let apiURL;
  apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`;

  $.get(apiURL)
    .done(function (data) {
      const comidas = data.meals;
      comidas.forEach(function (comida) {
        mostrarDatosComidaSimple(comida);
      });
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('There was a problem with your fetch operation:', textStatus, errorThrown);
    })
    .always(function () {
      $('#contenedor_recetas').show();
    });
}

$(document).ready(function () {

  $('.boton_receta_aleatoria').on('click', function () {
    obtenerRecetaAleatoria();
  });

  $('#buscador_recetas').on('keypress', function (event) {
    if (event.which === 13) {
      $('.comida').remove();
      $('.comida-simple').remove();
      obtenerRecetaPorComida();
    }
  });

  $('#lupa_receta').on('click', function () {
    obtenerRecetaPorComida();
  });
  $('.contenedor_recetas').on('click', '.enlace-comida', function (event) {
    $('.comida-simple').remove();
    event.preventDefault(); // Evitar que el enlace realice su comportamiento predeterminado
    const comidaId = $(this).data('id');
    cargarDetallesComida(comidaId);
  });

});
