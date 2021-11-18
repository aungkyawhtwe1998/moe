
$(".navbar-toggler").click(function () {
    let result = $(".navbar-toggler").hasClass("collapsed");
    // console.log(result);
    if (result) {
        $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
    } else {
        $(".menu-icon").removeClass("fa-bars").addClass("fa-times");

    }
});