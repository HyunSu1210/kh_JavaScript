// 3개의 햄버거와 2개의 음료가 있음 가격을 입력했을 때 싼 조합을 출력하기

let list = [];
list[0] = Number(prompt("햄버거 1 의 가격 : "));
list[1] = Number(prompt("햄버거 2 의 가격 : "));
list[2] = Number(prompt("햄버거 3 의 가격 : "));
list[3] = Number(prompt("음료 1 의 가격 : "));
list[4] = Number(prompt("음료 2 의 가격 : "));


let burgermin = list[0];
let colamin = list[3];
for(let i = 0; i < list.length; i++) {
    if(i < 3 && burgermin > list[i]) burgermin = list[i];
    if(i > 2 && colamin > list[i]) colamin = list[i];
}
document.write(burgermin + colamin - 50 + "원");