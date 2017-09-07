$(document).ready(function() {
  $(function() {
    $('body').removeClass('fade-in');
    $('.container').removeClass('fade-in');
    $('.vertical-line').removeClass('fade-in');
    $('.side-content').removeClass('fade-in');
  });
  $('.border').fadeIn();

  $('.circle').hover (
    function() {
      $(".name").toggleClass("hover");
      $(".circle").toggleClass("hover");
    }, function() {
      $(".name").toggleClass("hover");
      $(".circle").toggleClass("hover");
  });
  $('.circle').click (
    function() {
      $(".landed").toggleClass("active");
      $("body").toggleClass("load");
      $(".landing").toggleClass("active");
    }, function() {
      $(".landed").toggleClass("active");
      $("body").toggleClass("load");
      $(".landing").toggleClass("active");
  });

  $('#logo').hover (
    function() {
      $("#logo").toggleClass("logo-hover");
    }, function() {
      $("#logo").toggleClass("logo-hover");
  });

  setTimeout(function() {
    $(".circle").toggleClass("load");
  }, 800);
  setTimeout(function(){
    $(".name").toggleClass("load");
  }, 800);

  $('.portfolio-menu').click(function(event) {
    $('.portfolio-menu').removeClass('active');
    $('.portfolio-content').removeClass('active');
    var activePortf = $(this).attr("id");
    var activeContent = '#'+activePortf+'-content';
    $(this).addClass('active');
    $(activeContent).addClass('active');
  });
});
