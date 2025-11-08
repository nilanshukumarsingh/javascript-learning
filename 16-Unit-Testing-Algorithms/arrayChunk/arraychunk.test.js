// We're going to use assertion library from the node js includes. So it is core Node js module called assert and we will use with "jest".

// An assertion is statement that is either true or false.


const assert = require('assert');
const chunk = require('./arraychunk');

describe('Array Chunking', () => {
    it('should create chunks of a specific size', () => {
        assert.deepEqual(chunk([1,2,3,4], 2), [[1,2], [3,4]]);
        assert.deepEqual(chunk([1,2,3,4], 3), [[1,2,3], [4]]);
    })
})
