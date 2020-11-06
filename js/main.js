$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({ scrollOffset: 0 });
    $('.sidenav').sidenav().on('click tap', 'li a', () => {
      $('.sidenav').sidenav('close');
    });

  });


  $(window).on('scroll', function () {
 

    var $nav = $("nav");
    var $sec = $("section");
 
    $nav.toggleClass('scrolled', $(this).scrollTop() > $sec.height()*1.9 && $(this).scrollTop() < $sec.height()*8);
  

    
  
  });
  
  $(window).trigger('scroll');
  
  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 300, // offset (in px) from the original trigger point
  delay: 30, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//     // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// // after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//     player = new YT.Player('ytplayer', {
//         width: '100%',
//         height: '100%',
//         videoId: 'bPKHl85soVQ',
//         playerVars: {
//             'autoplay': 1,
//             'showinfo': 0,
//             'autohide': 1,
//             'loop': 1,
//             'controls': 0,
//             'modestbranding': 1,
//             'vq': 'hd1080',
//             'start': 33
//         },
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
// event.target.playVideo();
// player.mute(); // comment out if you don't want the auto played video muted
// }

// // 5. The API calls this function when the player's state changes.
// // The function indicates that when playing a video (state=1),
// // the player should play for six seconds and then stop.
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.ENDED) {
//         player.seekTo(0);
//         player.playVideo();
//     }
//     }
//         function stopVideo() {
//         player.stopVideo();
//     }
