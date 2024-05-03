const paises = [
    { display: 'Ninguno', value: '' },
    { display: 'Francia', value: 'en:france' },
    { display: 'Estados Unidos', value: 'en:united-states' },
    { display: 'España', value: 'en:spain' },
    { display: 'Suiza', value: 'en:switzerland' },
    { display: 'Alemania', value: 'en:germany' },
    { display: 'Bélgica', value: 'en:belgium' },
    { display: 'Reino Unido', value: 'en:united-kingdom' },
    { display: 'Italia', value: 'en:italy' },
    { display: 'Canadá', value: 'en:canada' },
    { display: 'Países Bajos', value: 'en:netherlands' },
    { display: 'Australia', value: 'en:australia' },
    { display: 'México', value: 'en:mexico' },
    { display: 'Portugal', value: 'en:portugal' },
    { display: 'Austria', value: 'en:austria' },
    { display: 'Suecia', value: 'en:sweden' },
    { display: 'Rusia', value: 'en:russia' },
    { display: 'Tailandia', value: 'en:thailand' },
    { display: 'Polonia', value: 'en:poland' },
    { display: 'Luxemburgo', value: 'en:luxembourg' },
    { display: 'Marruecos', value: 'en:morocco' },
    { display: 'Reunión', value: 'en:reunion' },
    { display: 'Rumania', value: 'en:romania' },
    { display: 'Bulgaria', value: 'en:bulgaria' },
    { display: 'Dinamarca', value: 'en:denmark' },
    { display: 'Irlanda', value: 'en:ireland' },
    { display: 'Brasil', value: 'en:brazil' },
    { display: 'Hungría', value: 'en:hungary' },
    { display: 'Singapur', value: 'en:singapore' },
    { display: 'Argelia', value: 'en:algeria' },
    { display: 'República Checa', value: 'en:czech-republic' },
    { display: 'Japón', value: 'en:japan' },
    { display: 'Argentina', value: 'en:argentina' },
    { display: 'Guadalupe', value: 'en:guadeloupe' }
];

const categorias = [
    { display: 'Ninguno', value: '' },
    { display: 'Alimentos a base de plantas', value: 'plant-based-foods' },
    { display: 'Snacks', value: 'snacks' },
    { display: 'Lácteos', value: 'dairies' },
    { display: 'Cereales', value: 'cereals' },
    { display: 'Alimentos fermentados', value: 'fermented-foods' },
    { display: 'Frutas y verduras', value: 'fruits-and-vegetables' },
    { display: 'Condimentos', value: 'condiments' },
    { display: 'Carnes', value: 'meats' },
    { display: 'Postres', value: 'desserts' },
    { display: 'Salsas', value: 'sauces' },
    { display: 'Quesos', value: 'cheeses' },
    { display: 'Mariscos', value: 'seafood' },
    { display: 'Pan', value: 'breads' },
    { display: 'Pastas', value: 'pastas' },
    { display: 'Pescados', value: 'fishes' }
];
const opcionsRadioButtons = [
    { display: 'Con', value: 'with' },
    { display: 'Sin', value: 'without' },
    { display: 'Indiferente', value: 'indifferent' }
];
function generarOpciones(alergeno) {
    return [
        { display: 'Con', value: alergeno },
        { display: 'Sin ', value: '' },
    ];
}

const milk = generarOpciones('milk');
const eggs = generarOpciones('eggs');
const gluten = generarOpciones('gluten');
const soybeans = generarOpciones('soybeans');
const nuts = generarOpciones('nuts');
const crustaceans = generarOpciones('crustaceans');

