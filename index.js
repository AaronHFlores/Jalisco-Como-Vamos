const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
window.onload = function() {
  dOptionM();
	questionSelect();
};

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

/*function validCheckOF(){
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
function questionSelect(){
  var isChecked = document.getElementById('mun').checked;
  var isChecked1 = document.getElementById('genero').checked;
  var isChecked2 = document.getElementById('edad').checked;
  var isChecked3 = document.getElementById('escolaridad').checked;
  var isChecked4 = document.getElementById('nse').checked;

  if(isChecked){
    isChecked = document.getElementById('guadalajara').checked;
    isChecked1 = document.getElementById('zapopan').checked;
    isChecked2 = document.getElementById('tlaquepaque').checked;
    isChecked3 = document.getElementById('tonala').checked;
    isChecked4 = document.getElementById('tlajomulco').checked;
    var isChecked5 = document.getElementById('salto').checked;

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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Guadalajara"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Guadalajara"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Zapopan"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Tlaquepaque"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Tlaquepaque"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Tonal&aacute;"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Tonal&aacute;"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Tlajomulco"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Hombre"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Hombre"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contest&oacute;", ""]);

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
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Mujer"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Mujer"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "30-44"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "30-44"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "30-44"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "45-59"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "45-59"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "45-59"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "60+"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "60+"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "60+"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Secundaria"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Secundaria"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Secundaria"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Preparatoria"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Preparatoria"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Preparatoria"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "Universidad"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "Universidad"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "Universidad"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "A/B/C+"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "A/B/C+"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "A/B/C+"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "C/C-"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "C/C-"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "C/C-"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
  if(isChecked1){
    var customers = new Array();
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", "D+/D/E"]);
    customers.push(["Muy baja (1)", ""]);
    customers.push(["Algo baja (2)", ""]);
    customers.push(["Ni baja, ni alta (3)", ""]);
    customers.push(["Algo alta (4)", ""]);
    customers.push(["Muy alta (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", "D+/D/E"]);
    customers.push(["Nada feliz (1)", ""]);
    customers.push(["Poco feliz (2)", ""]);
    customers.push(["Ni feliz, ni infeliz (3)", ""]);
    customers.push(["Algo feliz (4)", ""]);
    customers.push(["Muy feliz (5)", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", "D+/D/E"]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
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
}
//Ocultar
function dOptionM(){
  questionSelect();
	dengue.municipio[0].disabled = false;
	dengue.municipio[1].disabled = false;
	dengue.municipio[2].disabled = false;
	dengue.municipio[3].disabled = false;
	dengue.municipio[4].disabled = false;
	dengue.municipio[5].disabled = false;

	dengue1.sexo[0].disabled = true;
	dengue1.sexo[1].disabled = true;

	dengue2.edad[0].disabled = true;
	dengue2.edad[1].disabled = true;
	dengue2.edad[2].disabled = true;
	dengue2.edad[3].disabled = true;

	dengue3.escolaridad[0].disabled = true;
	dengue3.escolaridad[1].disabled = true;
	dengue3.escolaridad[2].disabled = true;

	dengue4.nse[0].disabled = true;
	dengue4.nse[1].disabled = true;
	dengue4.nse[2].disabled = true;
}

function dOptionS(){
  questionSelect();
  dengue.municipio[0].disabled = true;
  dengue.municipio[1].disabled = true;
	dengue.municipio[2].disabled = true;
	dengue.municipio[3].disabled = true;
	dengue.municipio[4].disabled = true;
	dengue.municipio[5].disabled = true;

  dengue1.sexo[0].disabled = false;
  dengue1.sexo[1].disabled = false;

	dengue2.edad[0].disabled = true;
	dengue2.edad[1].disabled = true;
	dengue2.edad[2].disabled = true;
	dengue2.edad[3].disabled = true;

	dengue3.escolaridad[0].disabled = true;
	dengue3.escolaridad[1].disabled = true;
	dengue3.escolaridad[2].disabled = true;

	dengue4.nse[0].disabled = true;
	dengue4.nse[1].disabled = true;
	dengue4.nse[2].disabled = true;
}

function dOptionE(){
  questionSelect();
  dengue.municipio[0].disabled = true;
  dengue.municipio[1].disabled = true;
  dengue.municipio[2].disabled = true;
  dengue.municipio[3].disabled = true;
  dengue.municipio[4].disabled = true;
  dengue.municipio[5].disabled = true;

  dengue1.sexo[0].disabled = true;
  dengue1.sexo[1].disabled = true;

  dengue2.edad[0].disabled = false;
  dengue2.edad[1].disabled = false;
  dengue2.edad[2].disabled = false;
  dengue2.edad[3].disabled = false;

  dengue3.escolaridad[0].disabled = true;
  dengue3.escolaridad[1].disabled = true;
  dengue3.escolaridad[2].disabled = true;

  dengue4.nse[0].disabled = true;
  dengue4.nse[1].disabled = true;
  dengue4.nse[2].disabled = true;
}

function dOptionEs(){
  questionSelect();
  dengue.municipio[0].disabled = true;
  dengue.municipio[1].disabled = true;
  dengue.municipio[2].disabled = true;
  dengue.municipio[3].disabled = true;
  dengue.municipio[4].disabled = true;
  dengue.municipio[5].disabled = true;

	dengue1.sexo[0].disabled = true;
	dengue1.sexo[1].disabled = true;

	dengue2.edad[0].disabled = true;
	dengue2.edad[1].disabled = true;
	dengue2.edad[2].disabled = true;
	dengue2.edad[3].disabled = true;

	dengue3.escolaridad[0].disabled = false;
	dengue3.escolaridad[1].disabled = false;
	dengue3.escolaridad[2].disabled = false;

	dengue4.nse[0].disabled = true;
	dengue4.nse[1].disabled = true;
	dengue4.nse[2].disabled = true;
}

function dOptionNSE(){
  questionSelect();
  dengue.municipio[0].disabled = true;
  dengue.municipio[1].disabled = true;
  dengue.municipio[2].disabled = true;
  dengue.municipio[3].disabled = true;
  dengue.municipio[4].disabled = true;
  dengue.municipio[5].disabled = true;

	dengue1.sexo[0].disabled = true;
	dengue1.sexo[1].disabled = true;

	dengue2.edad[0].disabled = true;
	dengue2.edad[1].disabled = true;
	dengue2.edad[2].disabled = true;
	dengue2.edad[3].disabled = true;

	dengue3.escolaridad[0].disabled = true;
	dengue3.escolaridad[1].disabled = true;
	dengue3.escolaridad[2].disabled = true;

	dengue4.nse[0].disabled = false;
	dengue4.nse[1].disabled = false;
	dengue4.nse[2].disabled = false;
}
