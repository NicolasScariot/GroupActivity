//Automaically selects the input area:
var input = document.getElementById('pwInput');
input.select();
// https://stackoverflow.com/questions/210761/how-to-auto-select-an-input-field-and-the-text-in-it-on-page-load

// Typewriter effect:
var aText = new Array(
  "kelvinribeiro@PC: sudo su", 
  "[sudo] password for kelvinribeiro: "
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
  
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
  
var destination = document.getElementById("typedtext");

function typewriter()
  {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    //var destination
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "█";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
  }
}
   
typewriter();

//Check password:
function check(ele) {
  //The comparation is done only when the user press "Enter"
  if(event.key === 'Enter') {
    //If the value is the following, the password is correct
    if(ele.value == '#52po9++'){
      //alert('Congratulations: kelvin-rnov.github.io/JogoMemoria/');
      var mySite = 'kelvin-rnov.github.io/JogoMemoria/';
      document.getElementById("container").innerHTML += "Enjoy!" + "<a href='https://kelvin-rnov.github.io/JogoMemoria/'>kelvin-rnov.github.io/JogoMemoria/</a>";
    }else{
      alert('Incorrect password! Please, try again.')
    }
  }
}
