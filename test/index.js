const assert = require('assert');
const main = require('..');

describe('ocrtts', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'ocrtts');
  });
});
