const foods = ['apple', 'banana'];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if(foods.indexOf('orange') === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가 한다.
  foods.push('orange');
}

console.log(foods); // [ 'apple', 'banana', 'orange' ]