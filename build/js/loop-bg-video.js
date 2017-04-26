'use strict';

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('bg-video', {
    videoId: '4sTcxHqwy_c', // YouTube Video ID
    width: $(window).width(),
    playerVars: {
      playlist: 'PLblablabla',
      autoplay: 1, // Auto-play the video on load
      controls: 0, // Show pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      loop: 1, // Run the video in a loop
      fs: 0, // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3, // Hide the Video Annotations
      autohide: 1 // Hide video controls when playing
    },
    events: {
      onReady: function onReady(e) {
        e.target.mute();
      },
      onStateChange: function onStateChange(e) {
        if (e.data == 2) {
          e.target.playVideo();
        }
      }
    }
  });
}