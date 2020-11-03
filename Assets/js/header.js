
 $("nav").hide(500);
$(".submit-btn").click(function (e) { 
    e.preventDefault();
    $("nav").fadeToggle(400);   
});