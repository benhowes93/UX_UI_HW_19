/*function fade() {
    $('.splash').fadeOut("slow");
    }*/

$(".splash").ready(function(){
    $(this).append("display", "block")
});

$(".splash").on("click", function(){
   $(this).fadeToggle("slow")
});



var test = 1
console.log(test)