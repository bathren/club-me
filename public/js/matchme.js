'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
  $("#like").unbind().click(likeClick);
  $('#remove-slide').unbind().click(removeClick);
}

var counter = 8;
var added = [];
for(var n = 0; n < counter; n++) {
  added[n] = false;
}

var $status = $('.pagingInfo');
var $slickElement = $('.spin');
var first = true;
var currentSlide = 0;

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + i;
    //console.log("i: " + i);
    //$status.text(i + '/' + slick.slideCount);
});

$('.spin').slick({
  //dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});


function removeClick(e) {
    e.preventDefault();

    removeCurrSlide();
    
};

function removeCurrSlide() {
  var ind = $("div.slick-active").attr("data-slick-index");
    console.log("Removed slide #" + ind);
    if(first) {
    var i = $("div.slick-active").attr("data-slick-index");
    //console.log("clicked 'No' on: " + i);
    $slickElement.slick('slickRemove', i);
    var j = 0;
    $("div.slick-slide").each(function(){
       $(this).attr("data-slick-index",j);
       j++;
    });
    first = false;
  }
    else {
    var i = $("div.slick-active").attr("data-slick-index");
    //console.log("clicked 'No' on: " + i);
    if( i == 0) {
      i = 1;
    }
    $slickElement.slick('slickRemove', i-1);
    var j = 0;
    $("div.slick-slide").each(function(){
       $(this).attr("data-slick-index",j);
       j++;
    });
  }
  counter--;
  if(counter == 0) {
    showBookmarked();
  }
}

function showBookmarked() {
  $("#bookmarked").css("display", "");
  $("#yesno").css("display", "none");
}

function likeClick(e) {
  console.log("Like button clicked");
  // Cancel the default action, which prevents the page from reloading
  e.preventDefault();
  //var ind = $("div.slick-active").attr("data-slick-index");
  var ind = $("div.slick-active span").attr("id");
  $.getJSON("json/matchme.json", function(data) {
    console.log("ind: " + ind);
    //console.log(data.match[ind]["name"] + ": " + data.match[ind]["matched"])
    if(added[ind] == false) {
      var toAdd = "<a href='" + data.match[ind]["url"] + "'>" + "<img style='width:150px; padding:1rem; text-align:center; display:block' class='img-responsive' src='" + data.match[ind]["image2"] + "''></a>";
      $(".bookmarked").append("<div>" + toAdd +"</div>");
      added[ind] = true;
      removeCurrSlide();
    }
    
  });
}
