function sum(a){
	let res=0;
	for(i=0; i<a.length; i++){
		res+=a[i];
	}
	return res
	
}
alert (sum([1, 5, 3]));

function findIndexOf(arr, val){
	for(i=0; i<arr.length; i++){
		if(arr[i] == val){
		  return i;
		}
	    else continue;
	   }
	}
alert(findIndexOf([1,2,3,4], 4));

function createNewArray(arr1, arr2){
	let arrNew=[];
	for(i=0; i<arr1.length; i++){
		 arrNew.push(arr1[i]);
	}
	for(i=0; i<arr2.length; i++){
		arrNew.push(arr2[i]);
	}
	return arrNew;
}
console.log (createNewArray([1,5,3], [4,5,9,1]));


