$(document).ready(function(){
        
      //이용안내
    $(".sub_master ul.cate li").click(function(){
        var idx = $(this).index();
        
        $(".sub_master ul.cate li").removeClass("on");
        $(this).addClass("on");
        $(".sub_master ul.con>li").removeClass("on");
        $(".sub_master ul.con>li").eq(idx).addClass("on");
    });
    //이용안내 끝
    
    //갤러리
    lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        disableScrolling: false,
        fitImagesInViewport:true
    })
    //갤러리 끝

    //메인페이지
    $('.main_banner').bxSlider({ 
        auto: true, 
        speed: 500, 
        pause: 4000, 
        mode:'fade', 
        autoControls: true, 
        pager:true
    });
    //메인페이지 끝
    
    //서브페이지
    $(".nav ul.m_gnb li").click(function(){
        $(".nav ul.m_gnb li").removeClass("on");
        $(this).addClass("on");
    });
    //서브페이지 끝
    
    //탑버튼
    var topEle = $('.quick button');
    var delay = 1000;
    topEle.on('click', function() {
      $('html, body').stop().animate({scrollTop: 0}, delay);
    });
        //탑버튼 끝
    

    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});//ready