let i;
n=prompt("Enter a number:");
for(i=2;i<=n/2;i++){
    if(n%i==0){
        console.log("Not a prime");
        exit;
    }
}
console.log("Prime Number");