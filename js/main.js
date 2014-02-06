// document.ready
$(function(){

  $window = $(window);

  // nav return false
  $('.main-nav a').click(function(e){
    var id = $(this).attr('href');
    var navHeight = $('#header').outerHeight();

    $("html,body").animate({
      scrollTop: id == "#header" ? 0 : $(id).offset().top - navHeight
    }, 1500, 'easeInOutExpo');

    e.preventDefault();
  })
  
  // google maps
  function initGMAP() {
    var gmap;
    var gmapLatLng = new google.maps.LatLng(34.9371995,-82.223791);
    var gmapOptions = {
      zoom: 17,
      center: gmapLatLng,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false
    };

    gmap = new google.maps.Map(document.getElementById('map-canvas'), gmapOptions);

    // var gmapMarker = new google.maps.Marker({
    //   position: gmapLatLng,
    //   map: gmap,
    //   title: 'Greer City Hall',
    //   anchorPoint: gmapLatLng
    // });

    // var gmapInfoContent = [
    //   "<div>",
    //   "<h3 class='nmt'>Greer City Hall</h3>",
    //   "<ul class='list-unstyled nmt mb5'>",
    //   "<li class='mb5'>301 E Poinsett St<br>Greer, SC 29651</li>",
    //   "<li><a class='btn btn-info btn-mini' href='https://www.google.com/maps/preview/dir//Greer+City+Hall,+301+E+Poinsett+St,+Greer,+SC+29651/@34.9371996,-82.223791,17z/data=!4m12!1m3!3m2!1s0x88582a9a47a49a7b:0x9b5e2937b8bb2bec!2sGreer+City+Hall,+East+Poinsett+Street,+Greer,+SC!4m7!1m0!1m5!1m1!1s0x88582a9a47a49a7b:0x9b5e2937b8bb2bec!2m2!1d-82.223805!2d34.93718' target='_blank'>Get Directions</a></li>",
    //   "</ul>",
    //   "</div>"
    // ].join("");

    // var gmapInfo = new google.maps.InfoWindow({
    //   content: gmapInfoContent,
    //   maxWidth: 600,
    //   position: gmapLatLng
    // });

    // gmapInfo.open(gmap,gmapMarker);

  }

  google.maps.event.addDomListener(window, 'load', initGMAP());

  // screen resize
  $(window).resize(function(){
    google.maps.event.addDomListener(window, 'load', initGMAP());
  })

})