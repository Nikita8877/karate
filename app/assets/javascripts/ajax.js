
 $(document).ready(function() {
 $(".navigation li a").on("click", function(e) {
  	e.preventDefault();
   $.ajax($(this).attr("href"), {
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
        $(".loading2").hide();
      }
    });
   });
 }); 
