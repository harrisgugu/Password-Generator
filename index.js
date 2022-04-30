var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%^&*()_+<>?,./~`-="
var allChars = numberChars + upperChars + lowerChars+specialChars;
let box1El=  document.querySelector("#box1-el");
let box2El=  document.querySelector("#box2-el");
let box3El=  document.querySelector("#box3-el");
let box4El=  document.querySelector("#box4-el");

function generatePassword(){
    let passwords = {}
    let len = allChars.length
    for(let j = 0;j<4;j++){
        let password = "";
        for(let i = 0;i<15;i++){
            let currChar = Math.floor(Math.random()*len)
            password+=allChars[currChar]
        }
        passwords[j] = password
    }
    box1El.textContent=passwords[0]
    box2El.textContent=passwords[1]
    box3El.textContent=passwords[2]
    box4El.textContent=passwords[3]
}


console.log(ans)