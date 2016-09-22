var Hero = function (name, health, favFood){
  this.name=name;
  this.health = health;
  this.favFood = favFood;
}

Hero.prototype = {
    talk: function(){
      return "Fear not Damsel in distress!  I am Hero " + this.name + "!"
    },

    eats: function(food){
       if(food.touched === true){
          return this.health - food.energy
       
       }else if (food.food === this.favFood){
          return 1.5*this.health

       }else{

         return this.health += food.energy
    }
  }
};

module.exports = Hero;
