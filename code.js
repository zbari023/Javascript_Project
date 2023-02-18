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


// // Ein Card erstellen mit JS:
// let Title = "Documet", disc = "für Jobcenter", Datum = "25/10",
//   markUp = ` 
//   <div class="card">
//     <div class="child">
//     <h1>${Title}</h1>
//       <h3>${disc}</h3>
//         <p>Gesendet am ${Datum}</p>
//      </div>
//     </div>
//         `;
// document.write(markUp);   // um den ganze in web abzubilden

// console.log('3' + '2'); // sieht als 32 , da die beiden als string sind .NUR bei Summe(+) alles anderes wird als Operation gesehen 
// console.log(6 + 2);      // als 8 , da sie ale Zahlen sind

// console.log(6 + '3' + 2);   // 632
// console.log('6' + 3 + 2);   // 632
// console.log(6 + 2 + '3'); // 83


// // If/else Anweisung
// let age = 12;
// if (age < 18) {
//   console.log('Error : you are < 18')
// } 
// else { 
//   console.log('Welcome on facebook')
// }
// //************ kann auch weitere Bedingungen geführt unter else if....
// let x;
// let old = prompt('Enter your age:');
// if(old<18) {
//   x=false;
// }
// else {
//   x=true;
// }
// console.log(x);

// ternary operator Ersatz zu if/else Anweisung
/* let z= prompt('Enter your value:');
let y=(z<40) ? true : false;
console.log(y); */

// let x=prompt('enter your value'); // || als oder,   && und Intervall erstellen
//   if (20 > x || x==20 && x > 10 || x==10) {
//   console.log('richtig');
//   }
//   else {
//     console.log('falsch');
//   }
// while loop and do loop

// for loop 

//  n=10;
//  for(let i=0;i<=10;i++)
//  {
//    console.log(`${i} X ${n} = ${n*i}`)

//  }
// Multiplikationstabelle
// for(let i=0;i<=10;i++)
// {
//   console.log(`*Muliplikationstabelle for [${i}]`)   // Damit den Kommentar am anfang oben beginnt

//   for(let n=0;n<=10;n++){
//   console.log(`${i} X ${n} = ${n*i}`)
//   }
// }
// for (i=0;i<=10;i++){
//     if(i == 5) continue // um den wert zu überspringen ,break um bei diesem wert zu stopen 
//     console.log(i)
//   }
// switsh 
// let i = 11;

// switch (true) {     //logic Operator
//     case (10 > i):
//         console.log("wert ist kleiner als 10");
//         break;

//     case (10 == i):
//         console.log("wert ist gleich  10");
//         break;


//     default:
//         console.log("out");
// }

//  funktion erstellen 
// function multi(x,y,z){ //wobei xyz parametern sind
//     console.log(x*y*z)
//   }
//   multi(8,9,4)

// function multi(x,y,z){
//     result = x + y +z 
//     return result      // wie C , wobei result beliebige Name ist.

//   }
//   multi(8,9,4)
//   console.log(result)
// eine funktion von 1.Grad y=mx+b , m wird berechnet
//   function gerade (y,x,b){
//     res = (y/x)+b;
//     return res
//   }
//   let m = gerade(3,4,3)
//   console.log(m)
// wenn die funktion kurz ist und die Rechen ist nicht so viel dann Abkurzung
// let gerade =(x,y,b) => (y/x)+b;  // => arrow funktion
// let m=gerade(2,2,8)
// console.log(m)

/* <li>
<h4 class="d-inline-block me-5 fw-bolder">learning Javascript</h4>

<button type="button" class="btn btn-primary ms-5">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled"
        width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
            stroke-width="0" fill="currentColor"></path>
    </svg>
</button>
<button type="button" class="btn btn-danger">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-off"
        width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 3l18 18"></path>
        <path d="M4 7h3m4 0h9"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 14l0 3"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923"></path>
        <path d="M18.384 14.373l.616 -7.373"></path>
        <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
    </svg>
</button>
</li> */
// Name der Funktion ,aber die Seite ist immer noch am Refreshing
// um das zu entfernen, lassen wir e(beliebig) in der Funktion und schreiben den nebenden Befehl
// const+.value ergibt sich die info in konsol
// wird den Text in feld nach refreshing wieder gelöscht
// Verbindung zwischen Btn und den input
console.log('Welcome')
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoResult = document.querySelector('.todores')

function addTodo(e) {
    e.preventDefault();

    const todoli = document.createElement("li")
    todoli.classList.add('border')
    todoli.classList.add('my-5')

    const todotitle = document.createElement('h4')
    todotitle.classList.add('d-inline-block')
    todotitle.classList.add('me-5')
    todotitle.classList.add('fw-bolder')
    todotitle.innerText = todoInput.value
    todoli.appendChild(todotitle)


    const todoAction = document.createElement('div')
    todoAction.classList.add('action-div')
    todoAction.classList.add('d-inline-block')
    todoAction.classList.add('float-end')





    const Btntr = document.createElement('button')
    Btntr.classList.add('btn')
    Btntr.classList.add('btn-primary')
    Btntr.classList.add('me-1')
    Btntr.innerHTML = '<i class="fa-solid fa-plus"></i>'
    todoAction.appendChild(Btntr)


    const Btnde = document.createElement('button')
    Btnde.classList.add('btn')
    Btnde.classList.add('btn-danger')
    Btnde.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoAction.appendChild(Btnde)


    todoli.appendChild(todoAction)
    todoResult.appendChild(todoli)
    todoInput.value = '';



}
function todoToggle(e) {

    console.log('in toggle')
    const item = e.target
    if (item.classList[1] == 'fa-plus') {
        console.log('truech')
        const taskli = item.parentElement.parentElement.parentElement
        taskli.childNodes[0].classList.toggle('truech')
    }
    else if (item.classList[1] == 'fa-trash') {
        console.log('delete')
        const taskli = item.parentElement.parentElement.parentElement.classList.toggle('delete')
       
    }
}
todoBtn.addEventListener('click', addTodo)
todoResult.addEventListener('click', todoToggle)

