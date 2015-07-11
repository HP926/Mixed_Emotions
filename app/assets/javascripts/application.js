// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Parallax Scrolling Jquery
$(document).ready(function(){
                                        
                
});

function playSomeMusic(myGenre) {  
SC.initialize({      
  client_id: 'fe77db38368f173df942105c06dd7c57'
});

SC.get('/tracks', {genres: myGenre, bpm: { from: 100 } },
  function(tracks) {
    //FIRST soundcloud sends back an array of 50 objects (0~49)
    //so let's randomize which one we play:
      //this logic returns a number between 0 and 50
      var random = Math.floor(Math.random() * 10);
      var track_url = tracks[random].permalink_url;
      //LAST let's use the oEmbed method to display the soundplayer
      //in the element #target with a options such as auto play
      SC.oEmbed(track_url, {auto_play: true, color: "ff0066"},
        document.getElementById("target"));
      }
);

// SC.get('/tracks', { genres: Goodcry, bpm: { from: 60 } },
//   Goodcry = /tracks/genres(bpm 60)
//   function(tracks) {
//     //FIRST soundcloud sends back an array of 50 objects (0~49)
//     //so let's randomize which one we play:
//       //this logic returns a number between 0 and 50
//       var random = Math.floor(Math.random() * 10);
//       var track_url = tracks[random].permalink_url;
//       //LAST let's use the oEmbed method to display the soundplayer
//       //in the element #target with a options such as auto play
//       SC.oEmbed(track_url, {auto_play: true, color: "ff0066"},
//         document.getElementById("target"));
//       }
// );
}