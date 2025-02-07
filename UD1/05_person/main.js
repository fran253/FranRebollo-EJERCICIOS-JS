// Crear un objeto Persona con los siguientes 
// datos (nombre, apellidos, edad, género, dirección)

const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    return {
        name: name,
        lastname: lastname,
        age: years,
        gender: gender,
        address: address
    };
}

// Crear un objeto Persona y realizar pruebas
let person = createPerson('John', 'Foo', 35, 'male', 'fake street 123');
assert.strictEqual(person.name, 'John');
assert.strictEqual(person.lastname, 'Foo');
assert.strictEqual(person.age, 35);
assert.strictEqual(person.gender, 'male');
assert.strictEqual(person.address, 'fake street 123');

console.log('All tests passed');
