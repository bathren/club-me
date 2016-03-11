$('a[href*=#]').click(function(){
  ga("send", "pageview", "matchme");
  return false;
});
  

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
var count;

var clubs = {
  wrap: $('#people'),
  people: [
    {
      name: 'Salsa Dancing',
      img: "http://www.dancesf.com/dancing/albany-salsa-dance.jpg",
      img2: "http://www.hercampus.com/sites/default/files/styles/full_width_embed/public/2014/01/16/cuban-salsa.jpg?itok=9qzGclmo",
      url: "/categories/Dance/14/Salsa%20Club%20at%20the%20University%20of%20California%20San%20Diego"
    },
    {
      name: 'Fashion',
      img: "http://media1.popsugar-assets.com/files/2014/10/28/820/n/1922564/eee82e3d7f602c0a_thumb_temp_cover_file157415051413560509.xxxlarge/i/November-2014-Fashion-Magazine-Covers-Pictures.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hprofile-xlf1/v/t1.0-1/p320x320/12743591_944853835569221_2950470495359466512_n.jpg?oh=360802b405e27fafadc4a822cd062e2f&oe=575B4F7A",
      url: "/categories/Media/0/Fashion%20Quarterly%20Magazine"
    },
    {
      name: 'Figure Skating',
      img: "http://www.self.com/wp-content/uploads/2014/02/Gracie-Gold-Olympic-Ice-Skater-Thumb.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hprofile-xaf1/v/t1.0-1/c53.0.320.320/p320x320/1450922_1612570255638938_8042081251422997107_n.jpg?oh=e18a2770d82c58190167719072ee6764&oe=57966B12",
      url: "/categories/Social/20/Figure%20Skating%20@%20UCSD"
    },
    {
      name: 'Comic Books',
      img: "http://www.getcashforcomics.com/media/images/common/comics.png",
      img2: "http://static.tumblr.com/utashei/32Qmhu8ig/577309_3663932231300_272403598_n.jpg",
      url: "/categories/Social/13/Comicbook%20Club%20at%20UCSD"
    },
    {
      name: 'Gaming',
      img: "http://hfwireless.com/wp-content/uploads/2012/01/game-console-repair-anchorage-300x297.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/p320x320/12195852_1685632854993056_3417779830433417805_n.png?oh=3bb98a2d5cea5a12b09e95bb133aa47d&oe=57912D58",
      url: "/categories/Social/60/Triton%20Gaming"
    }, 
    {
      name: 'Art',
      img: "http://www.thearsenalsj.com/wp-content/uploads/bb-plugin/cache/pensweb-1003x1024-circle.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xft1/t31.0-8/11845238_1711184679109602_4786968587438871709_o.jpg",
      url: "/categories/Educational/34/Triton%20Art"
    },
    {
      name: 'Musicals',
      img: "http://gracelutheran.com/wp-content/uploads/2012/12/MusicNotes1.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/11143535_817165695018393_4160957329934145811_n.png?oh=2b49e06503b7bb1940bcb41df9faaffa&oe=575DAA8F",
      url: "/categories/Social/38/Muir%20Musical"
    },
    {
      name: 'Volunteering',
      img: "http://www.projects-abroad.org/_photos/projects/medicine-and-healthcare/medicine/kenya/female-intern-practicing-medicine.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/321539_276868168992205_281859461_n.jpg?oh=c642249c07b46727a0a210e41e8f1d8f&oe=57575645",
      url:"/categories/Educational/27/Student%20Health%20Advocates"
    },
    {
      name: 'Running',
      img: "http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/1103-woman-running.jpg",
      img2: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/253705_215162168516494_6279707_n.jpg?oh=3f88cbaf60272906bee86e02fd1d2164&oe=5797281A",
      url: "/categories/Social/54/Strides%20Running%20Club"
    }
  ],   
  add: function(){
    for(var n = 0; n < this.people.length; n++) {
      club = this.people[n];    
      this.wrap.append("<div class='person'><img alt='" + club.name + "' src='" + club.img + "' /><span><strong>" + club.name + "</strong></span></div>");
    }
    count = this.people.length;
    console.log("start" + count);
    /*
    var random =     this.people[Math.floor(Math.random() * this.people.length)];
    this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong></span></div>");
    */
  }
}

var ind = 0;
var added = [];
for(var n = 0; n < count; n++) {
  added[n] = false;
}
var hasAdded = 0;

var App = {
  yesButton: $('.button.yes .trigger'),
  noButton: $('.button.no .trigger'),
  blocked: false,
  like: function(liked){
    var animate = liked ? 'animateYes' : 'animateNo';
    ga("send", "event", 'matchme', 'clicked');
    added[ind] = liked ? true : false;
    if(added[ind] == true) {
      hasAdded++;
      console.log("hA"+hasAdded);
      //console.log(clubs.people[ind]["img"]);
      var toAdd = "<a href='" + clubs.people[ind]["url"] + "'><img style='width:160px; padding:1rem; column-count:2; class='img-responsive' src='" + clubs.people[ind]["img2"] + "''></a>";
      //var toAdd = "<a href='" + data.match[ind]["url"] + "'>" + "<img style='width:150px; padding:1rem; text-align:center; display:block' class='img-responsive' src='" + data.match[ind]["image2"] + "''></a>";
      $(".bookmarked").append("<div>" + toAdd +"</div>");
    }
    
    console.log("ind:" + ind)

    var self = this;
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
        /*Person.add();*/
        self.blocked = false;
        count--; /* decrement count */
        ind++;
        //console.log(clubs.people[count]["img"]);
      });
    }
    console.log(count);
    if(count == 1) 
    {
      /* display if at least one like */
      if(hasAdded > 0){
        $("#bookmarked h2").html("It's a Match!");
      }
      /* show matches(if any), hide the match-me system */
      $("#bookmarked").css("display", "");
      $("#people").css("display", "none");
      $("#control").css("display", "none");
    }
  }
  
};
function showBookmarked() {
  $("#bookmarked").css("display", "");
  $("#yesno").css("display", "none");
}


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
  clubs.add();
});


/*
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