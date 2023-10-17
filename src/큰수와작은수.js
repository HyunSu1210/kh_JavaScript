let a,b,c;
a = Number(prompt("첫번째수 : "));
b = Number(prompt("두번째수 : "));
c = Number(prompt("세번째수 : "));
if(a > b) {
    if(a > c) {
        document.write("가장 큰 수 : " + a);
    } else {
        document.write("가장 큰 수 : " + c);
    }
} else {
    if(b > c) {
        document.write("가장 큰 수 : " + b);
    } else {
        document.write("가장 큰 수 : " + c);
    }
}
if(a > b) {
    if(b > c) {
        document.write("가장 작은 수 : " + c);
    } else {
        document.write("가장 작은 수 : " + b);

    }
} else {
    if(a > c) {
        document.write("가장 작은 수 : " + c);

    } else {
        document.write("가장 작은 수 : " + a);
    }
}

