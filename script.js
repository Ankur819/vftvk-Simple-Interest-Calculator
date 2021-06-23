function compute()
{
    var principal = document.getElementById("principal").value;
  
}
    
        var rate = document.getElementById("rate").value; 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
document.getElementById ('num').innerHTML ="Simple interest : "+si;

}