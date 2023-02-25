
function myFunction1() {
    var txt;
      if (confirm("Para más informaciónllamar al teléfono 4865-9005 al 08")) {
      txt = "Referente: Prof. Amalia Sosa";
      }
      else {
      txt = "Correo electrónico a: regenciasedecentral@gmail.com";
      }
    document.getElementById("conservatorio").innerHTML = txt;
}
function myFunction() {
    var txt;
      if (confirm("Para más informaciónllamar al teléfono 6658-9558")) {
      txt = "Referente: Prof. Luis Calles";
      } 
      else {
      txt = "Correo electrónico a: regenciasedecentral@gmail.com";
      }
    document.getElementById("rockschool").innerHTML = txt;
}