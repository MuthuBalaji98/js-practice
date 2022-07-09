var a=20;
let fact;
let i,j;
for(i=1;i<=a;i++){
    fact=1;
    for(j=i;j>=1;j--){
        fact=fact*j;
    }
    console.log(fact);
}