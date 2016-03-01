$(document).ready(function() {
  initializePage();
});

function initializePage() {
  // add any functionality and listeners you want here
  
  $('#login').click(verifyLogin);
}

function verifyLogin(e)
{
  //

  console.log("button works");
}

$(document).ready(function() {
  
  /* clean this up */
  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");
      $clubapp = $(".clubapp");
      $sign = $(".sign");

  
  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };

  
  $(document).on("click", ".login__submit", function(e) {
    
    e.preventDefault();
    var uname = $("input[name=username]").val();
    var pw = $("input[name=password]").val();
    var that = this;
    var namepw = {
      "uname"  : uname,
      "password" : pw
    };

    // use post so name and password can be passed in
    // Problem: For a brief moment, will display the invalid credentials message
    $.post("/user/login", namepw, function()
    {
      console.log("Making sure");
      animateSignIn();
      return;
    });

    /* control structure to check signin, replaced by above code */
    /*  valid = $.get("/json/users.json", function(data){
      var users = data.users;
      // check all default users
      for(var n = 0; n < users.length; n++)
      {
        if((users[n].name == uname) && (users[n].password == pw)) {
          animateSignIn();
          return;
        }
      }
    });*/

    $("#status").html("Invalid credentials. Please try again.");
    $("#status").css("padding-top", "1.6rem");


    /* I have no idea what this does */
    //if (animating) return
    //animating = true;
    
    /* object oriented animate signin fxn */
    function animateSignIn() {
      ripple($(that), e);
      $(that).addClass("processing");
      setTimeout(function() {
        $(that).addClass("success");
        setTimeout(function() {
          $app.show();
          $app.css("top");
          $app.addClass("active");
        }, submitPhase2 - 70);
        setTimeout(function() {
          $login.hide();
          $login.addClass("inactive");
          animating = false;
          $(that).removeClass("success processing");
        }, submitPhase2);
      }, submitPhase1);
    };
  });

   $(document).on("click", ".create", function(e) {
    if (animating) return;
    animating = true;
    var uname = $("input[type=name]").val();
    var email = $("input[type=email").val();
    var pw = document.getElementById("pass").value;
    var college = $("input[type=college]").val();
    var major = $("input[type=major]").val();
    var grade = $("input[type=grade]").val();
    var json = {
      'name': uname,
      'email': email,
      'password': pw,
      'college': college,
      'major': major,
      'grade': grade
    };
    $.post('/user/new', json, function() {
      window.location.href = '/'; // reload the page
    });
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $sign.hide();
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

  $(document).on("click", ".createclub", function(e) {
    if (animating) return;
    animating = true;
    var uname = $("input[type=name]").val();
    var email = $("input[type=email").val();
    var pw = document.getElementById("passw").value;
    var json = {
      "clubname": uname,
      "email": email,
      "password": pw,
    };
    $.post('/club/new', json, function() {
      window.location.href = '/'; // reload the page
    });
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $clubapp.show();
        $clubapp.css("top");
        $clubapp.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $sign.hide();
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });
  
  
   $(document).on("click", ".signup", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $sign.show();
        $sign.css("top");
        $sign.addClass("active");
      }, submitPhase2 - 10);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

  $(document).on("click", ".app__logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      $clubapp.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });

  document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });


});


});