const rollButton = document.querySelector("#roll-button");
const allrollsButton = document.querySelector("#all-rolls");
const total = document.querySelector("#total");
const resultInput = document.querySelector("#result-input");
const rollsList = document.querySelector("#rolls-list");
let count = 0;
let rollnum = resultInput.value;

let diceroll = []

rollButton.addEventListener('click', function() {
    
    while(count < resultInput.value) {
        let dieroll = Math.floor(Math.random() * resultInput.value) + 1 
        console.log(dieroll)
        diceroll.push(dieroll)
        
        
        
        
        
        count++
    }
    
    const sum = diceroll.reduce((total, amount) => total + amount);
        console.log(sum)

        
        
        
       

    
    
    
    
    // count = parseInt(total.innerText) + 1;
    // total.innerText = count;
    
    // let rollnum = Math.random(1, 7);

    // if (rollnum != 1) {

    // }



})



