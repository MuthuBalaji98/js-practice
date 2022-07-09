a=7;
b=6;
c=2;
let s;
let m;
let l;

if(a>b&&a>c){
    l=a;
}
else if(b>a&&b>c){
    l=b;
}
else{
    l=c;
}
if(a<b&&a<c){
    s=a;
}
else if(b<a&&b<c){
    s=b;
}
else{
    s=c;
}
m=(a+b+c)-(l+s);
console.log("Ascending order:"+s+m+l);
console.log("Descending order:"+l+m+s);