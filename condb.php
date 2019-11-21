<?php

function options(){
  if ($_POST["pregunta1"] == "1") {
			tablep1();
	} if ($_POST["pregunta2"] == "2") {
  			tablep2();
  }if ($_POST["pregunta3"] == "3") {
    		tablep3();
  }if ($_POST["pregunta4"] == "4") {
      	tablep4();
  }
}

function search(){
  var $busqueda;
  if ($_POST["municipios"] != "municipio") {
    $busqueda. = "municipio = '".$_POST["municipios"]."' ";
  }
  if ($_POST["generos"] != "genero") {
    $busqueda. = "genero = '".$_POST["generos"]."' ";
  }
  if ($_POST["edades"] != "edad") {
    $busqueda. = "edad >= '".$_POST["edades"]."' ";
  }
  if ($_POST["nse8x7s"] != "nse8x7") {
    $busqueda. = "nse_8x7 = '".$_POST["nse8x7s"]."' ";
  }
  if ($_POST["nse6x7s"] != "nse8x7") {
    $busqueda. = "nse_6x7 = '".$_POST["nse6x7s"]."' ";
  }

  return $busqueda;
}

function tablep1(){
  $conexion = pg_connect("host='localhost' dbname=JCV port=5432 user=postgres password=postgres") or die ("Error de Conexión".pg_last_error());
  /*$bus = search();*/
  $querycont = pg_query($conexion, "SELECT count(p1) as c FROM persona WHERE municipio = 'GUADALAJARA' and genero='M' and edad <30 and (nse_6x7='C' or nse_6x7= 'C-');");
  $fil = pg_fetch_array($querycont);
  $query = pg_query($conexion, "SELECT p1,count(p1)*100/".$fil['c']." as p FROM persona WHERE municipio = 'GUADALAJARA' and genero='M' and edad <30 and (nse_6x7='C' or nse_6x7= 'C-') GROUP BY p1 ORDER BY p1;");

  $numReg = pg_num_rows($query);

  $quest = array(
    "Nada satisfecho (1)",
    "Poco satisfecho (2)",
    "Ni satisfecho, ni insatisfecho (3)",
    "Algo satisfecho (4)",
    "Muy satisfecho (5)",
  );

  if($numReg>0){
    echo "<table border='1' align='center'>
    <tr bgcolor='lightgray'>
    <th>¿qué tan satisfecha(o) está usted con su vida?</th>
    <th>Promedio</th>
    </tr>";
    while ($fila=pg_fetch_array($query)) {
      $z = $fila['p1'] - 1;
      echo "<tr><td>".$quest[$z]."</td>";
      echo "<td>".$fila['p']."</td></tr>";
    }
    echo "</table> ";
  }
  else{
    echo "No hay Registros";
  }

  pg_close($conexion);
}
tablep1();
function tablep2(){
  $conexion = pg_connect("host='localhost' dbname=JCV port=5432 user=postgres password=postgres") or die ("Error de Conexión".pg_last_error());

  $query = pg_query($conexion, "SELECT p2 FROM persona WHERE municipio = 'GUADALAJARA';");

  $numReg = pg_num_rows($query);

  $quest = array(
    "Muy baja (1)",
    "Algo baja (2)",
    "Ni baja, ni alta (3)",
    "Algo alta (4)",
    "Muy alta (5)",
  );

  if($numReg>0){
    echo "<table border='1' align='center'>
    <tr bgcolor='lightgray'>
    <th>¿qué tan satisfecha(o) está usted con su vida?</th>
    <th>Promedio</th>
    </tr>";
    $z = 0;
    while ($fila=pg_fetch_array($query)) {
      echo "<tr><td>".$quest[$z]."</td>";
      echo "<td>".$fila['p']."</td></tr>";
      $z = $z + 1;
    }
    echo "</table> ";
  }
  else{
    echo "No hay Registros";
  }

  pg_close($conexion);
}

function tablep3(){
  $conexion = pg_connect("host='localhost' dbname=JCV port=5432 user=postgres password=postgres") or die ("Error de Conexión".pg_last_error());

  $query = pg_query($conexion, "SELECT p3 FROM persona WHERE municipio = 'GUADALAJARA';");

  $numReg = pg_num_rows($query);

  $quest = array(
    "Nada feliz (1)",
    "Poco feliz (2)",
    "Ni feliz, ni infeliz (3)",
    "Algo feliz (4)",
    "Muy feliz (5)",
  );

  if($numReg>0){
    echo "<table border='1' align='center'>
    <tr bgcolor='lightgray'>
    <th>¿qué tan satisfecha(o) está usted con su vida?</th>
    <th>Promedio</th>
    </tr>";
    $z = 0;
    while ($fila=pg_fetch_array($query)) {
      echo "<tr><td>".$quest[$z]."</td>";
      echo "<td>".$fila['p']."</td></tr>";
      $z = $z + 1;
    }
    echo "</table> ";
  }
  else{
    echo "No hay Registros";
  }

  pg_close($conexion);
}

function tablep4(){
  $conexion = pg_connect("host='localhost' dbname=JCV port=5432 user=postgres password=postgres") or die ("Error de Conexión".pg_last_error());

  $query = pg_query($conexion, "SELECT p4 FROM persona WHERE municipio = 'GUADALAJARA';");

  $numReg = pg_num_rows($query);

  $quest = array(
    "Nada satisfecho (1)",
    "Poco satisfecho (2)",
    "Ni satisfecho, ni insatisfecho (3)",
    "Algo satisfecho (4)",
    "Muy satisfecho (5)",
  );

  if($numReg>0){
    echo "<table border='1' align='center'>
    <tr bgcolor='lightgray'>
    <th>¿qué tan satisfecha(o) está usted con su vida?</th>
    <th>Promedio</th>
    </tr>";
    $z = 0;
    while ($fila=pg_fetch_array($query)) {
      echo "<tr><td>".$quest[$z]."</td>";
      echo "<td>".$fila['p']."</td></tr>";
      $z = $z + 1;
    }
    echo "</table> ";
  }
  else{
    echo "No hay Registros";
  }

  pg_close($conexion);
}
 ?>
