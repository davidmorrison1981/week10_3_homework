var Baddie = function(name, power, wound){
  this.name=name;
  this.power=power;
};

Baddie.prototype = {
  wound: function(hero){
    return hero.health - 50;
  }
};

module.exports = Baddie;