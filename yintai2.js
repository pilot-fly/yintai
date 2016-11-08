$(document).ready(function(){
//楼层跳转	
	var floor_nav=$(".floor-nav:nth-of-type(1)");
    var floor_lis=$(".floor-lis");
    var floor=$(".fashion");
    var now;
    var floor_a=$(".floor-lis-a");
    var flag=true;
    var flag1=true;
    var cHeight=625;
    // console.log(cHeight)
    for(var i=0;i<floor.length;i++){
        floor.eq(i).attr({h:floor.eq(i).offset().top});
        // console.log(floor.eq(i).attr("h"));
    }
    $(window).scroll(function(){
    	var obj=$(document.body).scroll(top)?$(document.body):$(document.documentElement);
        var top=obj.scrollTop();
        
        if(top>=floor.eq(0).attr("h")-200){
            floor_nav.css("display","block");
            var nHeight=floor_nav.height();
            floor_nav.css({top:(cHeight-nHeight)/2});
            for(var j=0;j<floor_lis.length;j++){
                    floor_a.eq(j).css("display","none");
                }
            }
        if(top<floor.eq(0).attr("h")-200){
            floor_nav.css("display","none");
        }

        for(var i=0;i<floor.length;i++){
            if(top>=floor.eq(i).attr("h")){
                for(var j=0;j<floor_lis.length;j++){
                    floor_a.eq(j).css("display","none");
                }
                floor_a.eq(i).css("display","block");
                now=i;
            }
        }
     });

    for(var i=0;i<floor_lis.length;i++){
        floor_lis.eq(i).attr({index:i});
        floor_lis.eq(i).click(function(index){
             // console.log(floor.eq($(this).attr("index")).attr("h"));
            $("body").animate({scrollTop:floor.eq($(this).attr("index")).attr("h")});
            now=$(this).attr("index");
        });
        floor_lis.eq(i).mouseover(function(){
            floor_a.eq($(this).attr("index")).css("display","block");
        });
        floor_lis.eq(i).mouseout(function(){
            floor_a.eq($(this).attr("index")).css("display","none");
        });
    }

    var backTop=$(".lis10");
    backTop.click(function(){
        $("body").animate({scrollTop:0});
    })

      
    

//轮播
    var left=$(".ban-left");
    var right=$(".ban-right"); 
    var imgs=$(".ban-pic");
    var lis=$(".circle-img");
    var banner=$(".banner-bom");
    var hunt=$(".bom-hunt");
    var n=0;
    var next=0;
    var t=setInterval(move,1000); 
    function move(){
        n++;
        if(n>=5){
            n=0;
        }
        for(var i=0;i<imgs.length;i++){
            imgs.eq(i).css("display","none");
            lis.eq(i).css("background","#211616");
            // lis[i].style.background="#211616";
        }
        imgs.eq(n).css("display","block");
        lis.eq(n).css("background","#E5004F");
        // lis[n].style.background="#E5004F";
    }
    banner.mouseover(function(){
    	left.css("display","block");
    	right.css("display","block");
    	clearInterval(t);
    });
    banner.mouseout(function(){
    	left.css("display","none");
    	right.css("display","none");
    	t=setInterval(move,1000);
    });
    left.click(function(){
    	next=n-1;
        if(next<0){
            next=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
            imgs.eq(i).css("display","none");
            lis.eq(i).css("background","#211616");
        }
        imgs.eq(n).css("display","block");
        lis.eq(n).css("background","#E5004F");
        n=next;
    });
    right.click(function(){
    	move();
    });
    for(var i=0;i<lis.length;i++){
    	lis.eq(i).attr({index:i});
         // console.log(lis.eq(i).attr("index"))
         lis.eq(i).click(function(){
            for(var i=0;i<lis.length;i++){
                lis.eq(i).css("background","#211616");
                imgs.eq(i).css("display","none");
            }
            $(this).css("background","#E5004F");
            imgs.eq($(this).attr("index")).css("display","block");
            n=$(this).attr("index");
         });
    }

//楼层轮播 
    var fashion=$(".fash");
    for(var i=0;i<fashion.length;i++){
        lunBo(fashion.eq(i));
    }
    function lunBo(fashion){
       var pics=fashion.find(".fashion-picture");
        var cirs=fashion.find(".circle-1");
        var fashion_left=fashion.find(".fashion-left");
        var fashion_right=fashion.find(".fashion-right");
        var n1=0;
        var next1=0;
        var fashion_width=fashion.width();
        var t1=setInterval(move1,2000);
            function move1(){
            next1=n1+1;
            if(next1>=pics.length){
                next1=0;
            }
            pics.eq(next1).css({left:fashion_width});
            pics.eq(n1).animate({left:-fashion_width},1);
            pics.eq(next1).animate({left:0},1);
            for(var i=0;i<cirs.length;i++){
                cirs.eq(i).css({background:"#6E6E6E"});
            }
            cirs.eq(next1).css({background:"#E5155B"});
            n1=next1;
        }
        
        fashion.mouseover(function(){
            fashion_left.css("display","block");
            fashion_right.css("display","block");
            clearInterval(t1);
        });
        fashion.mouseout(function(){
            fashion_left.css("display","none");
            fashion_right.css("display","none");
            t1=setInterval(move1,2000);
        });
        fashion_left.click(function(){
            next1=n1-1;
            if(next1<0){
                next1=pics.length-1;
            }
            pics.eq(next1).css({left:-fashion_width});
            pics.eq(n1).animate({left:fashion_width},1);
            pics.eq(next1).animate({left:0},1);
            for(var i=0;i<cirs.length;i++){
                cirs.eq(i).css({background:"#6E6E6E"});
            }
            cirs.eq(next1).css({background:"#E72486"});
            n1=next1;
        })
        fashion_right.click(function(){
            move1();
        });
         for(var i=0;i<cirs.length;i++){
            cirs.eq(i).attr({index:i});
            cirs.eq(i).click(function(){
                if(n1<$(this).attr("index")){
                   pics.eq($(this).attr("index")).css({left:fashion_width});
                   pics.eq(n1).animate({left:-fashion_width},1);
                   pics.eq($(this).attr("index")).animate({left:0},1);
                   for(var i=0;i<cirs.length;i++){
                   	 cirs.eq(i).css({background:"#D3D2D0"});
                   }
                   $(this).css({background:"#E72486"});
                   n1=$(this).attr("index");    
                }else if(n1>$(this).attr("index")){
                    pics.eq($(this).attr("index")).css({left:-fashion_width});
                    pics.eq(n1).animate({left:fashion_width},1);
                    pics.eq($(this).attr("index")).animate({left:0},1);
                    for(var i=0;i<cirs.length;i++){
                   	 cirs.eq(i).css({background:"#D3D2D0"});
                   }
                   $(this).css({background:"#E72486"});
                   n1=$(this).attr("index");
                }
            });
        }
    }

    var secrch_box=$(".search-pic");
    for(var i=0;i<secrch_box.length;i++){
        lunBoSmall(secrch_box.eq(i));
    }
    function lunBoSmall(secrchbox){
        var secrch_boxLeft=secrchbox.find(".search-pic-left");
        var secrch_boxRight=secrchbox.find(".search-pic-right");
        var secrch_boxUl=secrchbox.find(".search-pic-box");
        var flag=true;
        var n2=0;
        var next2=0;
        var secrch_boxWidth=159;
        // console.log(secrch_boxLeft);
        secrch_boxLeft.click(function(){
            if(flag){
                flag=false;
                next2=n2-1;
                if(next2<0){
                    next2=secrch_boxUl.length-1;
                }
                secrch_boxUl.eq(next2).css({left:-secrch_boxWidth});
                secrch_boxUl.eq(n2).animate({left:secrch_boxWidth},500);
                secrch_boxUl.eq(next2).animate({left:0},500,function(){flag=true;});
                n2=next2;
            }
            
        });
        secrch_boxRight.click(function(){
            if(flag){
                flag=false;
                next2=n2+1;
                if(next2>=secrch_boxUl.length){
                    next2=0;
                }
                secrch_boxUl.eq(next2).css({left:secrch_boxWidth});
                secrch_boxUl.eq(n2).animate({left:-secrch_boxWidth},500);
                secrch_boxUl.eq(next2).animate({left:0},500,function(){flag=true;});
                n2=next2;
            }
            
        });
     }            

//框
  //推荐的框  
    var border=$(".recoL-bomm");
    for(var i=0;i<12;i++){
        kuang(border.eq(i));
    }
    // console.log(border[5].offsetWidth)
    function kuang(border){
        var bor_left=border.find(".bor-left");
        // console.log(border);
        var bor_right=border.find(".bor-right");
        var bor_top=border.find(".bor-top");
        var bor_bottom=border.find(".bor-bottom");
        var w=border.width()-2;
        var h=border.height()-2;
        border.mouseover(function(){
            bor_left.animate({height:h});
            bor_right.animate({height:h});
            bor_top.animate({width:w});
            bor_bottom.animate({width:w});
            // console.log(h);
            // console.log(w);
        });
        border.mouseout(function(){
            bor_left.animate({height:0});
            bor_right.animate({height:0});
            bor_top.animate({width:0});
            bor_bottom.animate({width:0});
        });
    }
  
  //热门的框
      var hot_bom_tu=$(".hot-bom-tu");
      for(var i=0;i<hot_bom_tu.length;i++){
         kuang1(hot_bom_tu.eq(i));
      }
      function kuang1(border){
        var bor_left=border.find(".hot-bor-left");
        // console.log(border);
        var bor_right=border.find(".hot-bor-right");
        var bor_top=border.find(".hot-bor-top");
        var bor_bottom=border.find(".hot-bor-bottom");
        var w=border.width()-2;
        var h=border.height()-2;
        border.mouseover(function(){
            bor_left.animate({height:h});
            bor_right.animate({height:h});
            bor_top.animate({width:w});
            bor_bottom.animate({width:w});
            // console.log(h);
            // console.log(w);
        });
        border.mouseout(function(){
            bor_left.animate({height:0});
            bor_right.animate({height:0});
            bor_top.animate({width:0});
            bor_bottom.animate({width:0});
        });
    }
  //楼层的框
      var fashion_pic1=$(".fashion-pic1");
      for(var i=0;i<fashion_pic1.length;i++){
         kuang2(fashion_pic1.eq(i));
      }
      function kuang2(border){
        var bor_left=border.find(".fas-bor-left");
        // console.log(border);
        var bor_right=border.find(".fas-bor-right");
        var bor_top=border.find(".fas-bor-top");
        var bor_bottom=border.find(".fas-bor-bottom");
        var w=270;
        var h=183;
        border.mouseover(function(){
            bor_left.animate({height:h});
            bor_right.animate({height:h});
            bor_top.animate({width:w});
            bor_bottom.animate({width:w});
            // console.log(h);
            // console.log(w);
        });
        border.mouseout(function(){
            bor_left.animate({height:0});
            bor_right.animate({height:0});
            bor_top.animate({width:0});
            bor_bottom.animate({width:0});
        });
    }

// 选项
    var hunt=$(".hunt");
    
    for(var i=0;i<hunt.length;i++){
        yin(hunt.eq(i));
    }
    function yin(hunt){
        var hunt_box=$(".hunt-box").eq(i);
        hunt.hover(function(){
            hunt_box.css("display","block");
        },function(){
            hunt_box.hover(function(){
               $(this).css("display","block"); 
            },function(){
                $(this).css("display","none");
            });
            hunt_box.css("display","none");
        });
    }

    var ret=$(".ret");
    var ret_boder=$(".ret-boder");
    var recoL_bom=$(".recoL-bom");
    var ret_jiao=$(".ret-boder-jiao");
    for(var i=0;i<ret.length;i++){
         ret.eq(i).attr({index:i});
         ret.eq(i).mouseover(function(){
            for(var i=0;i<ret.length;i++){
                ret.eq(i).css({fontWeight:400});
                ret_boder.eq(i).css({background:"#333333"});
                ret_boder.eq(i).css({borderColor:"#333333"});
                recoL_bom.eq(i).css("display","none");
                ret_jiao.eq(i).css("display","none");
            }
            ret.eq($(this).attr("index")).css({fontWeight:600});
            ret_boder.eq($(this).attr("index")).css({background:"#E5004F"});
            ret_boder.eq($(this).attr("index")).css({borderColor:"#E5004F"});
            recoL_bom.eq($(this).attr("index")).css("display","block");
            ret_jiao.eq($(this).attr("index")).css("display","block");
            n=$(this).attr("index");
         });
    }
    
    var hot_bom1_char=$(".hot-bom1-char");
    var hot_bom1_bor=$(".hot-bom1-bor");
    var hot_bom_box=$(".hot-bom-box");
    var hot_jiao=$(".san");
    for(var i=0;i<hot_bom1_char.length;i++){
        hot_bom1_char.eq(i).attr({index:i});
        hot_bom1_char.eq(i).mouseover(function(){
            for(var i=0;i<hot_bom1_char.length;i++){
                hot_bom1_char.eq(i).css({fontWeight:400});
                hot_bom1_bor.eq(i).css({background:"#333333"});
                hot_bom1_bor.eq(i).css({borderColor:"#333333"});
                hot_bom_box.eq(i).css("display","none");
                hot_jiao.eq(i).css("display","none");
            }
            hot_bom1_char.eq($(this).attr("index")).css({fontWeight:600});
            hot_bom1_bor.eq($(this).attr("index")).css({background:"#E70050"});
            hot_bom1_bor.eq($(this).attr("index")).css({borderColor:"#E70050"});
            hot_bom_box.eq($(this).attr("index")).css("display","block");
            hot_jiao.eq($(this).attr("index")).css("display","block");
            n=$(this).attr("index");
        });
    }              

//下拉框
     var box=$(".home-box");
     var home_hidden=$(".home-hidden");
     var home_lis=$(".hidden-li");
     var zhuan=box.find(".zhuan");
     var home_lisHeight=home_lis.height();
     // console.log(zhuan)
     box.hover(function(){
        var h=6*home_lisHeight;
        // home_hidden.style.height=h+"px";
        home_hidden.animate({height:h},300);
        $(this).css("background","#F5F5F5");
        zhuan.css("transform","rotate(180deg)");
     },function(){
       home_hidden.hover(function(){
        var h=6*home_lisHeight;
        // this.style.height=h+"px";
        $(this).animate({height:h},300);
        zhuan.css("transform","rotate(180deg)");
       },function(){
        // this.style.height="0";
        $(this).animate({height:0},300);
        box.css("background","#EEEEEE");
        zhuan.css("transform","rotate(0deg)");
       });
       // home_hidden.style.height="0";
       home_hidden.animate({height:0},300);
       box.css("background","#EEEEEE");
       zhuan.css("transform","rotate(0deg)");
     });

     var home_box1=$(".home-box1");
     var hidden1=$(".hidden1");
     home_box1.hover(function(){
        hidden1.css("display","block");
     },function(){
        hidden1.hover(function(){
            $(this).css("display","block");
        },function(){
            $(this).css("display","none");
        });
     });

     var home_box2=$(".home-box2");
     var hidden2=$(".hidden2");
     home_box2.hover(function(){
        hidden2.css("display","block");
     },function(){
        hidden2.hover(function(){
            $(this).css("display","block");
        },function(){
            $(this).css("display","none");
        });
     });

    var home_box3=$(".home-box3");
    var kuang=$(".kuang");
    var home_char=$(".home-char-a").eq(0);
    home_box3.hover(function(){
       kuang.css("backgroundPosition","-225px -27px");
       home_char.css("color","#e5004f");

   },function(){
       kuang.css("backgroundPosition","-225px 0");
       home_char.css("color","#666");
    });

    var seek_a=$(".seek-a");
    var buy=$(".buy");
    seek_a.hover(function(){
      buy.css("display","block");
    },function(){
        buy.hover(function(){
            $(this).css("display","block");
        },function(){
            $(this).css("display","none");
        });
        buy.css("display","none");
    }); 
})