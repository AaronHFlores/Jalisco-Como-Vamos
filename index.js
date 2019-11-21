const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
window.onload = function() {
  dOptionM();
	questionSelect();
};

/*window.addEventListener( 'resize', () => {
	let width = window.innerWidth
  let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($this).scrollTop() > 0){
            $('header').addClass(headerFix);
        }else{
            $('header').removeClass(headerFix);
        }
    });
});

function validCheckOF(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;
  if (isChecked == true && isChecked1 == false && isChecked2 == false && isChecked3 == false){
    check.pregunta[0].disabled = true;
  }
}

function validCheckOB(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;
  if (isChecked == true && (isChecked1 == true ||  isChecked2 == true || isChecked3 == true)){
    check.pregunta[0].disabled = false;
  }
}*/
$('.dropdown-toggle').dropdown(){

}

function conecion(){

}



function questionSelect(){
  var isChecked = document.getElementById('mun').val;
  var isChecked1 = document.getElementById('genero').checked;
  var isChecked2 = document.getElementById('edad').checked;
  var isChecked3 = document.getElementById('escolaridad').checked;
  var isChecked4 = document.getElementById('nse').checked;
  var isChecked5 = document.getElementById('nsee').checked;

  if(isChecked){
    isChecked = document.getElementById('guadalajara').checked;
    isChecked1 = document.getElementById('zapopan').checked;
    isChecked2 = document.getElementById('tlaquepaque').checked;
    isChecked3 = document.getElementById('tonala').checked;
    isChecked4 = document.getElementById('tlajomulco').checked;
    isChecked5 = document.getElementById('salto').checked;

    if(isChecked){
      GenerateTableG();
    }
    else if(isChecked1){
      GenerateTableZ();
    }
    else if(isChecked2){
      GenerateTableT();
    }
    else if(isChecked3){
      GenerateTableTo();
    }
    else if(isChecked4){
      GenerateTableTl();
    }
    else if(isChecked5){
      GenerateTableS();
    }
  }
  else if (isChecked1){
    isChecked = document.getElementById('hombre').checked;
    isChecked1 = document.getElementById('mujer').checked;

    if(isChecked){
      GenerateTableH();
    }
    else if(isChecked1){
      GenerateTableM();
    }
  }
  else if (isChecked2){
    isChecked = document.getElementById('adultoJoven').checked;
    isChecked1 = document.getElementById('adulto').checked;
    isChecked2 = document.getElementById('adultoMedio').checked;
    isChecked3 = document.getElementById('adultoMayor').checked;

    if(isChecked){
      GenerateTableE1();
    }
    else if(isChecked1){
      GenerateTableE2();
    }
    else if(isChecked2){
      GenerateTableE3();
    }
    else if(isChecked3){
      GenerateTableE4();
    }
  }
  else if (isChecked3){
    isChecked = document.getElementById('secundaria').checked;
    isChecked1 = document.getElementById('preparatoria').checked;
    isChecked2 = document.getElementById('universidad').checked;

    if(isChecked){
      GenerateTableSe();
    }
    else if(isChecked1){
      GenerateTableP();
    }
    else if(isChecked2){
      GenerateTableU();
    }
  }
  else if (isChecked4){
    isChecked = document.getElementById('alto').checked;
    isChecked1 = document.getElementById('medio').checked;
    isChecked2 = document.getElementById('bajo').checked;

    if(isChecked){
      GenerateTableA();
    }
    else if(isChecked1){
      GenerateTableMe();
    }
    else if(isChecked2){
      GenerateTableB();
    }
  }
  else if (isChecked5){
    isChecked = document.getElementById('altoo').checked;
    isChecked1 = document.getElementById('medioo').checked;
    isChecked2 = document.getElementById('bajoo').checked;

    if(isChecked){
      GenerateTableAA();
    }
    else if(isChecked1){
      GenerateTableMee();
    }
    else if(isChecked2){
      GenerateTableBB();
    }
  }
}

