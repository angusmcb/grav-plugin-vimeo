(function() {
  window.addEventListener('DOMContentLoaded', function() {
    var gravYoutubeEmbeds = document.querySelectorAll('.grav-vimeo--lazyloaded');

    for (var i = 0; i < gravYoutubeEmbeds.length; i++) {
      gravYoutubeEmbeds[i].addEventListener('click', function() {
        var iframe = this.querySelector('iframe');
        var src = iframe.getAttribute('data-src');
        iframe.src = src;
      });
    }
  });
})();
