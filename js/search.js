
/*------------Pricerange----------- */
window.onload = function pris()
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
}

/*------------End Pricerange----------- */
