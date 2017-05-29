$(document).ready(function() {
  setTimeout(slide_front_text, 2500);

  $('.photos').hover(() => {
    console.log('poop');
    $('overlay').toggleClass('active')
  })

  $(".down_arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#images-info-wrapper").offset().top
    }, 1000);
});

$(".up_arrow").click(function() {
  $('html, body').animate({
      scrollTop: $("#email").offset().top
  }, 1200);
});

$(".signup").click(function() {
  $('html, body').animate({
      scrollTop: $("#email").offset().top
  }, 1200);
});

$('.container').click(function() {
  $('.container').toggleClass('.container:hover .overlay')
})

$('.container').click(function() {
  $('.container:hover .overlay').css('display', 'none')
})

  function slide_front_text() {
  $('#slider_text').slideUp(800, function() {
      $(this).text('A Fresh Beginning').slideDown(500).delay(2200);
      $(this).slideUp(1200, function() {
        $(this).text("Upgraded Living").slideDown(500).delay(2200);
        $(this).slideUp(1200, function() {
          $(this).text("Point Richmond Apartments").slideDown(500).delay(5500);
        });
      });
  });
};
})
