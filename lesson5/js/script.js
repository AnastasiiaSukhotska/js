function counterForSpace(a){
	let counterOfSpace=0;
    for(i=0; i<a.length; i++){
		if (a[i]==' '){
			counterOfSpace+=1;
		}
		
	  }
	  return counterOfSpace;
}

function counterForBr(a){
	let counterOfBr=0;
	let words = a.split(' ');
    for(i=0; i<words.length; i++){
		if (words[i]=='<br>'){
			counterOfBr+=1;
		}
		
	  }
	  return counterOfBr;
}
 
function showResult(a, b){
	alert("Вы ввели строку: "+ str +  " , в ней "+ a + " пробелов и " + b + " переводов строки")

}
let str='Лето в стране настало, <br> Вереск опять цветет. <br> Но некому готовить <br> Вересковый мед';
showResult(counterForSpace(str), counterForBr(str));

 let newStr = 'кошка родила пятерых котят вчера котят вечером';
 function textGenerator(a){
 	let wordsArray = a.split(' ');
 	let word;
 	let j;
 	let randomStr='';
 	for(i=0; i<wordsArray.length; i++){
 		j=Math.round(Math.random()*(wordsArray.length-1));
 		return randomStr+=wordsArray[j]+' ';	
 	}
 	console.log(randomStr);
 }
 textGenerator(newStr);

function creatorStr(a){
	let symbol;
	let symbolStr='';
	for (i=0; i<a; i++){
		symbol=String.fromCharCode(Math.round(Math.random()*57+65));
		return symbolStr+=symbol;
	}
	alert(symbolStr);
}
creatorStr(5);



 function findAllIndexes(a, b){
 	let arrayOfIndexes=[];
 	let newArray=a.split(' ');

 	for(i=0;i<newArray.length;i++){
 		if(newArray[i]==b){
 			arrayOfIndexes[arrayOfIndexes.length]=i;
 		}
 	}
 	console.log(arrayOfIndexes);
 }
 findAllIndexes(newStr, 'котят');

 let tasksNames = [];
 function addNames(a){
 	for (i=0; i<tasksNames.length; i++){
 		if (a<tasksNames[i]){
 			return -1;
 		}
 		else if (a>tasksNames[i]){
 			return 1;
 		}
 	}
 }