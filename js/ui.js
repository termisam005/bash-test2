
/*$(window).scroll(function() {  
  if ($(".sub_header").length > 0 ) {
    if ($(".sub_header").offset().top > 0){
      $(".sub_header").addClass("bgfff");
    } else {
      $(".sub_header").removeClass("bgfff");
    }
  }
});*/

$(window).scroll(function() {  
	if ($("header").offset().top > 50){
		$(".top_util").addClass("dpnone");
		$(".header_line").addClass("bgfff");
		$(".Gnb ul li a").addClass("pdcenter");
	} else {
		$(".top_util").removeClass("dpnone");
		$(".header_line").removeClass("bgfff");
		$(".Gnb ul li a").removeClass("pdcenter");
    }
});



