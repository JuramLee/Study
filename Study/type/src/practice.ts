interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'June', lastName: 'User' };

document.body.textContent = greeter(user);

let obj: object = { name: 'NAME', age: 29 };

obj = { A: 'A', B: 'B' };
console.log(obj);

export {};
