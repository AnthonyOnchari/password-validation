// Using mocha
const { assert } = require('chai');
const password = require('./password'); // Correct relative path

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(password("Abcd1234"), true);
    assert.strictEqual(password("Abcd123"), false);
    assert.strictEqual(password("abcd1234"), false);
    assert.strictEqual(password("AbcdefGhijkLmnopQRsTuvwxyZ1234567890"), true);
    assert.strictEqual(password("ABCD1234"), false);
    assert.strictEqual(password("Ab1!@#$%^&*()-_+=<>{}[]|\\:;?/>,<."), true);
    assert.strictEqual(password("!@#$%^&*()-_+=<>{}[]|\\:;?/>,<."), false);
  });
});
