const rollButton = document.querySelector("#roll-button");
const allrollsButton = document.querySelector("#all-rolls");
const total = document.querySelector("#total");
const resultInput = document.querySelector("#result-input");
const rollsList = document.querySelector("#rolls-list");

let diceroll = []



rollButton.addEventListener('click', function() {
    diceroll = []
    let rollnum = resultInput.value;
    let sum = 0
    let count = 0

    
    while(count < rollnum) {
        let dieroll = Math.floor(Math.random() * rollnum) + 1 
        console.log(dieroll)
        diceroll.push(dieroll)
        
        
        
        
        
        count++
    }
    
    sum = diceroll.reduce((total, amount) => total + amount);
        console.log(sum)

    total.innerText = sum    
})

allrollsButton.addEventListener('click', function() {
    rollsList.innerHTML = ""
    
        for(let i = 0; i < diceroll.length; i++) {
            console.log(diceroll[i])
            rollsList.innerHTML += "<li>" + diceroll[i] + "</li>"
        }

})



