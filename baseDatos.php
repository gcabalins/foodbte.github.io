<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: text/json; charset=utf-8');

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "usuarios";
$conexion = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conexion->connect_errno) {
    die("Error de conexión: " . $conexion->connect_error);
} else {
    session_start();

}



