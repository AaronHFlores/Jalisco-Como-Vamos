const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

function GenerateTable() {
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Customer Id", "Name", "Country"]);
        customers.push([1, "John Hammond", "United States"]);
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
        }

        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }

        var dvTable = document.getElementById("tablaDatos");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }
function GenerateTableCustom() {
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

function dOptionM(){
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


	dengue1.sexo[0].disabled = false;
	dengue1.sexo[1].disabled = false;

	for (var i = 0; i <=5; i++) {
	dengue.municipio[i].disabled = true;
}
/*	dengue.municipio[1].disabled = true;
	dengue.municipio[2].disabled = true;
	dengue.municipio[3].disabled = true;
	dengue.municipio[4].disabled = true;
	dengue.municipio[5].disabled = true;*/
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

		for (var i = 0; i <=4; i++) {
			dengue2.edad[i].disabled = false;
		}
		for (var i = 0; i <=5; i++) {
			dengue.municipio[i].disabled = true;
		}
		for (var i = 0; i <=2; i++) {
			dengue1.sexo[i].disabled = true;
		}
		for (var i = 0; i <=3; i++) {
			dengue3.escolaridad[i].disabled = true;
		}
		for (var i = 0; i <=3; i++) {
		dengue4.nse[i].disabled = true;
	}

}

function dOptionEs(){
	for (var i = 0; i <=4; i++) {
		dengue2.edad[i].disabled = true;
	}
	for (var i = 0; i <=5; i++) {
		dengue.municipio[i].disabled = true;
	}
	for (var i = 0; i <=2; i++) {
		dengue1.sexo[i].disabled = true;
	}
	for (var i = 0; i <=3; i++) {
		dengue3.escolaridad[i].disabled = false;
	}
	for (var i = 0; i <=3; i++) {
	dengue4.nse[i].disabled = true;
	}

}
function dOptionNSE(){
	for (var i = 0; i <=4; i++) {
		dengue2.edad[i].disabled = true;
	}
	for (var i = 0; i <=5; i++) {
		dengue.municipio[i].disabled = true;
	}
	for (var i = 0; i <=2; i++) {
		dengue1.sexo[i].disabled = true;
	}
	for (var i = 0; i <=3; i++) {
		dengue3.escolaridad[i].disabled = true;
	}
	for (var i = 0; i <=3; i++) {
	dengue4.nse[i].disabled = false;
	}




}
/*function start() {
       var mybody =document.getElementsByTagName("body")[0];
       mytable     = document.createElement("table");
       mytablebody = document.createElement("tbody");

       for(var j = 0; j < 2; j++) {
           mycurrent_row=document.createElement("tr");
           for(var i = 0; i < 2; i++) {
               mycurrent_cell = document.createElement("td");
               currenttext = document.createTextNode("cell is:" + i + j);
               mycurrent_cell.appendChild(currenttext);
               mycurrent_row.appendChild(mycurrent_cell);
               // set the cell background color
               // if the column is 0. If the column is 1 hide the cel
               if (i == 0) {
                   mycurrent_cell.style.background = "rgb(255,0,0)";
               } else {
                   mycurrent_cell.style.display = "none";
               }
           }
           mytablebody.appendChild(mycurrent_row);
       }
       mytable.appendChild(mytablebody);
       mybody.appendChild(mytable);
    }*/
