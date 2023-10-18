// 콜백(Callback) : 함수의 인자로 다른 함수를 전달하여 그 함수가 실행될 때 호출되는 함수를 의미
// 콜백 함수는 비동기적인 작업을 처리할 때 많이 사용

function cry() {
    console.log("cry");
}
function sing() {
    console.log("sing");
}
function dance() {
    console.log("dance");
}

// 일반 함수로 호출
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
checkMood("sad");
