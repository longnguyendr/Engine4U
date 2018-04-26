
/*------------Pricerange----------- */
window.addEventListener("load", function pris()
{
var slider = document.getElementById("myRange");
var output = document.getElementById("pricerange");
    if(slider.value != '')
    {
      output.innerHTML = 0 + '->' + slider.value + '$';
      slider.oninput = function() {
      output.innerHTML = 0 + '->' + this.value + '$';
    }
}
});


window.addEventListener("load" , function loadtypecar()
{
  var cars = ["Coupe","Diesel","Truck", "SUV", "Sedans" ,"Sport Car"];
    for (var x= 0; x < cars.length ;x++)
    {
      var z = document.getElementById("discar");
      var option = document.createElement("option");
      option.text = cars[x];
      z.add(option);
    }
});

window.addEventListener("load",function loadmodel()
{
  var model = ["1993","1993","1998", "2000", "2015" ,"2018"];
  for (var x= 0; x < model.length ;x++)
  {
    var z = document.getElementById("mdy");
    var option = document.createElement("option");
    option.text = model[x];
    z.add(option);
  }
});


/*------------End Pricerange----------- */
