/*jshint esversion:6 */

const chai = require('chai');

chai.should();

const quickSort = require('../scripts/quick-sort.js');

describe('quickSort', () =>{

  it('should be a function', () =>{
    quickSort.should.be.a('function');
  });



});