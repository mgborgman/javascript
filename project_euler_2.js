var sum = 0;
var total = 0;
var even_a = [];
var even_b = [];
var arrary_sum = 0;
	a = 1;
  b = 2;
while (a < 4000000){
	sum = a + b;
  a = b;
  b = sum;
  if(a % 2 == 0){
    even_a.push(a);
  }
  console.log(even_a);
  
 	console.log('sum:' + sum);
  console.log('total:' + total);
}
  for(var count = 0; count < even_a.length; count++){
  	arrary_sum += even_a[count];
    console.log('arrary_sum:' + arrary_sum);
  }