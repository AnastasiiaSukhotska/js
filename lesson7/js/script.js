let arr = [1, 2, 3];
function showElemets(arr){
	if (arr.length>0){
		alert(arr.shift());
		showElemets(arr);
	}
}
showElemets(arr);
	
let arr2 = [1, 2, 3];
function getSum(array){
    if (array.length===0){
    	return 0;
    }
    else return array[0]+getSum(array.slice(1));
    
}
console.log(getSum(arr2));

