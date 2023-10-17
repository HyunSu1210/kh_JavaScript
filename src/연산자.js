// 비교 연산자
// 동등 연산자
console.log(1 =="1");
console.log(1 == true);
console.log(0 == false);

// 부등연산자
console.log(1 !="1");
console.log(1 != true);
console.log(0 != false);

// 일치연산자 (===) : 두 값이 같은지 비교하는데 데이터 타입도 함께 확인
console.log(1 ==="1");
console.log(1 === true);
console.log(0 === false);

// 형변환 : 묵시적형변환 / 명시적형변환
let num1 = 10 + "10";
console.log(num1);

// 반복문 : while, do~while, for, for-in, for-of
let brands = ["애플", "구글", "페이스북", "아마존","삼성전자"];
for(let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}

// 고객이 구입 가능한 음료 리스트 구하기
let productList = [
    {
        name: "레쓰비",
        price: 700
    },
    { name: "티오피",
        price: 900
    },

    
];
let inputCoin = 800;
let outputList = [];
for(let i = 0; i < productList.length; i++) {
    if(productList[i].price <= inputCoin) {
        outputList.push(productList[i]);
    }
}
console.log(outputList);

// for-in : 객체의 프로퍼티를 열거하는데 사용
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

for(let key in person) {
    console.log(person[key]);
}

// for-of : 향상된 for문과 유사
let brand = ["애플", "구글", "페이스북", "아마존","삼성전자"];
