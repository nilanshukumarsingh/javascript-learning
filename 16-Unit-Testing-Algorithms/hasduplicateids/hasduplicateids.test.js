const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree has Duplicate IDs', () => {
    // To reduce the code we can run certain things before each test and after each test we can do by using called hooks. So there is called hook is beforeEach

    let root;

    beforeEach(() => {
        console.log('beforeEach ran...');
        root = document.createElement('div');
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');

        root.appendChild(child1);
        root.appendChild(child2);
    })

    afterEach(() => {
        console.log('afterEach ran...')
        root = null;
    })

    it('should be a function', () => {
        expect(typeof hasDuplicateIds).toEqual('function');
    })

    it('should return a boolean', () => {
        expect(typeof hasDuplicateIds()).toEqual('boolean');
    })

    it('should return a false if no root', () => {
        expect(hasDuplicateIds()).toBeFalsy();
    })

    it('should return a true if there are duplicate IDs', () => {
        // Create a mock elements
        /*
        const root = document.createElement('div');
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');

        root.appendChild(child1);
        root.appendChild(child2);

        // Add duplicate ids
        root.id = 'root';
        child1.id = 'child';
        child2.id = 'child';
        */

        root.id = 'root';
        root.children[0].id = 'child';
        root.children[1].id = 'child';

        const result = hasDuplicateIds(root);

        expect(result).toEqual(true);
    })

    it('should return a false if there are no duplicate IDs', () => {
        // Create a mock elements
        /*
        const root = document.createElement('div');
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');

        root.appendChild(child1);
        root.appendChild(child2);

        // Add ids
        root.id = 'root';
        child1.id = 'child1';
        child2.id = 'child2';
        */

        root.id = 'root';
        root.children[0].id = 'child1';
        root.children[1].id = 'child2';

        const result = hasDuplicateIds(root);

        expect(result).toEqual(false);
    })
})


