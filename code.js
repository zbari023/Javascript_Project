/* document.write("<h1> Hello page </h1>"); // schreibt in webPage die Html-Elemente
console.log("Hello Bari");               // wird in Konsol geschrieben
console.table(["sami", "Ahmed", "ziad"]); // eine Tabelle, die in consol ist
console.log(" %c i %c am %c from %c Edlib", "color:red; font-size:30px;", "color:blue; font-size:30px;", "color:red; font-size:30px;", "color:red; font-size:30px;");
// styling in consol mit %c vor dem wert
// ein paar Befehle:
console.log(8 * 7);

// typeof: um den Variableart zu erkennen
const x = 10;
const name = "ziad";
const land = "deutscland";


console.log(typeof x);                  // Number
console.log(typeof name);               // string
console.log(typeof [2, 4, 3]);          //Num-string-Array=object
console.log(typeof { name, x, land });    // geschweifelten Klammern um alle Infos darzustellen
console.log(typeof true);               //boolean type, kann true oder false

let user = "Bari", age = 27;               //dekleration erstmal
console.log({ user, age });                //typing ohne klammern wird die deklarierte Werte nicht angezeigt

let tname = "ziad", old = 27;
alert(`my name is ${tname} and i am ${old}`);          //anfang open der Seite in einer Massege und kann viel anzeigen


console.log(jihad);          // mit dem id spielen und die Bonn anstatt Remagen in page angezeigt wird
jihad.innerHTML = "Bonn";


//conatenation
let a = "Ziad";
let b = "Bari";
document.write(a + " " + b);

let message ="Hi";
console.log(message);
alert(`${message}`); */

/* let isGreater = 5 > 6,     // Booleanoperator
 isEqual = 5==5;

console.log(isGreater);
console.log(isEqual);
 //prompt:dendet ein Nachricht am Anfang
 let user = prompt ("What is your Name?", "Ziad");
 alert(`My Name is ${user} and i am syrian `); */


// Ein Card erstellen mit JS:
let Title = "Documet", disc = "für Jobcenter", Datum = "25/10",
  markUp = ` 
  <div class="card">
    <div class="child">
    <h1>${Title}</h1>
      <h3>${disc}</h3>
        <p>Gesendet am ${Datum}</p>
     </div>
    </div>
        `;
document.write(markUp);   // um den ganze in web abzubilden

console.log('3' + '2'); // sieht als 32 , da die beiden als string sind .NUR bei Summe(+) alles anderes wird als Operation gesehen 
console.log(6 + 2);      // als 8 , da sie ale Zahlen sind


