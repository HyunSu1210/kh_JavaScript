/* 성적을 입력받아 학점 출력하기
- 0 ~ 100점 사이가 아니면 입력 오류 출력
- 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리 */

let grade, num;
num = prompt("성적을 입력하세요 : ");
while (true) {
    if (0 <= num && num <= 100) {
        if(90 <= num) grade = "A";
        else if(80 <= num) grade = "B";
        else if(70 <= num) grade = "C";
        else if(60 <= num) grade = "D";
        else grade = "F";
} else num = prompt("성적을 다시 입력하세요 : "); continue;

}
