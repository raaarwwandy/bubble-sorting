/*jshint esversion:6 */

const chai = require('chai');

chai.should();

const insertion = require('../scripts/inserstion.js');

describe('insertion', () =>{

  it('should be a function', () =>{
    insertion.should.be.a('function');
  });



});