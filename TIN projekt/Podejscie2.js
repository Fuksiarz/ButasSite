var pictxtnumber = 1;
loadpictxt(pictxtnumber);

animatediv();



function animatediv()
{
    var number = 0;
    var interval = setInterval(function() 
    { 
        pictxtnumber = pictxtnumber + 1;
        if(pictxtnumber > 11)
        {
            pictxtnumber = 1;
        }
        loadpictxt(pictxtnumber);
        
    }, 5000);
}

function loadpictxt(num)
{
  $('.picturediv').html('');
  $("#idk"+num).clone().appendTo('.picturediv');
//    if(num==1)
//        {   $("#idk"+num).addClass("seeMe")
//            $("#idk11").removeClass("seeMe")
//        }else{
//            
//            $("#idk"+num).addClass("seeMe");
//            $("#idk"+num-1).removeClass("seeMe");
//            
//        }
  $('.picturediv img').css('margin-left', '200px');
  $('.picturediv img').animate({marginLeft: "0"}, 100);
  $('.picturediv1').html('');
  $("#ikk"+num).clone().appendTo('.picturediv1');
  $('.picturediv1 img').css('margin-left', '200px');
  $('.picturediv1 img').animate({marginLeft: "0"}, 100); 
  $('.picturediv2').html('');
  $("#iqk"+num).clone().appendTo('.picturediv2');
  $('.picturediv2 img').css('margin-left', '200px');
  $('.picturediv2 img').animate({marginLeft: "0"}, 100); 
  $('.picturediv3').html('');
  $("#qqk"+num).clone().appendTo('.picturediv3');
  $('.picturediv3 img').css('margin-left', '200px');
  $('.picturediv3 img').animate({marginLeft: "0"}, 100);
}


function loadpictxt1(num)
{
  $('#leftDiv'+num).html('');
  $("#idk"+num).clone().appendTo('#leftDiv'+num+1);
//    if(num==1)
//        {   $("#idk"+num).addClass("seeMe")
//            $("#idk11").removeClass("seeMe")
//        }else{
//            
//            $("#idk"+num).addClass("seeMe");
//            $("#idk"+num-1).removeClass("seeMe");
//            
//        }
  $('#leftDiv'+num+' img').css('margin-left', '200px');
  $('#leftDiv'+num+' img').animate({marginLeft: "0"}, 200);
  $('.picturediv1').html('');
  $("#ikk"+num).clone().appendTo('.picturediv1');
  $('.picturediv1 img').css('margin-left', '200px');
  $('.picturediv1 img').animate({marginLeft: "0"}, 200); 
  $('.picturediv2').html('');
  $("#iqk"+num).clone().appendTo('.picturediv2');
  $('.picturediv2 img').css('margin-left', '200px');
  $('.picturediv2 img').animate({marginLeft: "0"}, 200); 
  $('.picturediv3').html('');
  $("#qqk"+num).clone().appendTo('.picturediv3');
  $('.picturediv3 img').css('margin-left', '200px');
  $('.picturediv3 img').animate({marginLeft: "0"}, 200);
}


