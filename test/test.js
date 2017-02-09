/*jshint esversion:6 */

const Sorting = require('../scripts/sorting.js');
const quickSort = require('../scripts/quick-sort.js');
const chai = require('chai');

chai.should();

describe('Data', () =>{
  let array = Sorting.array;

  it('should be a function', () =>{
    array.should.be.a('function');
  });

  it('should be an array', () =>{
    array.should.be.a('array');
  });


  it('should be a length of 3 or more numbers', () =>{
    array.should.have.length.above(3);
  });
});

