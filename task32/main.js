let a=parseInt( prompt("Enter the value of a:"));
let b=parseInt( prompt("Enter the value of b:"));
let o=prompt("Enter the operation:");
switch(o){
    case '+':   console.log("add=" + (a+b));break;
    case '-':   console.log("sub=" + (a-b));break;
    case '*':   console.log("mul=" + (a*b));break;
    case '/':   console.log("div=" + (a/b));break;
}