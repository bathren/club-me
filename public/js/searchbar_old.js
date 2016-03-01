/* source: http://jsbin.com/OjOTIGaP/1/edit?html,js,output */

$(document).ready(function () {

  var sbar = '<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">'+
    '<div class="container">'+
      '<div class="navbar-header">'+
        '<a class="navbar-toggle">'+
          '<span class="sr-only">Toggle navigation</span>'+
          '<span class="icon-bar"></span>'+
          '<span class="icon-bar"></span>'+
          '<span class="icon-bar"></span>'+
        '</a>'+
        '<a class="col-m-6" id="imaginary_container" href="#">'+
          '<div class="input-group stylish-input-group">'+
            '<input type="text" class="form-control"  placeholder="Search" >'+
            '<span class="input-group-addon">'+
              '<button type="submit">'+
                '<span class="glyphicon glyphicon-search"></span>'+
              '</button>'+
            '</span>'+
          '</div>'+
        '</a>'+
      '</div>'+
      '<div id="slidemenu">'+
        '<ul class="nav navbar-nav">'+
          '<li><a href="/indprofile">Profile</a></li>'+
          '<li class="/active"><a href="#">Match Me</a></li>'+
          '<li><a href="/myclubs">My Clubs</a></li>'+
          '<li><a href="/search">Club Search</a></li>'+
          '<li><a href="/settings">Help</a></li>'+
        '</div>'+
      '</div>'+
    '</div>';

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