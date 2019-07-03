$(document).ready(function () {


$('.b-insurance-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  adaptiveHeight: true,
  arrows: true,
  dots: true
});

$('.menu-icon').click(function(){
  $('.b-header-right').toggleClass('active');
  $('.menu-icon').toggleClass('active');
});


$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-header-right").length) {
    $('.b-header-right').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});

$('.b-finance-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: true,
  dots: false,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});



$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});

var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 230){
        $('.b-header-top').addClass('active');
     } else if(scrolledpx < 231){
      $('.b-header-top').removeClass('active');
     }

  });


// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(56.00754747, 92.86687374), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
      
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(56.00754747, 92.86687374),
        map: map,
        title: 'Snazzy!',
                icon: {
                    url: "images/pin.png",
                    scaledSize: new google.maps.Size(22, 26),
                    labelOrigin: new google.maps.Point(145, 25, 5),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(36, 49)           
                }      

    });

}

// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init2);

function init2() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(56.00754747, 92.86687374), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
      
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map2');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(56.00754747, 92.86687374),
        map: map,
        title: 'Snazzy!',
                icon: {
                    url: "images/pin.png",
                    scaledSize: new google.maps.Size(22, 26),
                    labelOrigin: new google.maps.Point(145, 25, 5),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(36, 49)           
                }      

    });

}






});


