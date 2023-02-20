// Unit Testing with Mocha and Chai

// const assert = require("chai").assert;
// const multiply = require('./multiply.js');

import {assert} from 'chai';            //N.B If using import/export, "type": "module", must be included in the package.json
import {_multiply} from './multiply.js';

describe("Test Multiply _Test-First_TDD", function () {
	        // let m = multiply;
	        let m = _multiply;

// Is (a,b) equal to 1?
	// red
	it.skip("fail-test a=1, b=1 (no_multiply_func)", function () {
		assert.equal((a, b), 1);
	});
	// green
	it("test a=1, b=1 (no_multiply_func)", function () {
		let a = 1;
		let b = 1;
		assert.equal((a, b), 1);
	});

// Is (a,b) equal to 4?
	// red
	it.skip("fail-test a=2, b=2 (no_multiply_func)", function () {
		let a = 1;
		let b = 1;
		assert.equal((a, b), 4);
	});
	// red
	it.skip("fail-test a=2, b=2 (no_multiply_func)", function () {
		let a = 2;
		let b = 2;
		assert.equal((a, b), 4);
	});
	// refactor
	// it("test a=2, b=2 (multiply_func)", function () {
	// 	_multiply = (a, b) => {
	// 		return a * b;
	// 	};
	// 	assert.equal(_multiply(2, 2), 4);
	// });
	        it('test 2*2', function(){
                assert.equal(m(2,2),4)
            })

// Is (a,b) equal to 9?
	// green
	it("test a=3, b=3 (multiply_func)", function () {
		let _multiply = (a, b) => {
		let	c = a * b;
			return c;
		};
		assert.equal(_multiply(3, 3), 9);
	});

// Is (a,b) equal to 16?
    // green
	it("test a=4, b=4 (multiply_func)", function () {
		let _multiply = (a, b) => {
		let c = a * b;
			return c;
		};
		assert.equal(_multiply(4, 4), 16);
	});

// Is (a,b) equal to 23*45?
// green
    it("test a=23, b=45 (multiply_func)", function () {
        let _multiply = (a, b) => {
        let c = a*b;
            return c;
        };
        assert.equal(_multiply(23,45), 23*45)
    });
});