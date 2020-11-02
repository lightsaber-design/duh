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
