<html>
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>JCV</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/> -->

    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <!--footer-->
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <!--footer-->
    <link rel="stylesheet" href="css/estilos.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/87/three.js"></script>


    <!--reference your JS file here. Mine looks like below-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!--    <script src="http://code.jquery.com/jquery-latest.js"></script>-->
    <script src="./index.js"></script>
    <style>

/*
    fijoH{
        position:fixed;
        font-family:verdana,arial;
        font-size:11pt;
        text-align:center;
        padding: 10px 5px 10px 5px;
        top: 10px;
        left: 0px;
        width:50%;
        background-color:white;
        z-index: 1;
    }
*/
    .fijoT {
        position:absolute;
        margin: 205px 5px 10px 5px;     /*margen con valores: arriba - derecha - abajo - izquierda */
        font-family:verdana,arial;
        font-size:10pt;

    }

/*
    .background_div_body{
      background-color:  #eb3750;
    }

*/
/*
    .header-shadow {
      -moz-box-shadow: 0 3px 5px rgba(0,0,0,.1);
      -webkit-box-shadow: 0 3px 5px rgba(0,0,0,.1);
      box-shadow: 0 3px 5px rgba(0,0,0,.1);
    }
*/

/*
    p , td, th{
      color: white;
    }
*/

    </style>
</head>
<!--<main onload = "dOptionM()">-->
    <body >
<!--
        <header >
            <div class="logo">
            <div class = "container-fluid fijo header-shadow">
                <img id = "img" src="https://i.ibb.co/w4rX45g/jcvretina2.png" alt="jcvretina2" border="2" width="250" height="100">
            </div>

            <nav>
                <a href="#">InicioA</a>
                <a href="#">Blog</a>
                <a href="#">Contacto</a>
            </nav>


        </header>
-->

        <header class="header">
            <div class="logo">
                <img id = "img" src="https://i.ibb.co/w4rX45g/jcvretina2.png" alt="jcvretina2" border="2" width="250" height="100">
            </div>
            <div class="container logo-nav-container">
                <span class="menu-icon">Menú</span>
                <a href="#" class="logo"></a>
                <nav class="navigation">
                    <ul class="show">
                        <li><a href="http://www.jaliscocomovamos.org/">Inicio</a></li>
                        <li><a href="http://www.jaliscocomovamos.org/blog">Blog</a></li>
                        <li><a href="http://www.jaliscocomovamos.org/contactanos-2">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="main">

            <div class="info-container">
                <div class="info-main">
                    <h3>Encuestas</h3>
                    <p>En esta página podrás clasificar nuestros datos a partir de las siguientes 4 preguntas básicas; tienes la libertad de combinar diferentes categorías, eligiendo algún municipio, edad, género, etc. <br><br>
                    De esta forma crearás tablas con la información que hemos recabado y mostrártela de forma mucho mas visual y legible :D
                    </p>
<!--                    <a href="#">Mas Info</a>-->
                </div>
            </div>
        </main>


        <form action="tabla.php" method="post">
