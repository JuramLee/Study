
const students = {
    apple: "이주람",
    banana: "조상현",
    orange: "장영승",
};

const { apple, banana, orange:name1 } = students;
console.log(apple, banana);     // 이주람, 조상현
console.log(name1);      // 장영승


const user = ['이주람', '조상현', '장영승'];
const [lee, jo, jang] = user;

console.log(jang);      // 장영승
console.log(lee, jo);   // 이주람, 조상현


const dog = {
    name: "kong",
    age: 10,
    weight: 5,
};


// const printDog = (dog) => {
    
    //     console.log(`강아지 이름은 ${dog.name}, 나이는 ${dog.age}`);
    // }
    
    const printDog = ({ name, age, weight }) => {
        console.log(`강아지 이름은 ${dog.name}, 나이는 ${dog.age}`);
        // 파라미터(인자, 매개변수)에서도 구조분해할당이 가능하다
        // const {name, age, weight} = dog;
    }
    
    printDog(dog);
    
    /*
    update(id, data) {
        console.log(id, data.title, data.content);
    }
    
    update(id, {title, content}) {
        console.log(id, title, content);
}
 */