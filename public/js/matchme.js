$('a[href*=#]').click(function(){
  return false;
});
  

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
  wrap: $('#people'),
  people: [
    {
      name: 'Salsa Dancing',
      img: "http://www.dancesf.com/dancing/albany-salsa-dance.jpg"
    },
    {
      name: 'Fashion',
      img: "http://cdn.fashionmagazine.com/wp-content/uploads/2015/05/Fashion-Magazine-Summer-2015-Ashley-Benson-733x1000.jpg"
    },
    {
      name: 'Figure Skating',
      img: "http://wethepeopleofct.org/wp-content/uploads/2016/01/18.jpg"
    },
    {
      name: 'Comic Books',
      img: "http://www.getcashforcomics.com/media/images/common/comics.png"
    },
    {
      name: 'Gaming',
      img: "http://hfwireless.com/wp-content/uploads/2012/01/game-console-repair-anchorage-300x297.jpg"
    },
    {
      name: 'Archery',
      img: "http://www.getactivelondon.com/image-cache/image-441-orig.jpg"
    },
    {
      name: 'Student Government',
      img: "http://stanforddaily.wpengine.netdna-cdn.com/wp-content/uploads/2016/01/SLIDER.011315.Senate-272x272.jpg"
    },
    {
      name: 'Volunteering',
      img: "http://www.projects-abroad.org/_photos/projects/medicine-and-healthcare/medicine/kenya/female-intern-practicing-medicine.jpg"
    },
    {
      name: 'Cycling',
      img: "http://www.hickorywellcrafted.com/live/wp-content/uploads/2010/12/1047mountain_biking.jpg"
    }
  ],   
  add: function(){
    var random =     this.people[Math.floor(Math.random() * this.people.length)];
    this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong></span></div>");
  }
}

var App = {
  yesButton: $('.button.yes .trigger'),
  noButton: $('.button.no .trigger'),
  blocked: false,
  like: function(liked){
    var animate = liked ? 'animateYes' : 'animateNo';
    var self = this;
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
        Person.add();
        self.blocked = false;
      });
    }
  }
};

var Phone = {
  wrap: $('#phone'),
  clock: $('.clock'),
  updateClock: function() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    hours = (hours < 10 ? "0" : "") + hours;
    min = (min < 10 ? "0" : "") + min;
    var str = hours + ":" + min;
    this.clock.text(str);
  }
}

App.yesButton.on('mousedown', function() {
  App.like(true);
});

App.noButton.on('mousedown', function() {
  App.like(false);
});

$(document).ready(function() {
  Phone.updateClock();
  setInterval('Phone.updateClock()', 1000);
  
  Person.add();
  Person.add();
  Person.add();
  Person.add();
});

/*
http://codepen.io/renatorib/pen/extCA

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
});

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
*/