$(document).ready(function(){
    var navY = $('#menuList').offset().top;
    
    var stickyNav= function(){
        var scrollY=$(window).scrollTop();
        
        if(scrollY>navY){
            $('#menuList').addClass('sticky');
        }else{
            $('#menuList').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function(){
        stickyNav();
    });
});



//$(document).ready(function(){
//  
//  var slideOutTime=5000; // Time it takes to slide onto the screen
//  var slideInTime=5000;  // Time it takes to slide off screen
//  var slideInAfterTime=115000;  // Hold position on screen for 30 seconds then slide off screen
//  var repeatSlidingTime=110000;  // Repeat animation after this amount of time
//  
//  
//  function slideImage(img){
//    
//    img.animate({left:'0px'},slideOutTime,function(){
//      var nxt=img.next();
//      if(nxt.length>0){
//        slideImage(nxt);
//      }else{
//        
//        startSliding();
//      }
//      
//    });
//  
//    }
//  
//  function slideBack(img){
//     img.animate({left:'-400px'},0);
//  }
//  
//  function startSliding(){
//    slideImage($('.slide:first'));
//    }
//  
//  startSliding();
//
//});
//




//
//var number=Math.floor(Math.random()*11)+1;
//timer1=5000;

//function changePhotoRight(){
//    
//    number++;
//    nextNumber=number+1;
//    if(number==11)
//        {
//            nextNumber=1;
//        }
//    if(number>11)
//     number=1;
//    $$("#leftDiv"+number).hide();
//    $("#leftDiv"+number).slideDown(500,"#leftDiv"+number);
//    setTimeout("changePhotoRight()", 5000);
//    setTimeout(disppear(number),4500);
//}
//changePhotoRight()
//changePhotoRight();

function disppear(x){
    $("#"+x).fadeOut(500);
}
var timer1=0;
var timer2=0;
var number =0;
function changePhotoRight1(){
    
    number++;
    if(number>5)
     number=1;
    var plik="<img src=\"model/model"+number+".jpg\">";
    document.getElementById("leftTwo").innerHTML=plik;
    $('#leftTwo').fadeIn(1500);
     timer1 = setTimeout("changePhotoRight1()", 5000);
     timer2 = setTimeout("disappear(\"leftTwo\")",500);
}
var number1= 5;
function changePhotoRight2(){
    
    number1++;
    if(number1>11)
     number1=5;
    var plik="<img src=\"model/model"+number1+".jpg\">";
    document.getElementById("leftDiv1").innerHTML=plik;
    $('#leftDiv1').fadeIn(1500);
     timer1 = setTimeout("changePhotoRight2()", 5000);
     timer2 = setTimeout("disappear(\"leftDiv1\")",500);

}
var number2= 11;
function changePhotoRight3(){
    
    number1++;
    if(number2>16)
     number1=11;
    var plik="<img src=\"model/model"+number1+".jpg\">";
    document.getElementById("leftDiv2").innerHTML=plik;
    $('#leftDiv2').fadeIn(1500);
     timer1 = setTimeout("changePhotoRight3()", 5000);
     timer2 = setTimeout("disappear(\"leftDiv2\")",500);

}
var number2= 16;
function changePhotoRight4(){
    
    number1++;
    if(number2>23)
     number1=16;
    var plik="<img src=\"model/model"+number1+".jpg\">";
    document.getElementById("leftDiv3").innerHTML=plik;
    $('#leftDiv3').fadeIn(1500);
     timer1 = setTimeout("changePhotoRight4()", 5000);
     timer2 = setTimeout("disappear(\"leftDiv3\")",500);

}
changePhotoRight1();
changePhotoRight2();
changePhotoRight3();
changePhotoRight4();




//function s(){
//    
//    for(i=1;i<24; i++){
//        if(i==1)
//        $('#laska'+i).fadeIn(1500).delay(3500).fadeOut(1500);
//        
//        $('#laska'+1).delay(5000*i).fadeIn(1500).fadeOut(1500);
//        
//    }
//}
//s();
//setInterval(function(){
//s();
//}, 20000);
////setInterval(function(){
////    
////    number++;
////    if(number>11)
////     number=1;
////    var plik="<img src=\"dzieciprawo/dzieciprawo"+number+".jpg\"/>";
////    document.getElementById("right3").innerHTML=plik;
////    $("dzieci"+number).fadeIn(1500).fadeOut(1500);
////    
////}, 5000);
//function changePhotoRight3(){
//    
//    number++;
//    if(number>11)
//     number=1;
//    var plik="<img src=\"model/model"+number+".jpg\"/>";
//    document.getElementById("right4").innerHTML=plik;
//    
//    setTimeout("changePhotoRight3()", timer1);
//}
//
//changePhotoRight3();