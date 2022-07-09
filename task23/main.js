var r=0,a,num;
num=153;

temp=num;
while(temp>0)
{
a=temp%10;
r=r+a*a*a;
temp=Math.floor(temp/10);
}
if(r==num)
{
console.log("Armstrong number");
}
else
{
console.log("Not Armstrong number");
}