<!--     CHECKBOX DE LAS PREGUNTAS-->
<!--        <div>-->
          <center>
              <div class=" btn-group btn-group-toggle" data-toggle="buttons" style="padding-top: 1em;" >
                  <button class="btn btn-secondary btn-xs" type="submit" name="pregunta" value = 1 id ="p1">&iquest;Qu&eacute; tan satisfecha(o) est&aacute; <br> usted con su vida?</button>
                  <button class="btn btn-primary btn-xs" type = "submit" name="pregunta" value = 2 id ="p2"> &iquest;C&oacute;mo calificar&iacute;a su calidad<br> de vida?</button>
                  <button style="width:250px; height:62px" class="btn btn-secondary btn-xs" type="submit" name="pregunta" value = 3 id ="p3">&iquest;Qu&eacute; tan feliz es usted?</button>
                  <button class="btn btn-primary btn-xs" type="submit" name="pregunta" value = 4 id ="p4"> &iquest;Qu&eacute; tan satisfecha(o) est&aacute;<br> con su vida afectiva emocional?</button>
              </div>
          </center>
          <!--        </div>-->

          <br>

          <!--     COMBO BOX DE LAS CATEGORÍAS-->

          <center>
          <div class="btn btn-group">

              <!--    Municipios    -->
              <div class="dropdownMunicipios">
                <select name="municipios" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="municipios">

                  <option value="'GUADALAJARA' or municipio ='ZAPOPAN' or municipio ='TONALÁ' or municipio = 'TLAQUEPAQUE' or municipio = 'TLAJOMULCO DE ZÚÑIGA' or municipio = 'EL SALTO')">Municipio</option>
                  <option value="'GUADALAJARA')">Guadalajara</option>
                  <option value="'ZAPOPAN')">Zapopan</option>
                  <option value="'TLAQUEPAQUE')">Tlaquepaque</option>
                  <option value="'TLAJOMULCO DE ZÚÑIGA')">Tlajomulco</option>
                  <option value="'EL SALTO')">El Salto</option>
                  <option value="'TONALÁ')">Tonalá</option>
                </select>
              </div>

              <!--    Género    -->
              <div class="dropdownGenero">
                  <select name="generos" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="generos">

                  <option value="'H' or genero= 'M')">Género</option>

                  <option value="'H')">Hombre</option>
                  <option value="'M')">Mujer</option>
                </select>
              </div>

              <!--    Edades    -->
              <div class="dropdownEdades">
                  <select name="edades" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="edades">

                  <option value="18 and edad <= 29) or (edad >=30 and edad <= 44) or (edad>=45 and edad <= 59) or edad>=60)">Edad</option>

                  <option value="18 and edad <= 29))">18 - 29</option>
                  <option value="30 and edad <= 44))">30 - 44</option>
                  <option value="45 and edad <= 59))">45 - 59</option>
                  <option value="60">60+</option>
                </select>
              </div>

          <!--
                  Escolaridad
              <div class="dropdownEscolaridades">
                  <select name="escolaridades" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="escolaridades">

                  <option value="escolaridad">Escolaridad</option>

                  <option value="secundaria<">Secundaria&lt; </option>
                  <option value="preparatoria">Preparatoria</option>
                  <option value="universidad+">Universidad+</option>
                </select>
              </div>
          -->

              <!--    NSE 8X7    -->
              <div class="dropdownNSE8X7">
                  <select name="nse8x7s" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="nse8x7s">

                  <option value="'AB' or nse_8x7='C+' or nse_8x7='C' or nse_8x7='C-' or nse_8x7='D+' or nse_8x7='D' or nse_8x7='E')">NSE 8X7</option>

                  <option value="'AB' or nse_8x7 = 'C+')">A/B/C+</option>
                  <option value="'C' or nse_8x7 = 'C-')">C/C-</option>
                  <option value="'D+' or nse_8x7 = 'D' or nse_8x7 = 'E')">D+/D/E</option>
                </select>
              </div>

              <!--    NSE 8X7    -->
              <div class="dropdownNSE6X7">
                  <select name="nse6x7s" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value="nse6x7">

                  <option value="'AB' or nse_6x7='C+' or nse_6x7='C' or nse_6x7='C-' or nse_6x7='D+' or nse_6x7='D' or nse_6x7='E')">NSE 6X7</option>

                  <option value="'AB' or nse_6x7 = 'C+')">A/B/C+</option>
                  <option value="'C' or nse_6x7 = 'C-')">C/C-</option>
                  <option value="'D+' or nse_6x7 = 'D' or nse_6x7 = 'E')">D+/D/E</option>
                </select>
              </div>
          </div>
          </center>

        <br><br>
      </form>

        <!--TABLE-->
        <div id="table">

        </div>


        <!--FOOTER  -->
        <footer>
            <div class="footer-container">
                <div class="footer-main">

                    <div class="footer-columna">
                        <h3>Escríbenos</h3>
                        <input type="email" placeholder="Ingrese Su Correo">
                        <br><br>
                        <input type="submit" class="btn btn-default btn-xs " value="Enviar">
                    </div>

                    <div class="footer-columna">
                        <h3>Dirección</h3>
                        <span class="fa fa-map-marker"><p>2118 Av. Guadalupe Zuno - Col. Lafayette, Gdl, Jal.</p></span>
                        <span class="fa fa-phone"><p>(+52) 33 40 40 54 25</p></span>
                        <span class="fa fa-envelope"><p>contacto@jaliscocomovamos.org</p></span>

                    </div>
                </div>
            </div>

            <div class="footer-copy-redes">
                <div class="main-copy-redes">
                    <div class="footer-copy">
                        &copy; 2019 Todos los Derechos Reservados - Jalisco Como Vamos.
                    </div>

                    <div class="footer-redes">
                        <a href="https://www.facebook.com/jaliscomovamos/" class="fa fa-facebook"> </a>
                        <a href="https://twitter.com/jaliscomovamos?lang=es" class="fa fa-twitter"> </a>
                    </div>
                </div>

            </div>
        </footer>

    </body>
<!--</main>-->
</html>