//Municipio
function GenerateTableG() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Guadalajara"]);
    customers.push(["Nada satisfecho (1)", "1.6%"]);
    customers.push(["Poco satisfecho (2)", "4.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "8.7%"]);
    customers.push(["Algo satisfecho (4)", "33.7%"]);
    customers.push(["Muy satisfecho (5)", "51.9%"]);
    customers.push(["No sabe / No contest&oacute;", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Guadalajara"]);
    customers.push(["Muy baja (1)", "0.9%"]);
    customers.push(["Algo baja (2)", "6.2%"]);
    customers.push(["Ni baja, ni alta (3)", "28.1%"]);
    customers.push(["Algo alta (4)", "42.4%"]);
    customers.push(["Muy alta (5)", "22.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Guadalajara"]);
    customers.push(["Nada feliz (1)", "0.7%"]);
    customers.push(["Poco feliz (2)", "5.0%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "12.0%"]);
    customers.push(["Algo feliz (4)", "32.7%"]);
    customers.push(["Muy feliz (5)", "49.7%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Guadalajara"]);
    customers.push(["Nada satisfecho (1)", "0.7%"]);
    customers.push(["Poco satisfecho (2)", "7.3%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "12.1%"]);
    customers.push(["Algo satisfecho (4)", "44.9%"]);
    customers.push(["Muy satisfecho (5)", "35.0%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableZ(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Zapopan"]);
    customers.push(["Nada satisfecho (1)", "0.8%"]);
    customers.push(["Poco satisfecho (2)", "8.2%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.0%"]);
    customers.push(["Algo satisfecho (4)", "39.3%"]);
    customers.push(["Muy satisfecho (5)", "40.6%"]);
    customers.push(["No sabe / No contest&oacute;", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Zapopan"]);
    customers.push(["Muy baja (1)", "0.9%"]);
    customers.push(["Algo baja (2)", "6.2%"]);
    customers.push(["Ni baja, ni alta (3)", "28.1%"]);
    customers.push(["Algo alta (4)", "42.4%"]);
    customers.push(["Muy alta (5)", "22.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Zapopan"]);
    customers.push(["Nada feliz (1)", "0.7%"]);
    customers.push(["Poco feliz (2)", "5.0%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "12.0%"]);
    customers.push(["Algo feliz (4)", "32.7%"]);
    customers.push(["Muy feliz (5)", "49.7%"]);
    customers.push(["No sabe / No contest&oacute", ""]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Zapopan"]);
    customers.push(["Nada satisfecho (1)", "0.7%"]);
    customers.push(["Poco satisfecho (2)", "7.3%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "12.1%"]);
    customers.push(["Algo satisfecho (4)", "44.9%"]);
    customers.push(["Muy satisfecho (5)", "35.0%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableT(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Tlaquepaque"]);
    customers.push(["Nada satisfecho (1)", "0.7%"]);
    customers.push(["Poco satisfecho (2)", "5.4%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "8.0%"]);
    customers.push(["Algo satisfecho (4)", "41.6%"]);
    customers.push(["Muy satisfecho (5)", "44.3%"]);
    customers.push(["No sabe / No contest&oacute;", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Tlaquepaque"]);
    customers.push(["Muy baja (1)", "1.3%"]);
    customers.push(["Algo baja (2)", "6.9%"]);
    customers.push(["Ni baja, ni alta (3)", "30.1%"]);
    customers.push(["Algo alta (4)", "43.1%"]);
    customers.push(["Muy alta (5)", "18.6%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Tlaquepaque"]);
    customers.push(["Nada feliz (1)", "0.7%"]);
    customers.push(["Poco feliz (2)", "2.9%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "9.3%"]);
    customers.push(["Algo feliz (4)", "39.5%"]);
    customers.push(["Muy feliz (5)", "47.6%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Tlaquepaque"]);
    customers.push(["Nada satisfecho (1)", "1.4%"]);
    customers.push(["Poco satisfecho (2)", "9.7%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.0%"]);
    customers.push(["Algo satisfecho (4)", "43.1%"]);
    customers.push(["Muy satisfecho (5)", "35.8%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableTo(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Tonal&aacute;"]);
    customers.push(["Nada satisfecho (1)", "1.6%"]);
    customers.push(["Poco satisfecho (2)", "4.0%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.8%"]);
    customers.push(["Algo satisfecho (4)", "32.8%"]);
    customers.push(["Muy satisfecho (5)", "49.2%"]);
    customers.push(["No sabe / No contest&oacute;", "0.6%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Tonal&aacute;"]);
    customers.push(["Muy baja (1)", "1.8%"]);
    customers.push(["Algo baja (2)", "4.1%"]);
    customers.push(["Ni baja, ni alta (3)", "37.7%"]);
    customers.push(["Algo alta (4)", "37.3%"]);
    customers.push(["Muy alta (5)", "18.8"]);
    customers.push(["No sabe / No contest&oacute", "0.4%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Tonal&aacute;"]);
    customers.push(["Nada feliz (1)", "1.1%"]);
    customers.push(["Poco feliz (2)", "2.2%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "12.0%"]);
    customers.push(["Algo feliz (4)", "34.1%"]);
    customers.push(["Muy feliz (5)", "50.1%"]);
    customers.push(["No sabe / No contest&oacute", "0.5%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Tonal&aacute;"]);
    customers.push(["Nada satisfecho (1)", "1.8%"]);
    customers.push(["Poco satisfecho (2)", "5.8%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "12.3%"]);
    customers.push(["Algo satisfecho (4)", "38.7%"]);
    customers.push(["Muy satisfecho (5)", "41.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableTl(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Tlajomulco"]);
    customers.push(["Nada satisfecho (1)", "0.9%"]);
    customers.push(["Poco satisfecho (2)", "3.9%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "13.3%"]);
    customers.push(["Algo satisfecho (4)", "40.0%"]);
    customers.push(["Muy satisfecho (5)", "41.9%"]);
    customers.push(["No sabe / No contest&oacute;", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Tlajomulco"]);
    customers.push(["Muy baja (1)", "1.2%"]);
    customers.push(["Algo baja (2)", "8.6%"]);
    customers.push(["Ni baja, ni alta (3)", "36.2%"]);
    customers.push(["Algo alta (4)", "38.7%"]);
    customers.push(["Muy alta (5)", "15.2%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Tlajomulco"]);
    customers.push(["Nada feliz (1)", "1.7%"]);
    customers.push(["Poco feliz (2)", "4.0%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "10.4%"]);
    customers.push(["Algo feliz (4)", "37.8%"]);
    customers.push(["Muy feliz (5)", "46.0%"]);
    customers.push(["No sabe / No contest&oacute", ""]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Tlajomulco"]);
    customers.push(["Nada satisfecho (1)", "2.9%"]);
    customers.push(["Poco satisfecho (2)", "5.3%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "14.8%"]);
    customers.push(["Algo satisfecho (4)", "42.4%"]);
    customers.push(["Muy satisfecho (5)", "34.%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableS(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "El Salto"]);
    customers.push(["Nada satisfecho (1)", "1.9%"]);
    customers.push(["Poco satisfecho (2)", "6.6%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "15.7%"]);
    customers.push(["Algo satisfecho (4)", "35.5%"]);
    customers.push(["Muy satisfecho (5)", "40.3%"]);
    customers.push(["No sabe / No contest&oacute;", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "El Salto"]);
    customers.push(["Muy baja (1)", "1.0%"]);
    customers.push(["Algo baja (2)", "9.0%"]);
    customers.push(["Ni baja, ni alta (3)", "36.3%"]);
    customers.push(["Algo alta (4)", "36.0%"]);
    customers.push(["Muy alta (5)", "17.7%"]);
    customers.push(["No sabe / No contest&oacute", ""]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "El Salto"]);
    customers.push(["Nada feliz (1)", "1.5%"]);
    customers.push(["Poco feliz (2)", "3.5%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "16.1%"]);
    customers.push(["Algo feliz (4)", "39.4"]);
    customers.push(["Muy feliz (5)", "39.5%"]);
    customers.push(["No sabe / No contest&oacute", ""]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "El Salto"]);
    customers.push(["Nada satisfecho (1)", "1.8%"]);
    customers.push(["Poco satisfecho (2)", "6.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "14.1%"]);
    customers.push(["Algo satisfecho (4)", "44.9%"]);
    customers.push(["Muy satisfecho (5)", "33.1%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}
//Genero
function GenerateTableH(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Hombre"]);
    customers.push(["Nada satisfecho (1)", "1.0%"]);
    customers.push(["Poco satisfecho (2)", "4.3%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.8%"]);
    customers.push(["Algo satisfecho (4)", "37.3%"]);
    customers.push(["Muy satisfecho (5)", "46.5%"]);
    customers.push(["No sabe / No contest&oacute;", "0.0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Hombre"]);
    customers.push(["Muy baja (1)", "0.8%"]);
    customers.push(["Algo baja (2)", "6.4%"]);
    customers.push(["Ni baja, ni alta (3)", "31.0%"]);
    customers.push(["Algo alta (4)", "43.1%"]);
    customers.push(["Muy alta (5)", "18.4%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Hombre"]);
    customers.push(["Nada feliz (1)", "1.2%"]);
    customers.push(["Poco feliz (2)", "3.2%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "9.6%"]);
    customers.push(["Algo feliz (4)", "36.5%"]);
    customers.push(["Muy feliz (5)", "49.4%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Hombre"]);
    customers.push(["Nada satisfecho (1)", "1.3%"]);
    customers.push(["Poco satisfecho (2)", "6.0%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.6%"]);
    customers.push(["Algo satisfecho (4)", "43.0%"]);
    customers.push(["Muy satisfecho (5)", "39.0%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableM(){
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Mujer"]);
    customers.push(["Nada satisfecho (1)", "1.4%"]);
    customers.push(["Poco satisfecho (2)", "6.7%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "9.9%"]);
    customers.push(["Algo satisfecho (4)", "36.6%"]);
    customers.push(["Muy satisfecho (5)", "45.4%"]);
    customers.push(["No sabe / No contest&oacute;", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Mujer"]);
    customers.push(["Muy baja (1)", "1.3%"]);
    customers.push(["Algo baja (2)", "7.0%"]);
    customers.push(["Ni baja, ni alta (3)", "32.5%"]);
    customers.push(["Algo alta (4)", "40.5%"]);
    customers.push(["Muy alta (5)", "18.6%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Mujer"]);
    customers.push(["Nada feliz (1)", "1.1%"]);
    customers.push(["Poco feliz (2)", "4.7%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "13.2%"]);
    customers.push(["Algo feliz (4)", "36.8%"]);
    customers.push(["Muy feliz (5)", "44.1%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Mujer"]);
    customers.push(["Nada satisfecho (1)", "2.1%"]);
    customers.push(["Poco satisfecho (2)", "8.8%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.6%"]);
    customers.push(["Algo satisfecho (4)", "44.5%"]);
    customers.push(["Muy satisfecho (5)", "33.0%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}
//Edad
function GenerateTableE1() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
    customers.push(["Nada satisfecho (1)", "0.7%"]);
    customers.push(["Poco satisfecho (2)", "3.8%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "8.9%"]);
    customers.push(["Algo satisfecho (4)", "37.6%"]);
    customers.push(["Muy satisfecho (5)", "49.0%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "18-29"]);
    customers.push(["Muy baja (1)", "0.2%"]);
    customers.push(["Algo baja (2)", "4.8%"]);
    customers.push(["Ni baja, ni alta (3)", "24.9%"]);
    customers.push(["Algo alta (4)", "48.1%"]);
    customers.push(["Muy alta (5)", "21.9%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "18-29"]);
    customers.push(["Nada feliz (1)", "1.1%"]);
    customers.push(["Poco feliz (2)", "2.2%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "9.1%"]);
    customers.push(["Algo feliz (4)", "32.6%"]);
    customers.push(["Muy feliz (5)", "55.0%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "18-29"]);
    customers.push(["Nada satisfecho (1)", "0.4%"]);
    customers.push(["Poco satisfecho (2)", "5.7%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.2%"]);
    customers.push(["Algo satisfecho (4)", "43.6%"]);
    customers.push(["Muy satisfecho (5)", "39.1%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableE2() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "30-44"]);
    customers.push(["Nada satisfecho (1)", "1.1%"]);
    customers.push(["Poco satisfecho (2)", "3.7%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.5%"]);
    customers.push(["Algo satisfecho (4)", "38.4%"]);
    customers.push(["Muy satisfecho (5)", "46.4%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "30-44"]);
    customers.push(["Muy baja (1)", "0.3%"]);
    customers.push(["Algo baja (2)", "5.6%"]);
    customers.push(["Ni baja, ni alta (3)", "29.9%"]);
    customers.push(["Algo alta (4)", "45.9%"]);
    customers.push(["Muy alta (5)", "18.4%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "30-44"]);
    customers.push(["Nada feliz (1)", "1.1%"]);
    customers.push(["Poco feliz (2)", "2.8%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "10.7%"]);
    customers.push(["Algo feliz (4)", "40.3%"]);
    customers.push(["Muy feliz (5)", "45.1%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "30-44"]);
    customers.push(["Nada satisfecho (1)", "2.9%"]);
    customers.push(["Poco satisfecho (2)", "6.6%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.4%"]);
    customers.push(["Algo satisfecho (4)", "45.3%"]);
    customers.push(["Muy satisfecho (5)", "34.7%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableE3() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "45-59"]);
    customers.push(["Nada satisfecho (1)", "1.9%"]);
    customers.push(["Poco satisfecho (2)", "8.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.3%"]);
    customers.push(["Algo satisfecho (4)", "33.4%"]);
    customers.push(["Muy satisfecho (5)", "45.3%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "45-59"]);
    customers.push(["Muy baja (1)", "1.9%"]);
    customers.push(["Algo baja (2)", "9.3%"]);
    customers.push(["Ni baja, ni alta (3)", "37.8%"]);
    customers.push(["Algo alta (4)", "33.8%"]);
    customers.push(["Muy alta (5)", "17.0%"]);
    customers.push(["No sabe / No contest&oacute", "0.3%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "45-59"]);
    customers.push(["Nada feliz (1)", "0.9%"]);
    customers.push(["Poco feliz (2)", "5.8%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "11.8%"]);
    customers.push(["Algo feliz (4)", "38.6%"]);
    customers.push(["Muy feliz (5)", "42.7%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "45-59"]);
    customers.push(["Nada satisfecho (1)", "1.7%"]);
    customers.push(["Poco satisfecho (2)", "7.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.3%"]);
    customers.push(["Algo satisfecho (4)", "43.9%"]);
    customers.push(["Muy satisfecho (5)", "36.0%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableE4() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "60+"]);
    customers.push(["Nada satisfecho (1)", "1.2%"]);
    customers.push(["Poco satisfecho (2)", "8.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.2%"]);
    customers.push(["Algo satisfecho (4)", "40.1%"]);
    customers.push(["Muy satisfecho (5)", "39.2%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "60+"]);
    customers.push(["Muy baja (1)", "2.8%"]);
    customers.push(["Algo baja (2)", "8.3%"]);
    customers.push(["Ni baja, ni alta (3)", "39.0%"]);
    customers.push(["Algo alta (4)", "35.5%"]);
    customers.push(["Muy alta (5)", "14.2%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "60+"]);
    customers.push(["Nada feliz (1)", "1.9%"]);
    customers.push(["Poco feliz (2)", "6.4%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "17.7%"]);
    customers.push(["Algo feliz (4)", "34.7%"]);
    customers.push(["Muy feliz (5)", "39.3%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "60+"]);
    customers.push(["Nada satisfecho (1)", "2.1%"]);
    customers.push(["Poco satisfecho (2)", "13.8%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "12.1%"]);
    customers.push(["Algo satisfecho (4)", "41.2%"]);
    customers.push(["Muy satisfecho (5)", "30.8%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}
//Escolaridad
function GenerateTableSe() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Secundaria"]);
    customers.push(["Nada satisfecho (1)", "1.5%"]);
    customers.push(["Poco satisfecho (2)", "7.6%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "13.3%"]);
    customers.push(["Algo satisfecho (4)", "35.5%"]);
    customers.push(["Muy satisfecho (5)", "41.9%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Secundaria"]);
    customers.push(["Muy baja (1)", "1.6%"]);
    customers.push(["Algo baja (2)", "8.4%"]);
    customers.push(["Ni baja, ni alta (3)", "39.9%"]);
    customers.push(["Algo alta (4)", "34.0%"]);
    customers.push(["Muy alta (5)", "16.0%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Secundaria"]);
    customers.push(["Nada feliz (1)", "1.6%"]);
    customers.push(["Poco feliz (2)", "5.6%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "14.9%"]);
    customers.push(["Algo feliz (4)", "37.0%"]);
    customers.push(["Muy feliz (5)", "40.9%"]);
    customers.push(["No sabe / No contest&oacute", "0.0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Secundaria"]);
    customers.push(["Nada satisfecho (1)", "2.7%"]);
    customers.push(["Poco satisfecho (2)", "9.7%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "12.7%"]);
    customers.push(["Algo satisfecho (4)", "45.2%"]);
    customers.push(["Muy satisfecho (5)", "29.6%"]);
    customers.push(["No sabe / No contest&oacute", "0.0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableP() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Preparatoria"]);
    customers.push(["Nada satisfecho (1)", "0.4%"]);
    customers.push(["Poco satisfecho (2)", "4.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "7.1%"]);
    customers.push(["Algo satisfecho (4)", "39.4%"]);
    customers.push(["Muy satisfecho (5)", "49.1%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Preparatoria"]);
    customers.push(["Muy baja (1)", "0.3%"]);
    customers.push(["Algo baja (2)", "6.5%"]);
    customers.push(["Ni baja, ni alta (3)", "27.8%"]);
    customers.push(["Algo alta (4)", "40.8%"]);
    customers.push(["Muy alta (5)", "24.5%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Preparatoria"]);
    customers.push(["Nada feliz (1)", "0.8%"]);
    customers.push(["Poco feliz (2)", "3.1%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "7.6%"]);
    customers.push(["Algo feliz (4)", "32.9%"]);
    customers.push(["Muy feliz (5)", "55.6%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Preparatoria"]);
    customers.push(["Nada satisfecho (1)", "0.3%"]);
    customers.push(["Poco satisfecho (2)", "6.6%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "9.0%"]);
    customers.push(["Algo satisfecho (4)", "40.5%"]);
    customers.push(["Muy satisfecho (5)", "43.7%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableU() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "Universidad"]);
    customers.push(["Nada satisfecho (1)", "1.3%"]);
    customers.push(["Poco satisfecho (2)", "3.0%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "7.6%"]);
    customers.push(["Algo satisfecho (4)", "36.8%"]);
    customers.push(["Muy satisfecho (5)", "51.3%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Universidad"]);
    customers.push(["Muy baja (1)", "0.7%"]);
    customers.push(["Algo baja (2)", "3.7%"]);
    customers.push(["Ni baja, ni alta (3)", "19.2%"]);
    customers.push(["Algo alta (4)", "58.0%"]);
    customers.push(["Muy alta (5)", "18.1%"]);
    customers.push(["No sabe / No contest&oacute", "0.3%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Universidad"]);
    customers.push(["Nada feliz (1)", "0.8%"]);
    customers.push(["Poco feliz (2)", "1.6%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "8.7%"]);
    customers.push(["Algo feliz (4)", "38.5%"]);
    customers.push(["Muy feliz (5)", "50.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Universidad"]);
    customers.push(["Nada satisfecho (1)", "1.0%"]);
    customers.push(["Poco satisfecho (2)", "4.0%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "9.8%"]);
    customers.push(["Algo satisfecho (4)", "44.3%"]);
    customers.push(["Muy satisfecho (5)", "40.9%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}
//NSE
function GenerateTableA() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "A/B/C+"]);
    customers.push(["Nada satisfecho (1)", "0.8%"]);
    customers.push(["Poco satisfecho (2)", "3.2%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "7.4%"]);
    customers.push(["Algo satisfecho (4)", "35.4%"]);
    customers.push(["Muy satisfecho (5)", "53.3%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "A/B/C+"]);
    customers.push(["Muy baja (1)", "0.1%"]);
    customers.push(["Algo baja (2)", "4.1%"]);
    customers.push(["Ni baja, ni alta (3)", "21.9%"]);
    customers.push(["Algo alta (4)", "51.4%"]);
    customers.push(["Muy alta (5)", "22.1%"]);
    customers.push(["No sabe / No contest&oacute", "0.3%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "A/B/C+"]);
    customers.push(["Nada feliz (1)", "0.6%"]);
    customers.push(["Poco feliz (2)", "2.7%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "8.4%"]);
    customers.push(["Algo feliz (4)", "38.3%"]);
    customers.push(["Muy feliz (5)", "50.0%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "A/B/C+"]);
    customers.push(["Nada satisfecho (1)", "0.6%"]);
    customers.push(["Poco satisfecho (2)", "4.4%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "8.1%"]);
    customers.push(["Algo satisfecho (4)", "46.0%"]);
    customers.push(["Muy satisfecho (5)", "40.9%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableMe() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "C/C-"]);
    customers.push(["Nada satisfecho (1)", "0.4%"]);
    customers.push(["Poco satisfecho (2)", "3.9%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "9.4%"]);
    customers.push(["Algo satisfecho (4)", "42.0%"]);
    customers.push(["Muy satisfecho (5)", "44.1%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "C/C-"]);
    customers.push(["Muy baja (1)", "0.9%"]);
    customers.push(["Algo baja (2)", "6.2%"]);
    customers.push(["Ni baja, ni alta (3)", "30.4%"]);
    customers.push(["Algo alta (4)", "44.1%"]);
    customers.push(["Muy alta (5)", "18.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "C/C-"]);
    customers.push(["Nada feliz (1)", "1.3%"]);
    customers.push(["Poco feliz (2)", "3.1%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "8.9%"]);
    customers.push(["Algo feliz (4)", "37.9%"]);
    customers.push(["Muy feliz (5)", "48.7%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "C/C-"]);
    customers.push(["Nada satisfecho (1)", "1.8%"]);
    customers.push(["Poco satisfecho (2)", "6.9%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "11.4%"]);
    customers.push(["Algo satisfecho (4)", "43.6%"]);
    customers.push(["Muy satisfecho (5)", "36.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableB() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "D+/D/E"]);
    customers.push(["Nada satisfecho (1)", "2.1%"]);
    customers.push(["Poco satisfecho (2)", "9.4%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "13.4%"]);
    customers.push(["Algo satisfecho (4)", "33.5%"]);
    customers.push(["Muy satisfecho (5)", "41.5%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "D+/D/E"]);
    customers.push(["Muy baja (1)", "2.1%"]);
    customers.push(["Algo baja (2)", "9.8%"]);
    customers.push(["Ni baja, ni alta (3)", "40.3%"]);
    customers.push(["Algo alta (4)", "31.7%"]);
    customers.push(["Muy alta (5)", "16.1%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "D+/D/E"]);
    customers.push(["Nada feliz (1)", "1.3%"]);
    customers.push(["Poco feliz (2)", "5.8%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "17.2%"]);
    customers.push(["Algo feliz (4)", "33.8%"]);
    customers.push(["Muy feliz (5)", "41.9%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "D+/D/E"]);
    customers.push(["Nada satisfecho (1)", "2.3%"]);
    customers.push(["Poco satisfecho (2)", "10.5%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "13.5%"]);
    customers.push(["Algo satisfecho (4)", "43.0%"]);
    customers.push(["Muy satisfecho (5)", "30.6%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}
//NSE (8x7)
function GenerateTableAA() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "A/B/C+"]);
    customers.push(["Nada satisfecho (1)", "0.7%"]);
    customers.push(["Poco satisfecho (2)", "3.9%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "6.8%"]);
    customers.push(["Algo satisfecho (4)", "37.9%"]);
    customers.push(["Muy satisfecho (5)", "50.6%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "A/B/C+"]);
    customers.push(["Muy baja (1)", "0.3%"]);
    customers.push(["Algo baja (2)", "4.1%"]);
    customers.push(["Ni baja, ni alta (3)", "22.8%"]);
    customers.push(["Algo alta (4)", "50.6%"]);
    customers.push(["Muy alta (5)", "21.8%"]);
    customers.push(["No sabe / No contest&oacute", "0.3%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "A/B/C+"]);
    customers.push(["Nada feliz (1)", "0.6%"]);
    customers.push(["Poco feliz (2)", "3.1%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "8.0%"]);
    customers.push(["Algo feliz (4)", "38.0%"]);
    customers.push(["Muy feliz (5)", "50.3%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "A/B/C+"]);
    customers.push(["Nada satisfecho (1)", "0.7%"]);
    customers.push(["Poco satisfecho (2)", "6.0%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "9.6%"]);
    customers.push(["Algo satisfecho (4)", "43.4%"]);
    customers.push(["Muy satisfecho (5)", "40.2%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableMee() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "C/C-"]);
    customers.push(["Nada satisfecho (1)", "1.0%"]);
    customers.push(["Poco satisfecho (2)", "3.8%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.7%"]);
    customers.push(["Algo satisfecho (4)", "37.7%"]);
    customers.push(["Muy satisfecho (5)", "46.8%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "C/C-"]);
    customers.push(["Muy baja (1)", "0.9%"]);
    customers.push(["Algo baja (2)", "6.5%"]);
    customers.push(["Ni baja, ni alta (3)", "32.7%"]);
    customers.push(["Algo alta (4)", "40.9%"]);
    customers.push(["Muy alta (5)", "18.9%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "C/C-"]);
    customers.push(["Nada feliz (1)", "1.4%"]);
    customers.push(["Poco feliz (2)", "3.1%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "11.5%"]);
    customers.push(["Algo feliz (4)", "35.3%"]);
    customers.push(["Muy feliz (5)", "48.7%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "C/C-"]);
    customers.push(["Nada satisfecho (1)", "1.4%"]);
    customers.push(["Poco satisfecho (2)", "5.9%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "10.0%"]);
    customers.push(["Algo satisfecho (4)", "45.3%"]);
    customers.push(["Muy satisfecho (5)", "37.4%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}

function GenerateTableBB() {
  var isChecked = document.getElementById('p1').checked;
  var isChecked1 = document.getElementById('p2').checked;
  var isChecked2 = document.getElementById('p3').checked;
  var isChecked3 = document.getElementById('p4').checked;

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";

  if (isChecked){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "D+/D/E"]);
    customers.push(["Nada satisfecho (1)", "1.8%"]);
    customers.push(["Poco satisfecho (2)", "9.8%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "14.2%"]);
    customers.push(["Algo satisfecho (4)", "35.9%"]);
    customers.push(["Muy satisfecho (5)", "38.0%"]);
    customers.push(["No sabe / No contest&oacute", "0.2%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "D+/D/E"]);
    customers.push(["Muy baja (1)", "2.3%"]);
    customers.push(["Algo baja (2)", "10.3%"]);
    customers.push(["Ni baja, ni alta (3)", "42.1%"]);
    customers.push(["Algo alta (4)", "31.3%"]);
    customers.push(["Muy alta (5)", "14.0%"]);
    customers.push(["No sabe / No contest&oacute", "0%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if (isChecked2){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "D+/D/E"]);
    customers.push(["Nada feliz (1)", "1.2%"]);
    customers.push(["Poco feliz (2)", "6.5%"]);
    customers.push(["Ni feliz, ni infeliz (3)", "16.4%"]);
    customers.push(["Algo feliz (4)", "37.2%"]);
    customers.push(["Muy feliz (5)", "38.6%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
  if(isChecked3){
    var customers = new Array();
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "D+/D/E"]);
    customers.push(["Nada satisfecho (1)", "3.4%"]);
    customers.push(["Poco satisfecho (2)", "11.1%"]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", "15.0%"]);
    customers.push(["Algo satisfecho (4)", "42.9%"]);
    customers.push(["Muy satisfecho (5)", "27.4%"]);
    customers.push(["No sabe / No contest&oacute", "0.1%"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = customers[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
    dvTable.appendChild(table);
  }
}
