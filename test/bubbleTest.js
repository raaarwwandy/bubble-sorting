/*jshint esversion:6 */

const chai = require('chai');

chai.should();

const bubbleSort = require('../scripts/bubble-sort.js');

describe('bubbleSort', () =>{

  it('should be a function', () =>{
    bubbleSort.should.be.a('function');
  });



});