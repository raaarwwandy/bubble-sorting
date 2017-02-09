/*jshint esversion:6 */

const chai = require('chai');

chai.should();

const mergeSort = require('../scripts/merge-sort.js');

describe('mergeSort', () =>{

  it('should be a function', () =>{
    mergeSort.should.be.a('function');
  });



});