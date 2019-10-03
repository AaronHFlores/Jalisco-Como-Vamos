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
  //Build an array containing Customer records.
  var customers = new Array();
  customers.push(["Customer Id", "Name", "Country"]);
  customers.push([1, "Juanito", "Pepe"]);
  customers.push([2, "Mudassar Khan", "India"]);
  customers.push([3, "Suzanne Mathews", "France"]);
  customers.push([4, "Robert Schidner", "Russia"]);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "1";

  //Get the count of columns.
  var columnCount = customers[0].length;

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = customers[0][i];
      row.appendChild(headerCell);
      /*if (municipio[0].checked == false and i == 1)
      {
        headerCell.style.display = "none";
      }*/

  }

  //Add the data rows.
  for (var i = 1; i < customers.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = customers[i][j];
          /*if (municipio[0].checked == false and j == 1)
          {
            headerCell.style.display = "none";
          }*/
      }
  }

  var dvTable = document.getElementById("tablaDatos");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", ""]);
    customers.push(["Nada satisfecho (1)", ""]);
    customers.push(["Poco satisfecho (2)", ""]);
    customers.push(["Ni satisfecho, ni insatisfecho (3)", ""]);
    customers.push(["Algo satisfecho (4)", ""]);
    customers.push(["Muy satisfecho (5)", ""]);
    customers.push(["No sabe / No contestó", ""]);

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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; usted con su vida", "18-29"]);
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
    customers.push(["&iquest;c&oacute;mo calificar&iacute;a su calidad de vida?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan feliz es usted?", ""]);
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
    customers.push(["&iquest;qu&eacute; tan satisfecha(o) est&aacute; con su vida afectiva emocional?", ""]);
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
