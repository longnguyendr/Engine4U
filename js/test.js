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
    if(choose.trim().length > 0 || datepick.trim().length >0 ){
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {
            if (jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase()) || choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase())) {
              var data = '<table border="1">';
              data +=
                '<tr><td>' +
                jsonData[x].city +
                '</td><td> ' +
                jsonData[x].carID +
                '</td><td> ' +
                jsonData[x].type_of_car +
                '</td></tr>';
                data = data.link("../main/test2/"+ jsonData[x].carID)
                data += '</table>' + '<br>';
                 document.getElementById('resultss').innerHTML += data;
            }
            else if(jsonData[x].starting_time == datepick )
            {
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
                data = data.link("../main/test2/"+ jsonData[x].carID)
                data += '</table>' + '<br>';
                 document.getElementById('resultss').innerHTML += data;
            }
          }
        }
      };
      xhttp.send();
    }
    else {
      document.getElementById('resultss').innerHTML = datepick;
    }
}
/*var resultProductData = jsonData.filter(function (a) {
            var hitDates = a.starting_time ||  {};
            // extract all date strings
            hitDates = Object.keys(hitDates);
            // improvement: use some. this is an improment because .map()
            // and .filter() are walking through all elements.
            // .some() stops this process if one item is found that returns true in the callback function and returns true for the whole expression
            hitDateMatchExists = hitDates.some(function(dateStr) {
                var date = new Date(dateStr);
                return date >= datepick && date <= datepickout
            });
            return hitDateMatchExists;
        });*/