$(function () {
    $('#favoritos').on('click', mostrarFavoritos);
    $('#productos').on('click', mostrarFavoritos);
    $('#pagination').hide();
    $('.fas.fa-search').on('click', function () {
        buscarProducto();
    });
    localStorage.setItem('selectedCategoria', '');
    localStorage.setItem('selectedPais', '');
    localStorage.setItem('selectedAditivo', 'indifferent');
    localStorage.setItem('selectedAceitePalma', 'indifferent');
    localStorage.setItem('selectedLeche', '');
    localStorage.setItem('selectedHuevo', '');
    localStorage.setItem('selectedGluten', '');
    localStorage.setItem('selectedSoja', '');
    localStorage.setItem('selectedNueces', '');
    localStorage.setItem('selectedMarisco', '');
    $('#buscador').on('keypress keydown', function (event) {
        if (event.which === 13) {
            buscarProducto();
        }
    });
    $('.filled-icon').on('click', function () {
        mostrarfiltros();
    });


    function mostrarfiltros() {
        const modal = $('<div>').addClass('modal');
        const modalContent = $('<div>').addClass('modal-content-filter');
        const modalHeader = $('<div>').addClass('modal-header').append(
            $('<h2>').text('Filtros'),
            $('<span>').addClass('close').html('&times;')
        );
        const modalContentfilters = $('<div>').addClass('filters-container');
        const categoriasDropdown = $('<select>').addClass('categorias-dropdown');
        const paisesDropdown = $('<select>').addClass('paises-dropdown');
        const contenedorAplicarBtn = $('<div>').addClass('contenedor-aplicar-btn');
        const contenedorAplicar = $('<div>').addClass('contenedor-aplicar');

        const botonAplicar = $('<div>').addClass('boton-aplicar').attr('id', 'boton-filtros').html('APLICAR  ➡');
        botonAplicar.on('click', function () {
            var boton = $(".boton-aplicar");
            var contenedor = $(".contenedor-aplicar");
            var distanciaY = contenedor.offset().top - boton.offset().top;
            var distanciaX = contenedor.offset().left + (contenedor.outerWidth() / 2) - (boton.offset().left + (boton.outerWidth() / 2));
            boton.css("transform", "translate(" + distanciaX + "px, " + distanciaY + "px)");
            setTimeout(function () {
                boton.css("transform", "none");
            }, 150);
            setTimeout(function () {
                modal.remove();
                $(".switch input[type='checkbox']").prop('checked', true);
            }, 400);

        });
        $("#boton-filtros").click(function () {

        });
        contenedorAplicarBtn.append(contenedorAplicar, botonAplicar);

        var storedValueCategorias = localStorage.getItem('selectedCategoria');
        var storedValuePaises = localStorage.getItem('selectedPais');

        categorias.forEach(cat => {
            var option = $('<option>').text(cat.display).attr('value', cat.value);
            if (cat.value === storedValueCategorias) {
                option.prop('selected', true);
            }
            categoriasDropdown.append(option);
        });
        paises.forEach(cat => {
            var option = $('<option>').text(cat.display).attr('value', cat.value);
            if (cat.value === storedValuePaises) {
                option.prop('selected', true);
            }
            paisesDropdown.append(option);
        });

        const filtroArray = [categoriasDropdown, paisesDropdown];
        const filtroNames = ['Categoría:', 'País:'];

        filtroArray.forEach((cat, index) => {
            const filtroDiv = $('<div>').addClass('filtro').append(
                $('<p>').text(filtroNames[index]),
                cat
            );
            modalContentfilters.append(filtroDiv);
        });

        agregarRadioButtons(modalContentfilters, 'Aditivos:', 'aditivo', 'selectedAditivo', opcionsRadioButtons);
        agregarRadioButtons(modalContentfilters, 'Aceite de Palma:', 'aceitePalma', 'selectedAceitePalma', opcionsRadioButtons);

        agregarRadioButtons(modalContentfilters, 'Leche:', 'leche', 'selectedLeche', milk);
        agregarRadioButtons(modalContentfilters, 'Huevos:', 'huevo', 'selectedHuevo', eggs);
        agregarRadioButtons(modalContentfilters, 'Gluten:', 'gluten', 'selectedGluten', gluten);
        agregarRadioButtons(modalContentfilters, 'Soja:', 'soja', 'selectedSoja', soybeans);
        agregarRadioButtons(modalContentfilters, 'Nueces:', 'nueces', 'selectedNueces', nuts);
        agregarRadioButtons(modalContentfilters, 'Mariscos:', 'marisco', 'selectedMarisco', crustaceans);

        modalContentfilters.append(contenedorAplicarBtn);
        modalContent.append(modalHeader, modalContentfilters);
        modal.append(modalContent);
        $('body').append(modal);

        setTimeout(() => {
            $(".modal-content-filter").toggleClass("visible");
        }, 50);

        modal.show();
        categoriasDropdown.on('change', function () {
            var selectedValue = $(this).val();
            localStorage.setItem('selectedCategoria', selectedValue);
        });

        paisesDropdown.on('change', function () {
            var selectedValue = $(this).val();
            localStorage.setItem('selectedPais', selectedValue);
        });

        modal.on('click', (event) => {
            if ($(event.target).hasClass('modal')) {
                modal.remove();
            }
        });

        modal.find('.close').on('click', () => {
            modal.remove();
        });
    }


    function agregarRadioButtons(container, labelText, name, storageKey, options) {
        const radioContainer = $('<div>').addClass('filtro').addClass(name); // Agregamos una clase única basada en el nombre del grupo
        radioContainer.append($('<p>').text(labelText));
        options.forEach(option => {
            const radio = $('<input>').attr('type', 'radio').attr('name', name).val(option.value);
            const label = $('<label>').text(option.display).prepend(radio);
            radioContainer.append(label);
        });
        container.append(radioContainer);

        // Event listener para almacenar la opción seleccionada en localStorage
        radioContainer.find('input[type="radio"]').on('change', function () { // Usamos radioContainer.find en lugar de container.find
            var selectedValue = $(this).val();
            localStorage.setItem(storageKey, selectedValue);
        });

        // Establecer la opción seleccionada si está almacenada en localStorage
        var storedValue = localStorage.getItem(storageKey);
        if (storedValue) {
            radioContainer.find('input[type="radio"][value="' + storedValue + '"]').prop('checked', true);
        }
    }

    function buscarProducto() {
        $('.contenedor_buscador').hide();
        $('#loadingIcon').show();
        $('#pagination').hide();
        $('#producto_lista').empty();
        $('#mensajeErrorProductos').removeClass('visible2');
        var codigo = $('#buscador').val().trim();
        var apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl?action=process&search_simple=1&search_terms=' + codigo + '&json=true&page_size=24&page=1';

        if ($('.switch input[type="checkbox"]').is(':checked')) {
            if (!codigo) {
                mostrarMensajeError("Error: el buscador no puede ser nulo");
                $('#buscador').trigger('focus');
                $('#loadingIcon').hide();
                $('.contenedor_buscador').show();
                return;
            } else {
                const selectedPais = localStorage.getItem('selectedPais') || '';
                const selectedCategoria = localStorage.getItem('selectedCategoria') || '';
                const selectedHuevo = localStorage.getItem('selectedHuevo') || '';
                const selectedLeche = localStorage.getItem('selectedLeche') || '';
                const selectedGluten = localStorage.getItem('selectedGluten') || '';
                const selectedSoja = localStorage.getItem('selectedSoja') || '';
                const selectedAditivo = localStorage.getItem('selectedAditivo') || 'indifferent';
                const selectedAceitePalma = localStorage.getItem('selectedAceitePalma') || 'indifferent';
                const selectedNueces = localStorage.setItem('selectedNueces') || '';
                const selectedMarisco = localStorage.setItem('selectedMarisco') || '';

                apiUrl += '&tagtype_0=countries&tag_contains_0=contains&tag_0=' + selectedPais;
                apiUrl += '&tagtype_1=categories&tag_contains_1=contains&tag_1=' + selectedCategoria;
                apiUrl += '&tagtype_2=allergens&tag_contains_2=contains&tag_2=' + selectedLeche;
                apiUrl += '&tagtype_3=allergens&tag_contains_3=contains&tag_3=' + selectedHuevo;
                apiUrl += '&tagtype_4=allergens&tag_contains_4=contains&tag_4=' + selectedGluten;
                apiUrl += '&tagtype_5=allergens&tag_contains_5=contains&tag_5=' + selectedSoja;
                apiUrl += '&tagtype_6=allergens&tag_contains_6=contains&tag_6=' + selectedNueces;
                apiUrl += '&tagtype_7=allergens&tag_contains_7=contains&tag_7=' + selectedMarisco;

                apiUrl += '&ingredients_from_palm_oil=' + selectedAceitePalma;
                apiUrl += '&additives=' + selectedAditivo;
            }
        }
        var startedTime = new Date().getTime();
        var timeout = setTimeout(function () {
            mostrarMensajeError("La solicitud tardó demasiado tiempo. Intente nuevamente.");
            $('#loadingIcon').hide();
            $('.contenedor_buscador').show();
        }, 60000);

        $.get(apiUrl, function (data) {
            clearTimeout(timeout);
            var currentTime = new Date().getTime();
            if (currentTime - startedTime > 60000) {
                return;
            }
            if (data.products.length > 0) {
                // Ordenar los productos
                data.products.sort(function (a, b) {
                    var nombreA = a.product_name_es || "";
                    var nombreB = b.product_name_es || "";
                    if ((nombreA && nombreB) || (!nombreA && !nombreB)) {
                        return nombreA.localeCompare(nombreB);
                    }
                    else if (nombreA) {
                        return -1;
                    } else {
                        return 1;
                    }
                });

                data.products.forEach(function (producto) {
                    var imagenUrl = producto.image_front_url;
                    var nombreProducto = producto.product_name_es || producto.product_name;
                    var idProducto = producto.code;
                    var cantidad = producto.quantity;
                    var envase = producto.packaging;
                    var marcas = producto.brands;
                    var categoria = producto.categories;
                    //para traducir los productos
                    //https://es.libretranslate.com/?source=auto&target=es&q=Beverages%2C+Carbonated+drinks%2C+Waters%2C+Spring+waters%2C+Mineral+waters%2C+Carbonated+waters%2C+Natural+mineral+waters%2C+Carbonated+mineral+waters%2C+Carbonated+natural+mineral+waters%2C+Boissons-sans-sucre-ajoute
                    mostrarProducto(nombreProducto, imagenUrl, idProducto, cantidad, envase, marcas, categoria);
                });
                var pageCount = Math.ceil(data.count / 24);
                mostrarPaginacion(pageCount, 1);
            } else {
                mostrarMensajeError("No se encontraron resultados para el producto.");
            }
        }).fail(function (error) {
            clearTimeout(timeout);
            mostrarMensajeError("Hubo un error al procesar la solicitud.");
            console.error('Hubo un error al procesar la solicitud:', error);
        }).always(function () {
            $('#loadingIcon').hide();
            $('.contenedor_buscador').show();
        });
    }

    function mostrarPaginacion(pageCount, currentPage) {
        $('#pagination').show();
        var paginationContenedor = $('#pagination_contenedor');
        paginationContenedor.empty();
        var paginaLinkAnterior = $('<a>').append("<i class='fa-solid fa-chevron-left'></i>\nAnterior").attr('href', '#').on('click', function (e) {
            var pageNumber = currentPage - 1;
            actualizarPagina(pageNumber);
        });
        paginationContenedor.append(paginaLinkAnterior);
        for (var i = Math.max(currentPage, 1); i <= Math.min(currentPage + 2, pageCount); i++) {
            var paginaLink = $('<a>').append(i).attr('href', '#').on('click', function (e) {
                e.preventDefault();
                var pageNumber = $(this).text();
                actualizarPagina(pageNumber);
            });
            if (i === currentPage) {
                paginaLink.addClass('active');
            }
            paginationContenedor.append(paginaLink);
        }
        if (pageCount > 3) {
            paginationContenedor.append($('<strong>').append('···'));
        }
        for (var i = Math.max(pageCount, currentPage + 1); i <= pageCount; i++) {
            var paginaLink = $('<a>').append(i).attr('href', '#').on('click', function (e) {
                e.preventDefault();
                var pageNumber = $(this).text();
                actualizarPagina(pageNumber);
            });
            if (i === currentPage) {
                paginaLink.addClass('active');
            }
            paginationContenedor.append(paginaLink);
        }
        var paginaLinkSiguiente = $('<a>').append("Siguiente<i class='fa-solid fa-chevron-right'></i>").attr('href', '#').on('click', function (e) {
            e.preventDefault();
            var pageNumber = currentPage + 1;
            actualizarPagina(pageNumber);
        });
        paginationContenedor.append(paginaLinkSiguiente);
    }

    function actualizarPagina(pageNumber) {
        $('.contenedor_buscador').hide();
        $('#loadingIcon').show();
        $('#pagination').hide();
        $('#producto_lista').empty();
        var codigo = $('#buscador').val().trim();
        var apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=' + codigo + '&search_simple=1&action=process&json=true&page_size=24&page=' + pageNumber;

        $.get(apiUrl, function (data) {
            if (data.products.length > 0) {
                data.products.forEach(function (producto) {
                    var imagenUrl = producto.image_front_url;
                    var nombreProducto = producto.product_name;
                    var idProducto = producto.code;

                    mostrarProducto(nombreProducto, imagenUrl, idProducto);
                });
            } else {

            }
        }).fail(function (error) {
            console.error('Hubo un error al procesar la solicitud:', error);
        }).always(function () {
            $('#pagination').show();
            $('#loadingIcon').hide();
            $('.contenedor_buscador').show();
        });
    }

    function mostrarMensajeError(mensaje) {
        $('#mensajeErrorProductos').text(mensaje).addClass('visible2');

    }
    function crearVentanaModal() {
        var ventanaModal = $('<div>').attr('id', 'ventanaPedido').addClass('ventana_modal');
        var contenidoModal = $('<div>').addClass('contenido_modal');
        var spanCerrar = $('<span>').addClass('close').html('&times;');
        var parrafoConfirmacion = $('<p>').text('¿Estás seguro de realizar el pedido?');
        var botonConfirmarPedido = $('<button>').attr('id', 'botonConfirmarPedido').text('Confirmar');
        var botonCancelarPedido = $('<button>').attr('id', 'botonCancelarPedido').text('Cancelar');
    
        contenidoModal.append(spanCerrar, parrafoConfirmacion, botonConfirmarPedido, botonCancelarPedido);
        ventanaModal.append(contenidoModal);
        $('body').append(ventanaModal);
    
        // Evento click para cerrar la ventana modal
        $('.close, #botonCancelarPedido').on('click', function() {
            $('#ventanaPedido').fadeOut(100);
        });
    
        // Evento click para confirmar el pedido
        $('#botonConfirmarPedido').on('click', function() {
            // Aquí puedes agregar la lógica para realizar el pedido
            console.log('Pedido confirmado');
            $('#ventanaPedido').fadeOut(100);
        });
    }
    
    function mostrarProducto(nombre, urlImagen, idProducto, cantidad, envase, marcas, categoria) {
        // Verificar que la imagen no sea nula
        if (urlImagen === null) {
            console.error("La imagen de producto es nula");
            return;
        }
        
        // Crear la imagen
        var imagen = $('<img>').attr('src', urlImagen).addClass('imagen_producto');
        var divImagen = $('<div>').append(imagen).addClass('imagen_producto');
    
        // Verificar que el nombre del producto no sea nulo
        if (nombre === null) {
            console.error("El nombre del producto es nulo");
            return;
        }
        
        // Crear el elemento con el nombre del producto
        var nombreElemento = $('<div>').append('<a href="#">' + nombre + '</a>').addClass('nombre_producto');
        var boton = $('<button>').append('<p>Hacer pedido</p>').addClass('boton_pedido');
        var productoContainer = $('<div>').addClass('producto_lista');
    
        // Evento click para el botón de hacer pedido
        boton.on('click', function() {
            crearVentanaModal();
            $('#ventanaPedido').fadeIn(100);
        });
    
        // Parsear el objeto de productos favoritos JSON
        var likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || {};
    
        // Verificar si el producto está marcado como favorito
        var heart = $('<i>').addClass('fa-heart fa-2x');
        if (likedProducts[idProducto]) {
            heart.addClass('fa-solid');
        } else {
            heart.addClass('fa-regular');
        }
    
        heart.on("click", function () {
            var likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || {};
    
            var isLiked = likedProducts[idProducto];
    
            if (isLiked) {
                delete likedProducts[idProducto];
                $(this).removeClass('fa-solid').addClass('fa-regular');
            } else {
                likedProducts[idProducto] = {
                    nombre: nombre,
                    urlImagen: urlImagen
                };
                $(this).removeClass('fa-regular').addClass('fa-solid');
            }
            localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
            mostrarFavoritos();
        }).on('error', function (e) {
            console.error("Hubo un error al intentar marcar un producto como favorito:", e);
        });
    
        var divHeart = $('<div>').append(heart).addClass('heart');
        nombreElemento.append(divHeart);
        nombreElemento.append(boton);
    
        var botonAumentar = $('<button>').text('+').addClass('boton_cantidad');
        var botonDisminuir = $('<button>').text('-').addClass('boton_cantidad');
        var divBotones = $('<div>').addClass('div_botones_cantidad');
        var cantidadDePedidos = 0;
    
        botonAumentar.on('click', function() {
            if (cantidadDePedidos > 9) {
                mostrarCantidad();
            } else {
                cantidadDePedidos++;
                mostrarCantidad();
            }
        });
    
        botonDisminuir.on('click', function() {
            // Verificar que la cantidad no sea menor que 1
            if (cantidadDePedidos >= 1) {
                // Disminuir la cantidad
                cantidadDePedidos--;
                // Actualizar la visualización de la cantidad
                mostrarCantidad();
            }
        });
    
        function mostrarCantidad() {
            cantidadElemento.text('Cantidad: ' + cantidadDePedidos);
        }
    
        var cantidadElemento = $('<div>').addClass('cantidad_producto').text('Cantidad: ' + cantidadDePedidos);
        divBotones.append(cantidadElemento, botonDisminuir, botonAumentar);
        productoContainer.append(divImagen, nombreElemento, divBotones);
        $('#producto_lista').append(productoContainer);
        divImagen.on('click', function () {
            mostrarDetalleProducto(nombre, urlImagen, idProducto, envase, marcas, categoria, cantidad);
            zoom(urlImagen);
        });
        nombreElemento.find('a').on('click', function () {
            mostrarDetalleProducto(nombre, urlImagen, idProducto, envase, marcas, categoria, cantidad);
            zoom(urlImagen);
        });
    }
    
    
    function mostrarFavoritos() {
        var likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || {};
    
        $('#contenedor_favoritos').empty();
        if (Object.keys(likedProducts).length === 0) {
            $('#contenedor_favoritos').append('<p class="mensaje_vacio">No hay productos en favoritos</p>');
        } else {
            Object.keys(likedProducts).forEach(function (idProducto) {
                var producto = likedProducts[idProducto];
                var productoFavorito = $('<div>').addClass('producto_lista');
                var imagen = $('<img>').attr('src', producto.urlImagen);
                var boton = $('<button>').append('<p>Hacer pedido</p>').addClass('boton_pedido');
                var divImagen = $('<div>').append(imagen).addClass('imagen_producto');
                var nombreProductoElemento = $('<div>').text(producto.nombre).addClass('nombre_producto');
                var heart = $('<i>').addClass('fa-heart fa-2x fa-solid');
    
                heart.on('click', function () {
                    // Si el producto ya está marcado como favorito, eliminarlo de la lista
                    delete likedProducts[idProducto];
                    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
                    mostrarFavoritos();
                    var productoContainer = $('#producto_lista').find('[data-id="' + idProducto + '"]');
                    if (productoContainer.length > 0) {
                        var iconoCorazon = productoContainer.find('.heart i');
                        if (likedProducts[idProducto]) {
                            iconoCorazon.removeClass('fa-regular').addClass('fa-solid');
                        } else {
                            iconoCorazon.removeClass('fa-solid').addClass('fa-regular');
                        }
                    }
                });
                var botonAumentar = $('<button>').text('+').addClass('boton_cantidad');
                var botonDisminuir = $('<button>').text('-').addClass('boton_cantidad');
                var divBotones = $('<div>').addClass('div_botones_cantidad');
                var cantidadDePedidos = 0;
            
                botonAumentar.on('click', function() {
                    if (cantidadDePedidos > 9) {
                        mostrarCantidad();
                    }else{
                    cantidadDePedidos++;
                    mostrarCantidad();
                }
                });
            
                botonDisminuir.on('click', function() {
                    // Verificar que la cantidad no sea menor que 1
                    if (cantidadDePedidos >= 1) {
                        // Disminuir la cantidad
                        cantidadDePedidos--;
                        // Actualizar la visualización de la cantidad
                        mostrarCantidad();
                    }
                });
                function mostrarCantidad() {
                    cantidadElemento.text('Cantidad: ' + cantidadDePedidos);
                }
            
                var cantidadElemento = $('<div>').addClass('cantidad_producto').text('Cantidad: ' + cantidadDePedidos);
                divBotones.append(cantidadElemento, botonDisminuir,botonAumentar);
                var divHeart = $('<div>').append(heart).addClass('heart');
                nombreProductoElemento.append(divHeart);
                nombreProductoElemento.append(boton);
                productoFavorito.append(divImagen, nombreProductoElemento,divBotones);
                $('#contenedor_favoritos').append(productoFavorito);
            });
        }
    }
    



    function mostrarDetalleProducto(name, imageUrl, id, packaging, brands, category, quantity) {
        const modal = $('<div>').addClass('modal');
        const modalContent = $('<div>').addClass('modal-content');
        const closeModal = $('<span>').addClass('close').html('&times;');

        const idProducto = $('<p>').append(`<b>ID del producto:</b> ${id}`);
        const title = $('<h3>').append(name);
        const image = $('<img>').attr('src', imageUrl).addClass('thumb');
        const cantidadDisponible = $('<p>').append(`<b>Cantidad disponible:</b> ${quantity}`);
        const marcas = $('<p>').append(`<b>Marcas:</b> ${brands}`);
        const categoria = $('<p>').append(`<b>Categoría:</b> ${category}`);
        const envase = $('<p>').append(`<b>Envase:</b> ${packaging}`);
        const preview = $('<div>').addClass('magnifier-preview').attr('id', 'preview');
        const imageWrapper = $('<div>').append(image).addClass('magnifier-thumb-wrapper');
        const divImagen = $('<div>').append(imageWrapper, preview).addClass('zoom');
        
        modalContent.append(closeModal, divImagen, title, idProducto, cantidadDisponible, marcas, categoria, envase);
        modal.append(modalContent);
        $('body').append(modal);
        setTimeout(() => {
            $(".modal-content").toggleClass("visible");
        }, 50);
        modal.show();
        modal.on('click', (event) => {
            if ($(event.target).hasClass('modal')) {
                modal.remove();
            }
        });
        modal.find('.close').on('click', () => {
            modal.remove();

        });

        $('.magnifier-thumb-wrapper').mouseenter(function () {
            $('#preview').addClass('hovered');
        }).mouseleave(function () {
            $('#preview').removeClass('hovered');
        });

    }



    function zoom(imageUrl) {
        const event = new Event();
        magnifierInstance = new Magnifier(event);
        magnifierInstance.attach({
            thumb: '.thumb',
            large: imageUrl,
            largeWrapper: 'preview',

        });
    }

});
