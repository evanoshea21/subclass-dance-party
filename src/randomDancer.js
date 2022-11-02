var makeRandomDancer = function(top, left, timeBetweenSteps) {

this.className = 'randomDancer';

makeDancer.call(this, top, left, timeBetweenSteps, this.className);

}

makeRandomDancer.prototype = Object.create(makeDancer.prototype);
makeRandomDancer.prototype.constructor = makeRandomDancer;

makeRandomDancer.prototype.step = function(timeBetweenSteps) {//timeBetweenSteps = 5s
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;

  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(window.dancers);
  randomMovement(timeBetweenSteps);
};

makeRandomDancer.prototype.randomMovement = function(timeBetweenSteps) {
  //start animation here
  //create new random top and random left (between -30 and 30)
  //+= that inside the animation
  //start new animation at the end of this animation
  var x = (Math.random() * 60 - 30);
  var y = (Math.random() * 60 - 30);
  this.$node.animate({
    left: '+=' + String(x),
    top: '+=' + String(y)
   // left: "+=5"
  }, timeBetweenSteps, function(){
    console.log('animation ended...')
  });
};