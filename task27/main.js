let i,n,num,flag;
num=prompt("Enter a prime number range:");
for(n=2;n<=num;n++){
    flag=1;
    for(i=2;i<=n/2;i++){
        if(n%i==0){
            flag=0;
            break;
        }
    }
        if(flag==1){
            console.log(n);
        }
}