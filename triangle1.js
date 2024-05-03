let i=1,j=1;
let n=5;
let space = "";
for(i=1;i<=n;i++)
{
	for(j=1;j<=i;j++)
	{
		space += j+" ";
	}
	space += "\n";
}
console.log(space);