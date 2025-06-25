let passwordbox=document.querySelector("#generatepass");
let length=10;

let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let symbol="!@#$%&*";
let number="123456789";

let totalpass=uppercase + lowercase + symbol + number


function generatepass(){
    let password="";
    password +=uppercase[Math.floor(Math.random()* uppercase.length)];
    password +=lowercase[Math.floor(Math.random()* lowercase.length)];
    password +=symbol[Math.floor(Math.random()* symbol.length)];
    password +=number[Math.floor(Math.random()* number.length)];

    while(length>password.length){
        password+=totalpass[Math.floor(Math.random()*totalpass.length)];
    }
    passwordbox.value = password;
}


function copypass(){
   let password=passwordbox.value;
   navigator.clipboard.writeText(password);
   alert("Copied");
}
