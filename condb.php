<?php



function tablep1(){
  $conexion = pg_connect("host='localhost' dbname=JCV port=5432 user=postgres password=postgres") or die ("Error de Conexión".pg_last_error());
  $querycont = pg_query($conexion, "SELECT count(p1) as c FROM persona WHERE municipio = 'GUADALAJARA';");
  $fil = pg_fetch_array($querycont);
  $query = pg_query($conexion, "SELECT p1,count(p1)*100/".$fil['c']."as p FROM persona WHERE municipio = 'GUADALAJARA' GROUP BY p1 ORDER BY p1;");

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
