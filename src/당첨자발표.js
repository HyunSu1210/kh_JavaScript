// 당첨자 발표
// 응모자 수를 입력받음
// 랜덤 함수를 통해서 당첨자를 생성해 당첨자 발표하기

let people = Number(prompt("응모자 수를 입력하세요 : "));
let winner = Math.floor(Math.random() * people + 1); // 응모자 수 중에서 당첨자 1명 랜덤으로 뽑기

document.querySelector('#winner').innerText = winner;