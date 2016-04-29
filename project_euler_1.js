
function sum() {
	var total = 0;
  for(var count = 1; count < 1000; count++){
    if(count % 3 == 0 || count % 5 == 0){
      total += count;
    }
	}
  return total;
}

var answer = sum();
console.log(answer);