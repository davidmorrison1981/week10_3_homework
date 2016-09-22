var Rat = function(){
};

Rat.prototype = {
  touch: function(food){
    food.touched ? food.energy = 90 : food.energy   
  }
};

module.exports = Rat;