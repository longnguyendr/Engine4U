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
