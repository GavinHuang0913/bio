// animate smooth scroll
$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  alert('Welcome...');

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});
