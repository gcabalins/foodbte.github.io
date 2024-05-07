
$(function () {
    console.log("Documento cargado");
    crearContenedores();
    //pagina de incio
    $('#contenedor').children().hide();

    $('#contenedor_recetas').show();
    $('.overlay').hide();
    crearTexto();
    crearCampo();
    crearContrasena();
    crearCheck();
    crearBoton();

    crearNavbar();
    crearNavbar2();
    crearOverlay();
    $('#checkLogin').prop('checked', false);
    crearBuscador();
    crearFavoritos();
    crearIndex();
    crearPaginacion();
    crearMensajes();
    crearMap();
    crearRecetas();


    function crearIndex() {
        $("#contenedor_index").append("<div id='noticias_index'>" +
            "</div>");
    }
    function crearContenedores() {
        $("#contenedor").append(" <div id='contenedor_login' class='contenedor_login'></div>" +
            "<div id='contenedor_cuenta' class='contenedor_cuenta'></div>" +
            "<div id='contenedor_imagen'><img src='banana.jpg' /></div>" +
            "<div id='contenedor_change' class='contenedor_change'></div>" +
            "<div id='contenedor_index' class='contenedor_index'>Inicio</div>" +
            "<div id='contenedor_productos' class='contenedor_productos'></div>" +
            "<div id='contenedor_favoritos' class='contenedor_favoritos'></div>" +
            "<div id='contenedor_map'></div>" +
            "<div id='contenedor_recetas' class='contenedor_recetas'></div>");

    }
    function crearPaginacion() {
        $("#contenedor_productos").append("<div id='pagination'><div id='pagination_contenedor'></div></div>");
    }
    function crearRecetas() {

        $("#contenedor_recetas").append("<div class='contenedor_buscador_recetas'>" +
            "<div class='search'>" +
            "<input type='text' id='buscador_recetas' placeholder='Introduce el nombre del alimento'>" +
            "<i  id='lupa_receta'class='fas fa-search icon ' ></i>" +
            "</div>" +
            "</div>");

        $("#contenedor_recetas").append("<div id='loadingIcon' style='display: none;'>" +
            "<div class='cube-wrapper'>" +
            "<div class='cube-folding'>" +
            "<span class='leaf1'></span>" +
            "<span class='leaf2'></span>" +
            "<span class='leaf3'></span>" +
            "<span class='leaf4'></span>" +
            "</div>" +
            "</div>" +
            "</div>");

        $("#contenedor_recetas").append("<div id='receta_aleatoria'>" +
            "<button class='boton_receta_aleatoria'>Receta aleatoria</button>" +
            "</div>");
      
    }

    function crearBuscador() {
        $("#contenedor_productos").append("<div class='contenedor_buscador'>" +
            "<div class='search'>" +
            "<input type='text' id='buscador' placeholder='Introduce el nombre del producto'>" +
            "<i  id='lupa_producto' class='fas fa-search icon' ></i>" +
            "</div>" +
            "</div>");
        $(".contenedor_buscador").append("<div class='filter-buttons'>" +
            "<div class='filter-button'>" +
            "<svg class='filled-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 13.616v-3.232c-1.651-.587-2.693-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.749-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.743-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 3.384c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm3-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3z'/></svg>" +
            "</div>" +
            "<label class='switch'>" +
            "<input type='checkbox'>" +
            "<span class='slider'></span>" +
            "</label>" +
            "<span id='aplicarFiltros'>Aplicar filtros</span>" +
            "</div>");
        $("#contenedor_productos").append("<div id='loadingIcon' style='display: none;'>" +
            "<div class='cube-wrapper'>" +
            "<div class='cube-folding'>" +
            "<span class='leaf1'></span>" +
            "<span class='leaf2'></span>" +
            "<span class='leaf3'></span>" +
            "<span class='leaf4'></span>" +
            "</div>" +
            "</div>" +
            "</div>");
        $("#contenedor_productos").append("<div id='imagen_buscada'>" +
            "<div id='producto_lista'>" +
            "</div>" +
            "</div>");

    }
    function crearFavoritos() {
        $("#contenedor_favoritos").append("<div id='producto_favoritos'>" +
            "</div>");
    }
    function crearNavbar() {
        $(".navbar").append(" <a id='login' href='#'><img id='logo' src='pixelcut-export (2) (1).png' /></a>");
        $(".navbar").append("<div id='enlaces'>" +
            "<a id='index' href='#'><i class='fa fa-fw fa-home'></i>Inicio</a>" +
            "<a  id='productos' href='#'><i class='fa fa-fw fa-search'></i>Productos</a>" +
            "<a id='crearcuenta' href='#'><i class='fa fa-fw fa-envelope'></i>Crear Cuenta</a>" +
            "<a  id='login' href='#'><i class='fa fa-fw fa-user'></i>Login</a>" +
            "<a  id='favoritos' href='#'><i class='fa fa-fw fa-heart'></i>Favoritos</a>" +
            "<a  id='map' href='#'><i class='fa fa-fw fa-map'></i>Map</a>" +
            "<a  id='recetas' href='#'><i class='fa fa-fw fa-cutlery'></i>Recetas</a>" +
            "</div>");

    }
    function crearNavbar2() {
        $(".navbar2").append("<a  class='index' href='#'><img id='logo' src='pixelcut-export (2) (1).png' /></a>");
        $(".navbar2").append("<div class='menu-button'>" +
            "<div class='circle'></div>" +
            "<div class='icono'>" +
            "<div class='lines'>☰</div>" +
            "<div class='cross'>✕</div>" +
            "</div>" +
            "</div>");

        // Agregar el segundo conjunto de elementos
        $(".navbar2").append("<div class='dropdown'>" +
            "<button class='btn btn-warning  btn-lg dropdown-toggle' type='button' id='dropdownMenuButton2' data-bs-toggle='dropdown' aria-expanded='false'>Contenidos</button>" +
            "<ul class='dropdown-menu dropdown-menu-dark' aria-labelledby='dropdownMenuButton2'>" +
            "<li><a class='dropdown-item' id='index' href='#'>Inicio</a></li>" +
            "<li><a class='dropdown-item' id='productos' href='#'>Productos</a></li>" +
            "<li><a class='dropdown-item' id='login' href='#'>Login</a></li>" +
            "<li><a class='dropdown-item' id='crearcuenta' href='#'> Crear  Cuenta</a></li>" +
            "<li><a class='dropdown-item' id='favoritos' href='#'>Favoritos</a></li>" +
            "<li><a  id='map' href='#'><i class='fa fa-fw fa-map'></i>Map</a></li>" +
            "<li><a  id='recetas' href='#'><i class='fa fa-fw fa-cutlery'></i>Recetas</a></li>" +
            "</ul>" +
            "</div>");
    }
    function crearMap() {
        $("#contenedor_map").append("<div id='map-wrapper'>" +
            "</div>");
    }

    function crearOverlay() {
        $(".overlay").append("<div class='menu-links'>" +
            "<a id='index' href='#'><i class='fa fa-fw fa-home'></i>Inicio</a>" +
            "<a  id='productos' href='#'><i class='fa fa-fw fa-search'></i>Productos</a>" +
            "<a id='crearcuenta' href='#'><i class='fa fa-fw fa-envelope'></i>Crear Cuenta</a>" +
            "<a  id='login' href='#'><i class='fa fa-fw fa-user'></i>Login</a>" +
            "<a  id='favoritos' href='#'><i class='fa fa-fw fa-heart'></i>Favoritos</a>" +
            "<a  id='map' href='#'><i class='fa fa-fw fa-map'></i>Map</a>" +
            "<a  id='recetas' href='#'><i class='fa fa-fw fa-cutlery'></i>Recetas</a>" +
            "</div>");
    }

    $(document).on("click", ".menu-button", function () {
        $(".overlay").fadeToggle();
        $(".icono").toggleClass("open");
        if ($(".menu-button").css("position") === "fixed") {
            $(".menu-button").css("position", "absolute");
        } else {
            $(".menu-button").css("position", "fixed");
        }
    });
    $(".overlay").on("click", "a", function () {
        $(".overlay").fadeOut();
        $(".icono").toggleClass("open");
        $(".menu-button").css("position", "absolute");
    });
    function crearBoton() {
        $(".contenedor_login").append("<button id='botonLogin' type='submit'>LOG IN</button>")
        $(".contenedor_cuenta").append("<button id='botonCuenta' type='submit'>Crear Cuenta</button>")
        $(".contenedor_change").append("<button id='botonChange' type='submit'>Cambiar Contraseña</button>")

    }

    function crearTexto() {
        $(".contenedor_login").append("<h4>Login to your account</h4>");
        $(".contenedor_cuenta").append("<h4>Create a new account</h4>");
        $(".contenedor_change").append("<h4>Cambiar Contraseña</h4>");
    }

    function crearCampo() {
        $('.contenedor_login').append("<input type='email' name='usernameLogin' id='usernameLogin' placeholder='Email'>");
        $('.contenedor_cuenta').append("<input type='email' name='usernameCuenta' id='usernameCuenta' placeholder='Email'>");
        $('.contenedor_change').append("<input type='text' name='usernameChange' id='usernameChange' placeholder='Email' autocomplete='new-password'>");
    }

    function crearContrasena() {
        $('.contenedor_login').append(
            "<div class='password-wrapper'>" +
            "<input type='password' name='password' id='passwordLogin' placeholder='Contraseña'>" +
            "<span class='password-toggle' id='toggleLogin'><span class='material-symbols-sharp'>visibility</span></span>" +
            "</div>"
        );

        $('.contenedor_cuenta').append(
            "<div class='password-wrapper'>" +
            "<input type='password' name='passwordCuenta' id='passwordCuenta' placeholder='Contraseña'>" +
            "<span class='password-toggle' id='toggleCuenta'><span class='material-symbols-sharp'>visibility</span>" +
            "</span>" +
            "</div>"
        );
        $('.contenedor_change').append(
            "<div class='password-wrapper'>" +
            "<input type='password' name='passwordChangeActual' id='passwordChangeActual' placeholder='Contraseña Actual'autocomplete='new-password'>" +
            "<span class='password-toggle' id='toggleChangeActual'><span class='material-symbols-sharp'>visibility</span>" +
            "</span>" +
            "</div>"
        );
        $('.contenedor_change').append(
            "<div class='password-wrapper'>" +
            "<input type='password' name='passwordChangeNueva' id='passwordChangeNueva' placeholder='Nueva Contraseña'autocomplete='new-password'>" +
            "<span class='password-toggle' id='toggleChangeNueva'><span class='material-symbols-sharp'>visibility</span>" +
            "</span>" +
            "</div>"
        );

        $(document).on("click", "#toggleLogin", function () {
            const passwordField = $("#passwordLogin");
            togglePasswordVisibility(passwordField);
        });

        $(document).on("click", "#toggleCuenta", function () {
            const passwordField = $("#passwordCuenta");
            togglePasswordVisibility(passwordField);
        });

        $(document).on("click", "#toggleChangeActual", function () {
            const passwordField = $("#passwordChangeActual");
            togglePasswordVisibility(passwordField);
        });

        $(document).on("click", "#toggleChangeNueva", function () {
            const passwordField = $("#passwordChangeNueva");
            togglePasswordVisibility(passwordField);
        });

    }

    function togglePasswordVisibility(passwordField) {
        const fieldType = passwordField.attr("type");
        if (fieldType === "password") {
            passwordField.attr("type", "text");
            passwordField.next(".password-toggle").find(".material-symbols-sharp").text("visibility_off");
        } else {
            passwordField.attr("type", "password");
            passwordField.next(".password-toggle").find(".material-symbols-sharp").text("visibility");
        }
    }



    function crearCheck() {
        $('.contenedor_login').append("<label class='checkbox-container' for='checkLogin'>Remember me</label>");
        $('.contenedor_login').append("<input type='checkbox' name='check' id='checkLogin'>");
        $('.contenedor_login').append("<span class='spanLogin'></span>");
        $('.contenedor_login').append("<br>");
        $('.contenedor_login').append("<a href='#'>Forgot your password?</a>");
        $('.contenedor_cuenta').append("<a  id ='changePassword' href='#'>Change Password</a>");
        $('.spanLogin').on('click', function () {
            var checkboxId = $(this).prev().attr('id');
            $('#' + checkboxId).prop('checked', function (i, val) {
                return !val;
            });
        });
    }

    function crearMensajes() {
        $('.contenedor_login').append("<div id='mensajeErrorLogin' class='mensaje-error-login'></div>");
        $('.contenedor_login').append("<div id='mensajeSuccessLogin' class='mensaje-success-login'></div>");
        $('.contenedor_cuenta').append("<div id='mensajeErrorCuenta' class='mensaje-error-cuenta'></div>");
        $('.contenedor_cuenta').append("<div id='mensajeSuccessCuenta' class='mensaje-success-cuenta'></div>");
        $('.contenedor_productos').append("<div id='mensajeErrorProductos' class='mensaje-error-productos'></div>");
        $('.contenedor_change').append("<div id='mensajeSuccessChange' class='mensaje-success-change'></div>");
        $('.contenedor_change').append("<div id='mensajeErrorChange' class='mensaje-error-change'></div>");
    }
    function aceptarLogin() {

        console.log("Respuesta del servidor: ");
        var usuario = $('#usernameLogin').val();
        if (!usuario) {
            mostrarMensajeError("Error: usuario no puede ser nulo");

            return;
        }
        var contrasena = $('#passwordLogin').val();
        if (!contrasena) {
            mostrarMensajeError("Error: contraseña no puede ser nula");
            $('#usernameLogin').trigger('focus');
            return;
        }
        $.post("acciones.php", {
            accion: "login",
            usuario: usuario,
            contrasena: contrasena,
        }, function (res) {
            console.log("Respuesta del servidor: ", res);
            if (res.mensaje === "Conexion exitosa") {

                mostrarMensajeSuccess("Se ha conectado exitosamente");
                rememberMe(usuario, contrasena);
                setTimeout(function () {
                    $('#contenedor').children().hide();
                }, 1000);

                // Se muestra #contenedor_productos después de un retraso de 2 segundos
                setTimeout(function () {
                    $('#contenedor_productos').show();
                }, 1000);
            } else {
                mostrarMensajeError("Contraseña o usuario incorrecto");
                $('#usernameLogin').val("");
                $('#usernameLogin').trigger('focus');
                $('#passwordLogin').val("");
            }
        }, 'json');
    }
    function aceptarCuenta() {
        console.log("Respuesta del servidor: ");
        var usuario = $('#usernameCuenta').val();
        if (!usuario) {
            mostrarMensajeError("Error: usuario no puede ser nulo");
            $('#usernameCuenta').trigger('focus');
            return;
        }
        var contrasena = $('#passwordCuenta').val();
        if (!contrasena) {
            mostrarMensajeError("Error: contraseña no puede ser nula");
            $('#usernameCuenta').trigger('focus');
            return;
        }
        /* var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
         // Verificar si el campo de correo electrónico es válido
         if (!emailRegex.test(usuario)) {
             mostrarMensajeError("Error: Introduce una dirección de correo electrónico válida");
             return;
         }*/
        $.post("acciones.php", {
            accion: "crearcuenta",
            usuario: usuario,
            contrasena: contrasena,
        }, function (res) {
            console.log("Respuesta del servidor: ", res);
            if (res.mensaje === "Cuenta creada exitosamente") {
                //window.location.href = "https://20bananas.com/";
                mostrarMensajeSuccess("Se ha creado la cuenta");
                setTimeout(function () {
                    $('#contenedor').children().hide();
                }, 1000);

                // Se muestra #contenedor_productos después de un retraso de 2 segundos
                setTimeout(function () {
                    $('#contenedor_productos').show();
                }, 1000);


            } else {
                mostrarMensajeError("Error al crear la cuenta");
                $('#usernameCuenta').val("");
                $('#usernameCuenta').trigger('focus');
                $('#passwordCuenta').val("");
            }
        }, 'json');
    }
    function aceptarChange() {
        console.log("Respuesta del servidor: ");
        var usuario = $('#usernameChange').val();
        if (!usuario) {
            mostrarMensajeError("Error: usuario no puede ser nulo");
            $('#usernameChange').trigger('focus');
            return;
        }
        var actualContrasena = $('#passwordChangeActual').val();
        if (!actualContrasena) {
            mostrarMensajeError("Error: contraseña no puede ser nula");
            $('#usernameChange').trigger('focus');
            return;
        }
        var nuevaContrasena = $('#passwordChangeNueva').val();
        if (!nuevaContrasena) {
            mostrarMensajeError("Error: contraseña no puede ser nula");
            $('#usernameChange').trigger('focus');
            return;
        }

        $.post("acciones.php", {
            accion: "cambiarcontrasena",
            usuario: usuario,
            actualContrasena: actualContrasena,
            nuevaContrasena: nuevaContrasena,
        }, function (res) {
            console.log("Respuesta del servidor: ", res);
            if (res.mensaje === "Contraseña cambiada exitosamente") {
                //window.location.href = "https://20bananas.com/";
                mostrarMensajeSuccess("Se ha cambiado la contraseña");
                setTimeout(function () {
                    $('#contenedor').children().hide();
                }, 1000);

                // Se muestra #contenedor_productos después de un retraso de 2 segundos
                setTimeout(function () {
                    $('#contenedor_productos').show();
                }, 1000);

            } else {
                mostrarMensajeError("Error al cambiar la contraseña");
                $('#usernameChange').val("");
                $('#usernameChange').trigger('focus');
                $('#passwordChange').val("");
            }
        }, 'json');
    }
    function rememberMe(usuario, contrasena) {
        if ($('#checkLogin').is(':checked')) {
            localStorage.setItem("username", usuario);
            localStorage.setItem("password", contrasena);
            localStorage.setItem("rememberMe", true);
        } else {
            localStorage.setItem("username", "");
            localStorage.setItem("password", "");
            localStorage.setItem("rememberMe", false);
        }
    }
    function mostrarMensajeSuccess(mensaje) {
        $('#mensajeSuccessLogin').text(mensaje).addClass('visible1');
        $('#mensajeSuccessCuenta').text(mensaje).addClass('visible1');
        $('#mensajeSuccessChange').text(mensaje).addClass('visible1');
    }

    function mostrarMensajeError(mensaje) {
        $('#mensajeErrorLogin').text(mensaje).addClass('visible2');
        $('#mensajeErrorCuenta').text(mensaje).addClass('visible2');
        $('#mensajeErrorChange').text(mensaje).addClass('visible2');
        $('#mensajeErrorProductos').text(mensaje).addClass('visible2');
    }

    $('#botonLogin').on('click', function () {
        console.log("boton pulsado");
        $('#mensajeSuccessLogin').removeClass('visible1');
        $('#mensajeErrorLogin').removeClass('visible2');
        aceptarLogin();
    });

    $('#botonCuenta').on('click', function () {
        $('#mensajeSuccessCuenta').removeClass('visible1');
        $('#mensajeErrorCuenta').removeClass('visible2');
        aceptarCuenta();
    });
    $('#botonChange').on('click', function () {
        $('#mensajeSuccessChange').removeClass('visible1');
        $('#mensajeErrorChange').removeClass('visible2');
        aceptarChange();
    });

    $(document).on('click', '#login', function () {
        $('#contenedor').children().hide();
        $('#contenedor_login').show();
        $('#contenedor_imagen').show();
        $('#mensajeSuccessLogin').removeClass('visible1');
        $('#mensajeErrorLogin').removeClass('visible2');

    });
    $(document).on('click', '#crearcuenta', function () {
        $('#contenedor').children().hide();
        $('#contenedor_cuenta').show();
        $('#contenedor_imagen').show();
        $('#mensajeSuccessCuenta').removeClass('visible1');
        $('#mensajeErrorCuenta').removeClass('visible2');
    });
    $(document).on('click', '#productos', function () {
        $('#contenedor').children().hide();
        $('#contenedor_productos').show();
        $('#mensajeErrorProductos').removeClass('visible2');
    });
    $(document).on('click', '#favoritos', function () {
        $('#contenedor').children().hide();
        $('#contenedor_favoritos').show();
    });
    $(document).on('click', '#recetas', function () {
        $('#contenedor').children().hide();
        $('#contenedor_recetas').show();
    });
    $(document).on('click', '#index', function () {
        $('#contenedor').children().hide();
        $('#contenedor_index').show();
    });
    $(document).on('click', '#map', function () {
        $('#contenedor').children().hide();
        $('#contenedor_map').show();
    });
    $(document).on('click', '#changePassword', function () {
        console.log("Botón pulsado");
        $('#contenedor').children().hide();
        $('#contenedor_change').show();
        $('#mensajeSuccessChange').removeClass('visible1');
        $('#mensajeErrorChange').removeClass('visible2');
    });


    if (localStorage.getItem("rememberMe") === "true") {
        $('#checkLogin').prop('checked', true);
        $('#usernameLogin').val(localStorage.getItem("username"));
        $('#passwordLogin').val(localStorage.getItem("password"));
    }
});
