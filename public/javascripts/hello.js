if (window.console) {
  console.log("Welcome to your Play application's JavaScript!");
  $('.toggle').on('click', function() {
  	  $('.container').stop().addClass('active');
  	});

  	$('.close').on('click', function() {
  	  $('.container').stop().removeClass('active');
  	});
}

