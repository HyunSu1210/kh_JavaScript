// 정규 표현식 : 정규표현식을 사용하여 문자열 검색, 대체, 추출 등을 수행. 패턴 매칭.
// exec() : 패턴과 일치하는 문자열 반환. 없으면 null

// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/ // 슬래시(/)로 감싸는 정규식 리터럴
// const result1 = /가장+/.exec(targetStr); // RegExp 객체를 사용

// console.log(result1);
// const result2 = pattern.exec(targetStr);
// console.log(result2);

// test() : 문자열에 특정 패턴과 일치하는 문자열이 있는지 검색. 있으면 true를, 없으면 false를 반환.
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g; // 슬래시(/)로 감싸는 정규식 리터럴
// const result1 = pattern.test(targetStr);
// console.log(result1);
// const result2 = pattern.test(targetStr);
// console.log(result2);

// let phoneNumber = "010-5006-4146 010-5006-4146";
// const regex = /\d{3}-\d{4}-\d{4}/g;
// let result1 = regex.test(phoneNumber);
// console.log(result1);
// let result2 = regex.test(phoneNumber);
// console.log(result2);
// let result3 = regex.test(phoneNumber);
// console.log(result3);

let phoneNumber = "010-1234-45678";
const regex = /^\d{2,3}-\d{3,4}-\d{4}$/;
let rst1 = regex.test(phoneNumber);
console.log(rst1);
