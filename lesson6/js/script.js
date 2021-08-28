function map(arr, mapper){
	let result=[];
	for (i=0; i<arr.length; i++){
		result.push(mapper(arr[i]));
	}
	return result;
}
console.log(map(['one', 'two'], s => s.toUpperCase()));

function some(arr, predicate){
	for (i=0; i<arr.length; i++){
		if(predicate(arr[i])){
			return true;
		}			
	}
	return false;
}
console.log(some(['one', 'two'], s =>s==='one'));
console.log(some(['one', 'two'], s =>s==='rrr'));

function every(arr, predicate){
	for (i=0; i<arr.length; i++){
		if(predicate(arr[i])){
			continue;
		}	
		else return false;		
	}
	return true;
}
console.log(every(['one', 'two'], s =>s==='one'));
console.log(every(['one', 'two'], s =>s.length==3));


let people =[{name: 'Vasia', surname: 'Vasilieve', patronymic:'Vasilievich'}, {name: 'Petya',
	surname: 'Petrov', patronymic:'Petrovich'},  {name: 'Katya', surname: 'Vorobeva', patronymic:'Vasilievna'}];

let sameBegining = people.filter(e=>e.name[0]===e.surname[0]);
console.log(sameBegining);

let getInitials = people.map(e =>e.surname+' ' +e.name[0]+'.'+' '+e.patronymic[0]+'.');
console.log(getInitials);

let contacts=[{name: 'vasia', phone: '0986754321'},
 {name: 'petia', phone: '0769805489'},
 {name: 'masha', phone: '0508745768'}];

let beginingOfNumber=prompt('Введите номер');
 let findContact=contacts.filter(e=>e.phone.startsWith(beginingOfNumber)).map(e=>e.name+' '+e.phone);
 alert(findContact);


let phoneNumber=+prompt('Введите номер');
 let findPhone=contacts.some(e=>e.phone==phoneNumber);
 console.log(findPhone);