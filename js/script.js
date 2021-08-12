
function factorial(n){
	let res=1;
	for (i=1; i<=n; i++){
      res*=i;
	}
	alert(res);
}
factorial(6);

function countDegree(a, b){
	let res=1;
	for (i=1; i<=b; i++){
		res*=a;
	}
	alert(res);
}

countDegree(2, 5);

function leastCommonMultiple(x, y){
	for (i=x; i<=x*y; i++){
		if (i%y==0 && i%x==0){ 
		alert (i);
		break;
		}
		else continue;
	}
}
leastCommonMultiple(13,5);

function reverseNumbers(number){
	let reverseNumber='';
	while (number>0){
		let digit = number%10;
		number=parseInt(number/10);
		reverseNumber+=digit;
	    }
	    alert(reverseNumber);
	}
reverseNumbers(567);




