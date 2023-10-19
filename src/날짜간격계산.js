// 현재 시간 기준으로 수료일 계산하기
// 24시간 * 60분 * 60초 * 1000밀리초
//remainTime = parseInt(remainTime/(1000*60*60*24));

const dDay = new Date("2024-02-21");
const cDay = new Date();

const toNow = cDay.getTime();
const toDat = dDay.getTime();
const remainTime = toDat - toNow;
const calcDay = Math.round(remainTime / (1000*60*60*24));

document.querySelector('#result').innerText = calcDay;