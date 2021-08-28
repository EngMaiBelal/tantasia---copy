


$(document).ready(function(){
   $('.arrow').click(function(){
       $('html ,body').animate({
        //    scrollTop:680
        scrollTop:$('.info__icons').offset().top
       },1000);
   });
});



//slider
$(document).ready(function(){
 $('.test i').click(function(){
    if($(this).hasClass('fa-angle-right')){
                        $('.test .active').fadeOut(150,function(){
                            $(this).removeClass('active').next('.slide').addClass('active').fadeIn();
                      
    
    
                        });
                    }
                    else
                    {
                        $('.test .active').fadeOut(150,function(){
                            $(this).removeClass('active').prev('.slide').addClass('active').fadeIn();
                        });
                        
                    }
 });






//  $('.test i').click(function(){
 
//                 if($('.slide').hasClass('last')){
//                     $('.test i').fadeOut();
//                 }
// });


});