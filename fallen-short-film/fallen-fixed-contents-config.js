var topofCont = $("#fallen-section-introduction").offset().top;
var windowHeight = $(window).height();
var cutpoint = topofCont - windowHeight*(1/3);

$(window).scroll(function(){
  if($(window).scrollTop() > (cutpoint)){
    $(".fallen-fixed-contents").css({"opacity":"1.0","z-index":"1000"});
  }
  else{
    $(".fallen-fixed-contents").css({"opacity":"0","z-index":"-1000"});
  }
});
