$(".navbar-toggler").click(function () {
  let result = $(".navbar-toggler").hasClass("collapsed");
  // console.log(result);
  if (result) {
    $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
  } else {
    $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
  }
});

//detect scroll height
$(document).ready(function () {
  $(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    //   console.log(currentPosition);
    if (currentPosition > 0) {
      $(".btn-up").removeClass("d-none");
    } else {
      $(".btn-up").addClass("d-none");
    }
  });
});

// Search field
$(function () {
    $(".search-icon").click(function () {
        $(this).toggleClass('fa-times');
        $(this).next().toggleClass('d-none').animate({
            width:'200px'
        }); 
        
      });
});

//   loader
$(window).on("load", function () {
  $(".loader-container").fadeOut(4000, function () {
    $(this).remove();
  });
});
