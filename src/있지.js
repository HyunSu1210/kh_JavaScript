function showDetail() {
    document.querySelector('#desc').style.display = "block"; // 자리 차지함
    document.querySelector("#open").style.display = "none"; // 숨김
}

function hideDetail() {
    document.querySelector('#desc').style.display = "none";
    document.querySelector("#open").style.display = "block";
}