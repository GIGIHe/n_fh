$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })
    // 点击现场预约按钮跳转
    $(".zgm1 .bt1,.zgm1 .bt3,.tab2 a").click(function(){
      // console.log("tiao")
         // $(this).addClass('active')
        $("html , body").animate({scrollTop:$(".zgm3").offset().top},400);
    });
    // 点击现场预约按钮跳转
  $(".zgm1 .bt2").click(function(){
      // console.log("tiao")
         // $(this).addClass('active')
        $("html , body").animate({scrollTop:$(".zgm5").offset().top},400);
    });
    // $(window).scroll(function(){
    //     // 注入ht
    //     var top = $(".zgm1").offset().top;//获取指定位置
    //     var scrollTop = $(window).scrollTop();
    //     if(scrollTop>top){
    //         $(".navbar").addClass('active');
    //     }else{
    //         $(".navbar").removeClass('active');
    //     }
    // })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    // 课程优势切换
     $('.zgm5-ul li').each(function(index){
        $(this).click(function(){
            $(this).addClass('current').siblings('li').removeClass('current');
             $(".zgm5 p").hide().eq(index).fadeIn();
        })
    })
     // 科学备考
     $('.zgm6_ul li').each(function(index){
        $(this).click(function(){
            // console.log($(".zgm6  .desc::after"))
             if(index==0){
           $(".zgm6 .desc i").css("left",".81rem")
            }
            if(index==1){
           $(".zgm6 .desc i").css("left","2.98rem")
            }
              if(index==2){
           $(".zgm6 .desc i").css("left","5.18rem")
            }
             $(".desc ul").hide().eq(index).fadeIn();
        })
    })
     $(".zgm5 li").each(function(inx){
        $(this).click(function(){
            $(this).addClass("on").siblings('li').removeClass("on")
            $(".tab_w").eq(inx).show().siblings(".tab_w").hide()
        })
     })
})