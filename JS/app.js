/* Global Variables */

const button = document.querySelector('#Calc');

//Make The Button Have Function To Do

button.addEventListener("click", calculateTheResult);

//Main Functions 

function calculateTheResult(press) {
    let p1x = document.getElementById('first_pointx').value;
    let p1y = document.getElementById('first_pointy').value;
    let p2x = document.getElementById('second_pointx').value;
    let p2y = document.getElementById('second_pointy').value;
    let power21 = Math.pow((p1x - p2x), 2);
    let power22 = Math.pow((p1y - p2y), 2);
    let theres = Math.sqrt(power21 + power22);
    
    if (isNaN(theres)) {
        alert("Please, Enter A Valid Numbers") 
        return;
    };

    let res = document.getElementById('result').innerHTML = `The First Point You Chose is (${p1x} , ${p1y}) <br> The Second Point You Chose is (${p2x} , ${p2y}) <br> The Result Is : ${theres}`
};