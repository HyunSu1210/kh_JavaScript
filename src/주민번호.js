// 주민등록번호를 입력 받아 성별, 나이 출력하기
// 문자열을 자르는 substring 사용
// 날짜 계산을 위해 Date 내장 객체 사용 (new Date())
// 주민등록번호 입력 길이 체크
// 하이픈 포함 여부 체크 (indexOf)
// HTML + CSS로 예쁘게 출력하기

let jumin;
while(true) {
    jumin = prompt("주민등록번호를 입력하세요 : ");
    if(jumin.length != 14) alert("입력 오류 : 다시 입력하세요.");
    else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다.");
        else break;
    }
}
let gender = jumin.charAt(7); // 문자열에서 해당 인덱스를 추출
let genderStr;
if (gender == '1' || gender == '3') genderStr = "남성";
else genderStr = "여성";

let todayYear = new Date();
let year = Number(jumin.substring(0,2));
if(gender == '1' || gender == '2') {
    year += 1900;
} else year += 2000;

let age = todayYear.getFullYear() - year + 1;
console.log(genderStr + age);

document.getElementById("value").innerHTML = `성별 : ${genderStr} 나이 : ${age}`;