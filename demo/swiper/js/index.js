// timeline animtion 
var timelinelite = new TimelineLite();
timelinelite.from(".p2_icon1", 0.5, {y:50,opacity:0.8},"+=0.2");
timelinelite.from(".p2_icon2", 0.5, {y:50,opacity:0.8},"-=0.1");
timelinelite.from(".p2_icon3", 0.5, {y:50,opacity:0.8},"+=1.9");
timelinelite.from(".p2_icon4", 0.5, {y:50,opacity:0.8},"-=0.2");
timelinelite.from(".p2_icon5", 0.5, {y:50,opacity:0.8},"-=0.1");
timelinelite.from(".p2_icon6", 0.5, {y:50,opacity:0.8},"+=2");


// swiper control
var gp1_swiper;
gp1_swiper == null ? 
gp1_swiper = new Swiper('.swiper-container-big', {
    direction:'vertical',  
    allowSlidePrev:false, 
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
    resistance:true,
    resistanceRatio:0,  
    followFinger:false, // prevent the multiple drag at a time
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画 
            gp1_end = -$(".swiper-container-big .swiper-slide").height() *2;
            console.log(gp1_end);
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            
        }, 
        slideChange: function(){
            controlVideo(false,curVideo); 
            if(gp1_swiper.activeIndex == 2){
                gp1_swiper.allowSlideNext = false; // prevent slide to next 
                gp1_swiper.allowSlidePrev = true;
            }
            else if(gp1_swiper.activeIndex == 0){ 
                gp1_swiper.allowSlidePrev = false;
                gp1_swiper.allowSlideNext = true; 
            }
        }, 
        progress(swiper,progress){ 
            if(progress <= 0 ){
                swiper.allowSlidePrev = false;  
            }else{
                swiper.allowSlidePrev = true;
            } 
            if(swiper.activeIndex >0){swiper.allowSlidePrev = true;}

            if(progress >= 1 && swiper.activeIndex >1){
                swiper.allowSlideNext = false;  
            }else{
                swiper.allowSlideNext = true;
            } 
            // sync the position of the timeline animation
            timelinelite.progress(progress); 
            timelinelite.pause();  
        },touchEnd(swiper, event){
            // record the current position while using the video fullscreen
            gp1_translate = swiper.getTranslate(); 
        },resize(swiper){
            console.log("resize: small swiper1 zzz2");
            // swiper.update(true); 
            swiper.setTranslate(gp1_translate);

        }
    }
}):gp1_swiper.slideTo(0);  


// video control 
$(".btn_play").one("touchstart",playVideo); 
$(".video").on("play",pauseVideo); 

function playVideo(e) {  
    var id = e.currentTarget.dataset["videoid"];   
    controlVideo(true,id); 
} 
function pauseVideo(e){
    var id = e.currentTarget.dataset["videoid"];
    console.log("playingVideo:"+ id); 
    for(var i=1,j=3;i<=j;i++){  
        if(i != id){
            $("#video"+i)[0].pause();
            console.log("pause video:" + i);
        }else{
            curVideo = id;
        }
    }
} 
function controlVideo(play,id) { 
    if(play){   
        if(curVideo != -1){
            // pause other video
            $("#video"+curVideo)[0].pause();
            // icom.fadeIn($(".btn_play"+curVideo)); 
            // icom.fadeIn($(".video_poster_"+curVideo));
        } 
        curVideo = id; 
        icom.fadeOut($(".btn_play"+id)); 
        icom.fadeOut($(".video_poster_"+curVideo)); 
        console.log("play video:"+id);
        $("#video"+id)[0].play(); 
        
    }else{
        for(var i=1,j=3;i<=j;i++){ 
            console.log("pause video:" + id);
            if(id == -1){ 
                // icom.fadeIn($(".btn_play"+i));
                // icom.fadeIn($(".video_poster_"+i)); 
                $("#video"+i)[0].pause(); 
            }else if(i == id){
                $("#video"+i)[0].pause();
            }
        }
    }  
}