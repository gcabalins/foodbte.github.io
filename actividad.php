
<?php

$nobre="camilo";
$edad=10;
function votar($edad) {
if ($edad >= 18) {
return "Puedes votar";
} else {
return "No puedes votar";
}

}
$imprimir=votar($edad);
echo $imprimir;
?>


