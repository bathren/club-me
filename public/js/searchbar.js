/* source: http://jsbin.com/OjOTIGaP/1/edit?html,js,output */

$(document).ready(function () {

  var sbar = 
   '<nav id="navbar" class="navbar navbar-inverse navbar-fixed-bottom">' +
  '<div class="container-fluid">' +
   '<div class="navbar-header">' +
    '</div>' +
    '<ul class="list-inline" class="nav navbar-nav" class="navi">' +
      '<li  style="display:inline"><a href="/indprofile">Profile</a></li>'+
      '<li  style="display:inline"><a href="/myclubs">My Clubs</a></li>'+
      '<li  style="display:inline"><a href="/matchme">Match Me</a></li>'+
      '<li  style="display:inline" class="active"><a href="/search">Categories</a></li>'+
      '<li  style="display:inline"><a href="/#">Logout</a></li>'+ 
    '</ul>'+
  '</div>' +
'</nav>';

    console.log(sbar);

    $("body").prepend(sbar);


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));
    
    $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));  

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

      var selected = $(this).hasClass('slide-active');

      $('#slidemenu').stop().animate({
        left: selected ? menuneg : '0px'
      });

      $('#navbar-height-col').stop().animate({
        left: selected ? slideneg : '0px'
      });

      $(pagewrapper).stop().animate({
        left: selected ? '0px' : slidewidth
      });

      $(navigationwrapper).stop().animate({
        left: selected ? '0px' : slidewidth
      });


      $(this).toggleClass('slide-active', !selected);
      $('#slidemenu').toggleClass('slide-active');


      $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

      if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
        $(selected).removeClass('slide-active');
      }


    });


});