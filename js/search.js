window.addEventListener("load" , function loadtypecar(){
  var cars = ["Coupe","Diesel","Truck", "SUV", "Sedans" ,"Sport Car"];
    for (var x= 0; x < cars.length ;x++)
    {
      var z = document.getElementById("discar");
      var option = document.createElement("option");
      option.text = cars[x];
      z.add(option);
    }
});

window.addEventListener("load",function loadmodel(){
  var model = ["1993","1995","1998", "2000", "2010", "2013" , "2015" ,"2018"];
  for (var x= 0; x < model.length ;x++)
  {
    var z = document.getElementById("mdy");
    var option = document.createElement("option");
    option.text = model[x];
    z.add(option);
  }
});

function GetCarsBySearch() {
  var choose = document.getElementById('s_name').value;
  var datepick = document.getElementById('chkin').value;
  var datepickout = document.getElementById('chkout').value;
  var typecarx = document.getElementById('discar').selectedIndex;
  var typecary = document.getElementById('discar').options;
  var modelyear = document.getElementById('mdy');
  var prices = document.getElementById('myRange').value;
  var jsonData = '';
  var url = 'http://localhost/car/index.php/api/car/cars';
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  var con_l = choose.trim().length > 0; /* check if input is location */
  var con_t = typecarx > 0;             /* check if input is type of car */
  var con_m = modelyear.selectedIndex > 0; /* check if input is model year */
  var con_s = datepick.trim().length >0; /* check if input is start date */
  var con_e =datepickout.trim().length >0; /* check if input is end date */
  var con_p = prices > 0;
  if (window.location.href == 'http://localhost/car/index.php/search/search_engine'){
  // begin search case
      if ((con_l || con_t || con_m || con_s || con_e || con_p)) {
        //console.log("run11");

        xhttp.onreadystatechange = function() {
          document.getElementById('resultss').innerHTML = '';
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log("run");

            jsonData = JSON.parse(xhttp.responseText);
            for (x in jsonData) {
              //console.log("run1");
              con_t ? t = (jsonData[x].type_of_car.toLowerCase() == typecary[typecarx].text.toLowerCase()) : t = true;
              con_l ? l = jsonData[x].city.trim().toLowerCase().match(choose.trim().toLowerCase()) : l = true;
              con_m ? m = jsonData[x].year >= modelyear.value : m = true;
              con_s ? s = jsonData[x].start_date <= datepick : s = true;
              con_e ? e = jsonData[x].end_date >= datepickout : e = true;
              con_p ? p = jsonData[x].price <= parseInt(prices) : p = true;
              //console.log("run 2 " +t + l + m + s + e + p);
              if(t && l && m && s && e && p) {
              //console.log(t + l + m + s + e + p);
              var data = '<table border="1">'+
                          '<tr><td>' +
                          'city' +
                          '</td><td> ' +
                          'carID' +
                          '</td><td> ' +
                          'type of car' +
                          '</td><td> ' +
                          'start_date' +
                          '</td><td> ' +
                          'end_date' +
                          '</td><td> ' +
                          'year' +
                          '</td><td> ' +
                          'price' +
                          '</td></tr>' ;
                data +=
                        '<tr><td>' +
                        jsonData[x].city +
                        '</td><td> ' +
                        jsonData[x].carID +
                        '</td><td> ' +
                        jsonData[x].type_of_car +
                        '</td><td> ' +
                        jsonData[x].start_date +
                        '</td><td> ' +
                        jsonData[x].end_date +
                        '</td><td> ' +
                        jsonData[x].year +
                        '</td><td> ' +
                        jsonData[x].price +
                        '</td></tr>' ;
                  data = data.link("../Reserve/car/"+ jsonData[x].carID)
                  data += '</table>' + '<br>';
                  document.getElementById('resultss').innerHTML += data;
              }
            }
          }
        };
        xhttp.send();
      }
  // end search case

      // else display all
      else {
          xhttp.onreadystatechange = function() {
            document.getElementById('resultss').innerHTML = '';
            if (xhttp.readyState == 4 && xhttp.status == 200) {
              jsonData = JSON.parse(xhttp.responseText);
              for (x in jsonData){
                var data = '<table border="1">'+
                            '<tr><td>' +
                            'city' +
                            '</td><td> ' +
                            'carID' +
                            '</td><td> ' +
                            'type of car' +
                            '</td><td> ' +
                            'start_date' +
                            '</td><td> ' +
                            'end_date' +
                            '</td><td> ' +
                            'year' +
                            '</td><td> ' +
                            'price' +
                            '</td></tr>' ;
                data +=
                        '<tr><td>' +
                        jsonData[x].city +
                        '</td><td> ' +
                        jsonData[x].carID +
                        '</td><td> ' +
                        jsonData[x].type_of_car +
                        '</td><td> ' +
                        jsonData[x].start_date +
                        '</td><td> ' +
                        jsonData[x].end_date +
                        '</td><td> ' +
                        jsonData[x].year +
                        '</td><td> ' +
                        jsonData[x].price +
                        '</td></tr>' ;
                  data = data.link("../Reserve/car/"+ jsonData[x].carID)
                  data += '</table>' + '<br>';
                  document.getElementById('resultss').innerHTML += data;
              }
            }
          };
          xhttp.send();
        }
        // end else display all

  }
  else {
    choose = "oulu";
    window.location.assign('http://localhost/car/index.php/search/search_engine');
  }
}
