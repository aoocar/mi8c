
$(document).ready(function(){
    itemchange();
    $("#32").find(".a_top a").attr("href","javascript:void(0);");
    $("#35").find(".a_top a").attr("href","javascript:void(0);");
    //$(".main_adv_img ul li").find("img")
    $(".anli").find(".bich:first").css('border','none');
/*var txt1="<div class='blank85'></div>";  
$("body").prepend(txt1);*/
    $("#pubCallButton a").mouseover(function(){
    	$(".float-box").addClass("call");
    });

    $(".contact-box .close-btn").bind('click',function(){
    	$(".float-box").removeClass("call");
    });
    $(".gotot a").bind('click',function(){
    	$("html,body").animate({scrollTop:0},"300");
    	$(".gotot").css("display", "none");
    });
    $(".btn-1 a").hover(function () {
        $(".pop-consult-box") .removeClass("hideanimation").addClass("showanimation");
    });
    // setTimeout(function(){$(".pop-consult-box").addClass("showanimation");},"15000");
     $(".pop-consult-box .close-btn").bind('click',function(){
        $(".pop-consult-box").addClass("hideanimation");
         setTimeout("showcall()","100");
    });
    setTimeout("aqln_hover()","800");
  aqln_leave();
     setTimeout("bannerhover()","800");
  bannerleave();



});


function bannerhover(){
    $("#slideBox2").mouseover(function(){
      $("#slideBox2").oneTime(50,function(){  
          $(".prev").animate({'left':'0px'},"300");
          $(".next").animate({'right':'0px'},"300");
          //.animate({'height':'203px'},"300");.fadeIn(300);
      });
      
  });
}
function bannerleave(){
    $("#slideBox2").mouseleave(function(){
      $("#slideBox2").stopTime(); 
      $(".prev").stopTime();
      $(".next").stopTime();
        $(".prev").animate({'left':'-52px'},"300");
        $(".next").animate({'right':'-52px'},"300");
      //.animate({'width':'0px','height':'0px'},"300");
  });
}



function itemchange(){
$("#add_items li").bind("click",function(){
    $("#add_items li").removeClass("active");
   $(this).addClass("active");
   var idx = $(this).attr("rel");
   $(".tab-change").css("display", "none");
   $(".tab-change[rel='"+idx+"']").css("display", "block");
});

}

/*??????????????????????????*/

function aqln_hover(){
    $(".btn-3 a").mouseover(function(){
      $(".btn-3 a").oneTime(50,function(){  
          $(".btn-3 img").stop().animate({'width':'100px','height':'100px'},"300");
      });
      
  });
}
function aqln_leave(){
    $(".btn-3 a").mouseleave(function(){
      $(".btn-3 a").stopTime(); 
      $(".btn-3 img").stopTime();
      $(".btn-3 img").stop().animate({'width':'0px','height':'0px'},"300");
  });
}
function showcall(){
	$(".float-box").addClass("call");
	$(".float-box.call .float-box-c").fadeIn(500);
	
	/*setTimeout(function(){
    	$(".float-box").removeClass("call");
	},"5000");*/
}


function gotoTop(min_height){

//????????????????????????????????????????????????????????????????????????????????????600?????????
    min_height ? min_height = min_height : min_height = 50;
    //??????????????????scroll????????????????????????????????????
    $(window).scroll(function(){
        //????????????????????????????????????????????????????????????
        var s = $(window).scrollTop();
        //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        if( s > min_height){
            $(".gotot").fadeIn(100).css("display", "block");
            $("#hdw").css("border-bottom", "1px solid #ccc");

        }else{
            $(".gotot").fadeOut(200);

            $("#hdw").css("border-bottom", "none");
        };
    });

};
gotoTop();
/*????????????????????????????????????????????????????????????????????????*/
function change(){
	var s =document.body.clientWidth;
 	if (s<=980) {
	    TouchSlide({ 
	        slideCell:"#slideBox",
	        titCell:".hd ul", //?????????????????????????????? autoPage:true ???????????????????????? titCell ????????????????????????????????????
	        mainCell:".bd ul", 
	        effect:"leftLoop", 
	        delayTime:300,
	        autoPage:true,//??????????????????
	        autoPlay:false //??????????????????
	    });
 	};
}
/*??????????????????IE???????????????*/
function iesidebar(){
   if ($.browser.msie && ($.browser.version == "7.0")) {
            $(".topcontent").css("display", "none");
            //$(".topscroll").css("display", "none");
            $(".circlel").each(function(){
              $(this).removeClass();
            });
            $(".circler").each(function(){
              $(this).removeClass();
            });
        }
     else   if ($.browser.msie && ($.browser.version == "6.0")) {
            $(".topcontent").css("display", "none");
            $(".topscroll").css("display", "none");
            $("body").html("<b>???????????????????????????????????!???????????????????????????????????????????????????????????????</b>");
            $("b").css({"text-align":"center","padding-top":"60px","display":"block"});
        }
else   if ($.browser.msie && ($.browser.version == "8.0")) {
            $(".topcontent").css("display", "none");
             $(".circlel").each(function(){
              $(this).removeClass();
            });
            $(".circler").each(function(){
              $(this).removeClass();
            });
        }
}

/*?????????????????????????????????*/
 function getScroll(){  
     var bodyTop = 0;    
     if (typeof window.pageYOffset != 'undefined') {    
         bodyTop = window.pageYOffset;    
     } else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {    
         bodyTop = document.documentElement.scrollTop;    
     }    
     else if (typeof document.body != 'undefined') {    
         bodyTop = document.body.scrollTop;    
     }    
     return bodyTop  
}  


