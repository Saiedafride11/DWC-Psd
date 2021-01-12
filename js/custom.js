//initiating jQuery
	jQuery(function($) {
	  $(document).ready( function() {
		//enabling stickUp on the '.navbar-wrapper' class
		$('.navbar-wrapper').stickUp();
	  });
    });
    
//initiating jQuery
	jQuery(function($) {
	  $(document).ready( function() {
		$('#bar1').barfiller({ barColor: '#f38181', duration: 3000 });
			$('#bar2').barfiller({ barColor: '#f38181', duration: 3000 });
			$('#bar3').barfiller({ barColor: '#f38181', duration: 3000 });
			$('#bar4').barfiller({ barColor: '#f38181', duration: 3000 });
	  });
    });
    
//initiating jQuery
	jQuery(function($) {
	  $(document).ready( function() {
        $('#counter-block').ready(function(){
            $('.Happy').animationCounter({
                start: 0,
                end: 124,
                step: 2,
                delay:55
            });
            $('.Working').animationCounter({
                start: 0,
                end: 200,
                step: 1,
                txt: ' +',
                delay:50
            });
            $('.coffee').animationCounter({
                start: 0,
                end: 30,
                step: 1,
                txt: ' +',
                delay:100
            });
            $('.Reviews').animationCounter({
                start: 0,
                end: 1240,
                step: 3,
                delay:30
            });
        });
	  });
	});


    //initiating jQuery
	jQuery(function($) {
        $(document).ready( function() {
          //enabling stickUp on the '.navbar-wrapper' class
          new WOW().init();
        });
      });







    
