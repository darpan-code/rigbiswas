$(document).ready(function(){
    $("#nav-btn").click(function(){
        $("#nav-btn-icon").toggleClass("fa-xmark fa-bars");
        $("#nav-menu2").toggleClass("nav-menu nav-menu2");
    });

    $('.count').counterUp({
        delay: 1,
        time: 500
    });
});
