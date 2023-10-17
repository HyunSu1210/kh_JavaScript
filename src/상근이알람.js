//시간 정보(시간과 분) 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력하기 `${}`
// parseInt()함수 필요 : 정수로 바꿔줘야 함
// 1. prompt를 사용해서 시간, 분 입력받기
// 2. 입력 받은 시간을 분으로 환산해서 45분을 빼기
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력하는데, 출력 시 템플릿 문자열 사용

let hour,min,sum;
hour = Number(prompt("시간을 입력하세요 : "));
min = Number(prompt("분을 입력하세요 : "));



sum = (hour * 60) + min;
console.log(sum);
if(sum < 45) {
    sum = (24 * 60) +min;
}
sum = sum - 45;
hour = parseInt(sum / 60);
min = sum % 60;

document.write(`<h2>시간 : ${hour}, 분 : ${min}</h2>`);