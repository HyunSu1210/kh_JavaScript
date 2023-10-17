// n개의 정수를 입력 받아 n * n 출력
// CSS 적용
// 3
// 1 2 3 
// 4 5 6
// 7 8 9
let n = Number(prompt("n * n 출력하기 ! n개의 정수를 입력하세요 : "));
for(let i = 1; i <= n*n; i++) {
    document.write("<span class=\"nbyn\">" + i + "</span>");
    if(i % n == 0) document.write("<br>");
}