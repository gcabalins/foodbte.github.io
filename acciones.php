
<?php
require_once "baseDatos.php";

header('Access-Control-Allow-Origin: *');
header('Content-type: text/json; charset=utf-8');

if($_POST['accion'] == "login"){
    // Proceso de inicio de sesión existente
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $clasemd5=md5($contrasena);
    if($usuario !== "" && $contrasena !== "") {
        $sql = "SELECT * FROM usuarios WHERE usuario='{$usuario}' AND contrasena='{$clasemd5}'";
        $result = $conexion->query($sql);
        $numero = $result->num_rows;
        
        if ($numero == 1) {
            $_SESSION['usuario'] = $usuario;
            echo json_encode(["mensaje" => "Conexion exitosa"]);
        } else {
            echo json_encode(["error" => "Usuario o contraseña incorrecta"]);
        }
    } else {
        echo json_encode(["error" => "Usuario o contraseña vacía"]);
    }
} else if($_POST['accion'] == "crearcuenta"){
    // Proceso de creación de cuenta
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $clasemd5=md5($contrasena);
    
    if($usuario !== "" && $contrasena !== "") {
        // Verificar si el usuario ya existe
        $sql_verificar = "SELECT * FROM usuarios WHERE usuario='{$usuario}'";
        $result_verificar = $conexion->query($sql_verificar);
        if($result_verificar->num_rows > 0) {
            echo json_encode(["error" => "El usuario ya existe"]);
        } else {
            // Insertar el nuevo usuario en la base de datos
            $sql_insertar = "INSERT INTO usuarios (usuario, contrasena) VALUES ('{$usuario}', '{$clasemd5}')";
            if($conexion->query($sql_insertar) === TRUE) {
                echo json_encode(["mensaje" => "Cuenta creada exitosamente"]);
            } else {
                echo json_encode(["error" => "Error al crear la cuenta"]);
            }
        }
    } else {
        echo json_encode(["error" => "Usuario o contraseña vacía"]);
    }
} else if($_POST['accion'] == "cambiarcontrasena"){
    // Verificar la contraseña actual
    $usuario = $_POST['usuario'];
    $contrasena_actual = $_POST['actualContrasena'];
    $nueva_contrasena = $_POST['nuevaContrasena'];
    $nueva_clave_md5 = md5($nueva_contrasena);
    
    // Consultar la contraseña actual del usuario
    $sql_consultar = "SELECT contrasena FROM usuarios WHERE usuario='{$usuario}'";
    $resultado = $conexion->query($sql_consultar);
    if($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $contrasena_bd = $fila['contrasena'];
        
        // Verificar si la contraseña actual coincide
        if(md5($contrasena_actual) == $contrasena_bd) {
            // Actualizar la contraseña del usuario
            $sql_actualizar = "UPDATE usuarios SET contrasena='{$nueva_clave_md5}' WHERE usuario='{$usuario}'";
            if($conexion->query($sql_actualizar) === TRUE) {
                echo json_encode(["mensaje" => "Contraseña cambiada exitosamente"]);
            } else {
                echo json_encode(["error" => "Error al actualizar la contraseña"]);
            }
        } else {
            echo json_encode(["error" => "La contraseña actual es incorrecta"]);
        }
    } else {
        echo json_encode(["error" => "Usuario no encontrado"]);
    }
}

   
?>



