var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //this = Object.create(makeDancer);
  //debugger;
  this.className = 'blinkyDancer';
  makeDancer.call(this, top, left, timeBetweenSteps, this.className);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //this.step(timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.oldStep = makeDancer.prototype.step;

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;

  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log(window.dancers);
  this.$node.toggle();
};