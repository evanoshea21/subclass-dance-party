var makeRandomDancer = function(top, left, timeBetweenSteps) {

this.className = 'randomDancer';

makeDancer.call(this, top, left, timeBetweenSteps, this.className);

};

makeRandomDancer.prototype = Object.create(makeDancer.prototype);
makeRandomDancer.prototype.constructor = makeRandomDancer;

makeRandomDancer.prototype.step = function(timeBetweenSteps) {//timeBetweenSteps = 5s
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;

  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //debugger;
  var top = this.y;
  var left = this.x;
  // console.log(window.dancers);

   this.randomMovement(String(top), String(left), timeBetweenSteps);
};
//can you push to the repo?

makeRandomDancer.prototype.randomMovement = function(top1, left1, timeBetweenSteps) {
  //start animation here
  //create new random top and random left (between -30 and 30)
  //+= that inside the animation
  //start new animation at the end of this animation
  var s = this;
  var x = Math.floor((Math.random() * 20 - 10));
  var y = Math.floor((Math.random() * 20 - 10));

    this.$node.animate({
      left: '+=' + left1 + String(x),
      top: '+=' + top1 + String(y)
     // left: "+=5"
    }, timeBetweenSteps, function(){
      console.log('animation ended...')
    });


};