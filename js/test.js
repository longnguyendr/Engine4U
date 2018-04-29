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
          con_l ? l = jsonData[x].city.trim().toLowerCase().includes(choose.trim().toLowerCase()) : l = true;
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
              data = data.link("../Search/car/"+ jsonData[x].carID)
              data += '</table>' + '<br>';
              document.getElementById('resultss').innerHTML += data;
          }
        }
      }
    };
    xhttp.send();
  }
    else {
     document.getElementById('resultss').innerHTML =  prices;
    }
}

/*
  //--------------Begin search by 5-----------
  if ((con_l && con_t && con_m && con_s && con_e)){
    xhttp.onreadystatechange = function() {
    document.getElementById('resultss').innerHTML = '';
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        var t = (jsonData[x].type_of_car.toLowerCase() == typecary[typecarx].text.toLowerCase());
        var l = jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase());
        var l1 = choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase());
        var m = (jsonData[x].year >= modelyear.value) ;
        var s = (jsonData[x].start_date >= datepick);
        var e = (jsonData[x].end_date <= datepickout);
        var p = (jsonData[x].price <= parseInt(prices));
        //if location and type of car
        if ((t && l && l1 && m && s && e)) {
          var data = '<table border="1">';
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
            '</td></tr>';
            data = data.link("../Search/car/"+ jsonData[x].carID)
            data += '</table>' + '<br>';
             document.getElementById('resultss').innerHTML += data;
        }
      }
    }
  };xhttp.send();
  }
  //---------------End search by 5-----------------

  //--------------Begin search by location+type+model+ startdate/enddate-----------
  else if (( (con_l && con_t && con_m && con_s) || (con_l && con_t && con_m && con_e) )){
    xhttp.onreadystatechange = function() {
    document.getElementById('resultss').innerHTML = '';
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      jsonData = JSON.parse(xhttp.responseText);
      for (x in jsonData) {
        var t = (jsonData[x].type_of_car.toLowerCase() == typecary[typecarx].text.toLowerCase());
        var l = jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase());
        var l1 = choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase());
        var m = (jsonData[x].year >= modelyear.value) ;
        var s = (jsonData[x].start_date >= datepick);
        var e = (jsonData[x].end_date <= datepickout);
        //if location + type + model + startdate
        if ((t && l && m && s) || (t && l1 && m && s)) {
          var data = '<table border="1">';
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
            '</td></tr>';
            data = data.link("../Search/car/"+ jsonData[x].carID)
            data += '</table>' + '<br>';
             document.getElementById('resultss').innerHTML += data;
        }
        //if location + type + model + enddate
        else if ((t && l && m && e) || (t && l1 && m && e)) {
          var data = '<table border="1">';
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
            '</td></tr>';
            data = data.link("../Search/car/"+ jsonData[x].carID)
            data += '</table>' + '<br>';
             document.getElementById('resultss').innerHTML += data;
        }
      }
    }
  };xhttp.send();
  }
  //---------------End search by location+type+model+ startdate/enddate-----------------

  //--------------Begin location + other filter-------------
  else if ( ((con_l) && (con_t)) || ((con_l)&&(con_m)) ){
      xhttp.onreadystatechange = function() {
      document.getElementById('resultss').innerHTML = '';
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        jsonData = JSON.parse(xhttp.responseText);
        for (x in jsonData) {
          var t = (jsonData[x].type_of_car.toLowerCase() == typecary[typecarx].text.toLowerCase());
          var l = jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase());
          var l1 = choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase());
          var m = (jsonData[x].year >= modelyear.value) ;
          //if location and type of car
          if ( (t && l) || (t && l1)) {
            var data = '<table border="1">';
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
              '</td></tr>';
              data = data.link("../Search/car/"+ jsonData[x].carID)
              data += '</table>' + '<br>';
               document.getElementById('resultss').innerHTML += data;
          }
          // if location and model
          else if ((m&&l) || (m&&l1)){
            var data = '<table border="1">';
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
              '</td></tr>';
              data = data.link("../Search/car/"+ jsonData[x].carID)
              data += '</table>' + '<br>';
               document.getElementById('resultss').innerHTML += data;
          }
        }
      }
    };xhttp.send();
    }
  //------------End location + other filter------------------

    //--------------Begin location + start/end filter-------------
    else if((con_l)&&(con_s) || (con_l)&&(con_e)){
      xhttp.onreadystatechange = function() {
      document.getElementById('resultss').innerHTML = '';
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        jsonData = JSON.parse(xhttp.responseText);
        for (x in jsonData) {
          var l = jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase());
          var l1 = choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase());
          var s = (jsonData[x].start_date >= datepick);
          var e = (jsonData[x].end_date <= datepickout);
          //if location and start date
          if ((s&&l)||(s&&l1)){
            var data = '<table border="1">';
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
              '</td></tr>';
              data = data.link("../Search/car/"+ jsonData[x].carID)
              data += '</table>' + '<br>';
               document.getElementById('resultss').innerHTML += data;
          }
          //if location and end date
          else if ((e&&l)||(e&&l1)){
            var data = '<table border="1">';
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
              '</td></tr>';
              data = data.link("../Search/car/"+ jsonData[x].carID)
              data += '</table>' + '<br>';
               document.getElementById('resultss').innerHTML += data;
          }
        }
      }
    };xhttp.send();
    }
    //------------End location + start/end filter------------------

     else if((con_s)&&(con_e)){
      xhttp.onreadystatechange = function() {
      document.getElementById('resultss').innerHTML = '';
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        jsonData = JSON.parse(xhttp.responseText);
        for (x in jsonData) {
          var l = jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase());
          var l1 = choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase());
          var s = (jsonData[x].start_date <= datepick);
          var e = (jsonData[x].end_date >= datepickout);
          //if location and start date
          if ( s && e){
            var data = '<table border="1">';
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
              '</td></tr>';
              data = data.link("../Search/car/"+ jsonData[x].carID)
              data += '</table>' + '<br>';
               document.getElementById('resultss').innerHTML += data;
          }
        }
      }
    };xhttp.send();
    }

    //--------------Begin location filter-------------
    else if(con_l) {
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {
            if (jsonData[x].city.toString().toLowerCase().match(choose.trim().toLowerCase()) || choose.toLowerCase().match(jsonData[x].city.toString().toLowerCase()) ) {
              var data = '<table border="1">';
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
                '</td></tr>';
                data = data.link("../Search/car/"+ jsonData[x].carID)
                data += '</table>' + '<br>';
                 document.getElementById('resultss').innerHTML += data;
            }
          }
        }
      };
      xhttp.send();
    }
    //------------End location filter------------------

    //-------------Begin type of car filter-------------------
    else if (con_t){
        xhttp.onreadystatechange = function() {
          document.getElementById('resultss').innerHTML = '';
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            jsonData = JSON.parse(xhttp.responseText);
            for (x in jsonData) {

                if (jsonData[x].type_of_car.toLowerCase() == typecary[typecarx].text.toLowerCase()  ) {
                  var data = '<table border="1">';
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
                    '</td></tr>';
                    data = data.link("../Search/car/"+ jsonData[x].carID)
                    data += '</table>' + '<br>';
                     document.getElementById('resultss').innerHTML += data;
                 }
            }
          }
        };
        xhttp.send();
      }
    //-------------End type of car filter-------------------

    //-------------------------Begin start_date filter---------------------
    else if (con_s) {
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {
            if (jsonData[x].start_date <= datepick && datepick <= jsonData[x].end_date) {
              var data = '<table border="1">';
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
                '</td></tr>';
                data = data.link("../Search/car/"+ jsonData[x].carID)
                data += '</table>' + '<br>';
                 document.getElementById('resultss').innerHTML += data;
            }
          }
        }
      };
      xhttp.send();
    }
    //---------------End start_date filter-------------

    //-----------------Begin end_date filter--------------
    else if (con_e) {
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {
            if (jsonData[x].start_date <= datepickout && datepickout <= jsonData[x].end_date) {
              var data = '<table border="1">';
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
                '</td></tr>';
                data = data.link("../Search/car/"+ jsonData[x].carID)
                data += '</table>' + '<br>';
                 document.getElementById('resultss').innerHTML += data;
            }
          }
        }
      };
      xhttp.send();
    }
    //---------------------End end_date filter------------------------

    //---------Begin modelyear filter---------------
    else if (con_m) {
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {

              if (jsonData[x].year <= modelyear.value  ) {
                var data = '<table border="1">';
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
                  '</td></tr>';
                  data = data.link("../Search/car/"+ jsonData[x].carID)
                  data += '</table>' + '<br>';
                   document.getElementById('resultss').innerHTML += data;
                   //console.log( typeof modelyear.value);
               }
          }
        }
      };
      xhttp.send();
    }
    //------------End modelyear filter--------------

    //------begin prices filter-----Doi thanh CHAU giai dap---------
    else if (con_p) {
      xhttp.onreadystatechange = function() {
        document.getElementById('resultss').innerHTML = '';
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          jsonData = JSON.parse(xhttp.responseText);
          for (x in jsonData) {

              if (jsonData[x].price <= parseInt(prices) ) {
                var data = '<table border="1">';
                data +=
                  '<tr><td>' +
                  jsonData[x].price +
                  '</td></tr>';
                  data = data.link("../Search/car/"+ jsonData[x].carID)
                  data += '</table>' + '<br>';
                   document.getElementById('resultss').innerHTML += data;
                   //console.log( typeof jsonData[x].price);
                   //console.log( typeof parseInt(prices));
                   //console.log( typeof prices);
               }
          }
        }
      };
      xhttp.send();
    }
    //--------End prices filter--------------
*/
