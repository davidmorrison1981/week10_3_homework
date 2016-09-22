var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddie = require('../baddie');


describe("Hero", function(){

   it('should create a hero with a name', function(){
     var david = new Hero( "David" );
     assert.equal("David", david.name);
   })

   it('should create a hero with a health', function(){
     var david = new Hero( "David", 100 );
     assert.equal(100, david.health);
   })

   it('should create a hero with a favorite food', function(){
     var david = new Hero( "David", 100, "sausages" );
     assert.equal("sausages", david.favFood);
   })

   it('hero can speak their name!', function(){
     var david = new Hero( "David", 100, "sausages" );
     assert.equal("Fear not Damsel in distress!  I am Hero David!", david.talk());
   })

 });

describe("Food", function(){
  it('should create a food with a name', function(){
    var carrots = new Food( "Carrots" );
    assert.equal("Carrots", carrots.food);
  })

  it('should create a food with a replenishment value', function(){
    var carrots = new Food( "Carrots", 10 );
    assert.equal(10, carrots.energy);
  })

  it('should increase health when hero eats', function(){
    var david = new Hero( "David", 100, "sausages" );
    var carrots = new Food( "Carrots", 10 );
    assert.equal(110, david.eats(carrots));
  })

  it('should increase health by 1.5 when hero eats favFood', function(){
    var david = new Hero( "David", 100, "sausages" );
    var sausages = new Food( "Sausages", 50 );
    assert.equal(150, david.eats(sausages));
  })


  it('should decrease health when hero eats poisoned food', function(){
    var david = new Hero( "David", 100, "sausages" );
    var sausages = new Food( "Sausages", 50, true );
    var roland = new Rat("Roland");
    roland.touch(sausages);
    assert.equal(10, david.eats(sausages));
  })

  it('health should go down when baddie attacks', function(){
    var david = new Hero( "David", 100, "sausages" );
    var john = new Baddie("John", "drops C-bomb!", 50);
    assert.equal(50, john.wound(david));
  })



});