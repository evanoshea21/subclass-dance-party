$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {

      // $('.dancer').animate({
      //   left: "50"
      // }, 5000, function() {
      //   // Animation complete.
      // });
    // });
    var y = Math.floor($("body").height() / 10);

    for(var i = 0; i < window.dancers.length; i++) {

      var node = window.dancers[i].$node;
     // debugger;
      node.animate({
        left: "50",
        top: String(y)
      }, 5000, function(){
        console.log('animation ended...')
      });
      y += Math.floor(($("body").height() * .8) / window.dancers.length); //height/#dancers
    }
  });

  $('.addRandomDancerButton').on('click', function(event) {
//debugger;
var x = this;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    //debugger;
  });

  $('.addDancerButton').on('click', function(event) {
debugger;
    //'dancer-maker-function-name'
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

