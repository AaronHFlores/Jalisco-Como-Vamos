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
