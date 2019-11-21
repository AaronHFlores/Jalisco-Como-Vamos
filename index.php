<?php
  $conexion = pg_connect("host='localhost' dbname=jcv port=5432 user=postgres password=9693") or die ("Error de Conexión".pg_last_error());

  $query = pg_query($conexion, " SELECT * FROM persona ");

  $numReg = pg_num_rows($query);

  if($numReg>0){
  echo "<table border='1' align='center'>
  <tr bgcolor='lightgray'>
  <th>ID</th>
  <th>EDAD</th>
  <th>GENERO</th>
  <th>MUNICIPIO</th>
  <th>NSE 8x7</th>
  <th>NSE 6x7<th>
  </tr>";
  while ($fila=pg_fetch_array($query)) {
    echo "<tr><td>".$fila['ID']."</td>";
    echo "<td>".$fila['EDAD']."</td>";
    echo "<td>".$fila['GÉNERO']."</td>";
    echo "<td>".$fila['MUNICIPIO']."</td>";
    echo "<td>".$fila['NSE_8X7']."</td>";
    echo "<td>".$fila['NSE_6X7']."</td></tr>";
  }
  echo "</table> ";
  }
  else{
    echo "No hay Registros";
  }

  pg_close($conexion);

 ?>