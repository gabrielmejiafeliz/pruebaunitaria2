// hola_mundo.test.js

const holaMundo = require('./index');

test('Comprobacion del mensaje de saludo', () => {
    expect(holaMundo()).toBe('Hola, mundo');
});