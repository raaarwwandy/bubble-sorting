/*jshint esversion:6 */

const chai = require('chai');

chai.should();

const selectionSort = require('../scripts/selection-sort.js');

describe('selectionSort', () =>{

  it('should be a function', () =>{
    selectionSort.should.be.a('function');
  });



});