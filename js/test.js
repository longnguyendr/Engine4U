function GetCars(format) {
  this.format = format;
  var url = 'http://localhost/car/index.php/api/car/cars';
  url += '.' + this.format;
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById('results').innerHTML += xhttp.responseText;
    }
  };
  xhttp.send();
}

function GetCarsByLocation() {
  var choose = document.getElementById('s_name').value;
  var datepick = document.getElementById('chkin').value;
  var datepickout = document.getElementById('chkout').value;
  var url = 'http://localhost/car/index.php/api/car/cars';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
    if(choose != '' ){
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {
            if (jsonData[x].location == choose ) {
              var data = '<table border="1">';
              data +=
                '<tr><td>' +
                jsonData[x].location +
                '</td><td> ' +
                jsonData[x].carID +
                '</td><td> ' +
                jsonData[x].starting_time +
                '</td><td> ' +
                jsonData[x].ending_time +
                '</td><td> ' +
                jsonData[x].description +
                '</td></tr>';
                data = data.link("../main/test2")
                data += '</table>' + '<br>';
                 document.getElementById('resultss').innerHTML += data;
            }
          }
        }
      };
      xhttp.send();
    }
    else {
      document.getElementById('resultss').innerHTML = "please input";
    }
}
/*
function GetCarsByLocation() {
  var choose = document.getElementById('s_name').value;
  var url = 'http://localhost/car/index.php/api/car/cars';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var jsonData = '';
  var data = '<table border="1">'+'<tr><td>' +
  'location' +
  '</td><td> ' +
  'carID' +
  '</td><td> ' +
  'description' +
  '</td></tr>';
  if(choose != '' )
  {
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML='';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {
            if(jsonData[x].location.toString().toLowerCase().search(choose.toLowerCase()) != -1)
            {
              data +=
                '<tr><td>' +
                jsonData[x].location +
                '</td><td> ' +
                jsonData[x].carID +
                '</td><td> ' +
                jsonData[x].description +
                '</td></tr>';
            }
            if ( jsonData[x].location == choose || jsonData[x].location.toString().toLowerCase().includes(choose.toLowerCase()) == true) {
              data +=
                '<tr><td>' +
                jsonData[x].location +
                '</td><td> ' +
                jsonData[x].carID +
                '</td><td> ' +
                jsonData[x].description +
                '</td></tr>';
            }
           else{
              data = '';
              document.getElementById('resultss').innerHTML = "Can't found a cars";
            }
          }
          data += '</table>';
          document.getElementById('resultss').innerHTML += data;
        }
      };
      xhttp.send();
  }
  else{
    document.getElementById('resultss').innerHTML = "please input location";
  }
}*/
