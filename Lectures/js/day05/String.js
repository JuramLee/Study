const str = "Hello";

String.prototype.print = function() {
    console.log("문자열입니다.");
}

str.print(); // prototype 쓰면 모든 오브젝트(지금은 String)가 사용할 수 있는 함수 만들수있음


console.log(str.charAt(4)); // o
console.log(str.concat("Juram"));   //HelloJuram

console.log(str.indexOf("e"));    //1
console.log(str.split("e"));      //["H",, "llo"];