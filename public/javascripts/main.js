$(document).ready(function() {
  setTimeout(slide_front_text, 2500);

  $('.photos').hover(() => {
    console.log('poop');
    $('overlay').toggleClass('active')
  })

  $('.href').click(function(event){
    console.log('poops');
    event.preventDefault();
    return false;
  })

})

//   function slide_front_text() {
//   $('#slider_text').slideUp(800, function() {
//       $(this).text('A Fresh Beginning').slideDown(500).delay(2200);
//       $(this).slideUp(1200, function() {
//         $(this).text("Upgraded Living").slideDown(500).delay(2200);
//         $(this).slideUp(1200, function() {
//           $(this).text("Point Richmond Apartments").slideDown(500).delay(5500);
//         });
//       });
//   });
//
//
// }
