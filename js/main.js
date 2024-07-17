$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(".main > li").find(".sub").stop().slideUp();
    })//main li hover


    //slide-------------------------
    //$(".fade li").hide();
    //$(".fade li").eq(0).show();


    $(".fade li").eq(0).siblings().hide();

    var n = 0; // 0 1 2 
    setInterval(function(){
        n = (n + 1) % 3;
        console.log(n);

        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
        
    }, 2000)//

    $(".cont1 h2").click(function(){
        $(".cont1 h2").addClass("b_on");
        $(this).removeClass("b_on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})
    })//cont1 h2 click

    $(".pop_up").click(function(){
        $(".pop").slideDown();
    })//pop up click

    $(".close").click(function(){
        $(".pop").slideUp();
    })//pop up click
})//jQuery