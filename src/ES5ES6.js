// ------------------------ ES5 -----------------------------
// forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메소드 입니다.
// map() : 배열의 모든 요소를 순회면서 새로운 배열을 만듭니다.
// filter() : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 새로운 배열을 만듭니다.
// reduce() : 배열의 모든 요소를 순회하며, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만듭니다.

const numbers = [1,2,3,4,5,6,7];
numbers.forEach(e => console.log(e));

const squares = numbers.map(e => e * e);
console.log(squares);

const even = numbers.filter(e => e % 2 == 0);
console.log(even);

// 입력받은 값을 하나씩 소모하면서 더해나가는 것
const sum = numbers.reduce((total, e) => total + e, 0);
console.log(sum);

// ------------------------ ES6 -----------------------------
// 재할당하지 않기
const arr1 = [1, 2, 3];
const arr2 = arr1.concat(4); // const는 새로운 변수를 만들어서 값을 할당해야 함

// 전개 연산자 : 배열이나 객체를 개별 요소로 분리해줌. 이를 이용해 배열을 합치거나 객체를 병합할 수 있음.
const obj1 = {x:1, y:2};
const obj2 = {z:3, w:4};

const obj3 = { ...obj1, ...obj2};
console.log(obj3);

function sum1(...numbers) {
    return numbers.reduce((tot, e) => tot + e, 0);
}
console.log(sum1(1,2,3,4,5,6,7,8,9));
