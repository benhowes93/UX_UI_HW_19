/*function fade() {
    $('.splash').fadeOut("slow");
    }*/

$(".splash").on("click", function(){
   $(this).fadeToggle("slow")
});

$(".flexItem").on("click", function(){
    $(".skillsAccordion").slideToggle("slow")
})
 
