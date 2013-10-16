 $(document).ready(function() {
   function map() {
    if(!$('#map').length){return}
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(60.00657787470756, 30.227818274920008),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

 
  function slider(){
    if(!$('.sliderContent').length){return}
    $('.slider3').mobilyslider({
      transition: 'fade',
      animationSpeed: 800,
      bullets: true,
      arrowsHide: false
    });
  }

  map();
  slider();

   $(".navigation li a").on("click", function(e) {
  	e.preventDefault();
    url = $(this).attr("href");
   $.ajax(url, {
      success: function(response) {
        $('.forajax').html(response);
      },
      error: function() {
         $('.forajax').html('<li>ПРОБЛЕМА С СЕРВЕРОМ! ПОДОЖДИТЕ ИЛИ ПОПРОБУЙТЕ ЗАЙТИ НА САЙТ ЧУТЬ ПОЗЖЕ.</li>');
      },
      timeout: 3000,
      beforeSend: function() {
       $(".loading2").show();
     },
      complete: function() {
        history.pushState(null, null, url);
        $(".loading2").hide();
        map();
        slider();
      }
    });
   });
 }); 
