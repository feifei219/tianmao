$(function(){
 //banner
        var btn=getClass("btn")
        var img=getClass("bannerimg")
        var banner=getClass("banner")[0];
       	var bannerbox=getClass("bannerbox")[0];
        var bigbox=getClass("bannerbigbox")[0];
        var banbg=["#e8e8e8","#e8e8e8","#e8e8e8","#0e0e0e","#486cff","#f2c522"]
       		for (var i = 0; i < btn.length; i++) {
       			btn[i].index=i;
       			btn[i].onmouseover=function(){
       				bannernum=this.index;
       				for (var i = 0; i < img.length; i++) {
       					img[i].style.zIndex=1;
       					btn[i].style.background="#a2a2a2";
       				}
       				img[this.index].style.zIndex=2;
       				this.style.background="#fff";
              bigbox.style.backgroundColor=banbg[this.index];
              bannerbox.style.backgroundColor=banbg[this.index];
       			}
       		}
       		var bannernum=0;
       		var bannert=setInterval(bannerchange,3000)
       		function bannerchange(){
       			bannernum++;
	       		if(bannernum==img.length){
                     bannernum=0;
	       		}		
	            for (var i = 0; i <img.length; i++) {
	            	img[i].style.zIndex=1;
	            	btn[i].style.background="#a2a2a2";
	            }
	            	img[bannernum].style.zIndex=2;
	            	btn[bannernum].style.background="#fff";
                bigbox.style.backgroundColor=banbg[bannernum];
                bannerbox.style.backgroundColor=banbg[bannernum];

	       	}
            
            banner.onmouseover=function(){

            	clearInterval(bannert)
            	
            }
            banner.onmouseout=function(){

            	bannert=setInterval(bannerchange,3000)
            	
            }
//banner-left
      var smallbox=$(".smlbox");         //左边每一个小块
      var bl_conbox=$(".bl-conbox")[0];  //右边的容器
      var conbox=$(".conslogos-box");    //右边的内容
      var bigbox=$(".bigbannerbox")[0];
      var allit=$(".aitem");
      var colorarr=["#Ec677C","#427DEF","#6347ED","#Ec677C","#6347ED","#427DEF","#6347ED","#F7A945","#F7A945","#427DEF","#Ec677C","#427DEF","#F7A945","#19C8A9","#Ec677C","#19C8A9"];
          
      for (var i = 0; i < smallbox.length; i++) {
        smallbox[i].index=i;
        smallbox[i].onmouseover=function(){
          var  aitem=$(".aitem",smallbox[this.index])
            bl_conbox.style.display="block";
            for(var j = 0; j < smallbox.length; j++){
              conbox[j].style.display="none";
              smallbox[j].style.background="#ededed";
              smallbox[j].style.color="#000";
              for (var i = 0; i < allit.length; i++) {
                allit[i].style.color="#000";
              };
            }
            conbox[this.index].style.display="block";
            this.style.background="#fff";
            this.style.color=colorarr[this.index];
            for (var i = 0; i < aitem.length; i++) {
              aitem[i].style.color=colorarr[this.index];
            };
        }
         
       hover(bl_conbox,function(){},function(){
          bl_conbox.style.display="none";
          for (var i = 0; i < smallbox.length; i++) {
             var  aitem=$(".aitem",smallbox[i])
             smallbox[i].style.background="#ededed";
             smallbox[i].style.color="#000";

              for (var j = 0; j < aitem.length; j++) {
                aitem[j].style.color="#000";
              };
              
          };
          
         
        })
        hover(bigbox,function(){},function(){
          bl_conbox.style.display="none";
          for (var i = 0; i < smallbox.length; i++) {
              var  aitem=$(".aitem",smallbox[i])
              for (var j = 0; j < aitem.length; j++) {
                aitem[j].style.color="#000";
              }
              smallbox[i].style.background="#ededed";
              smallbox[i].style.color="#000";
          }
        })

      }

// 顶部 drop
   var dropup=$(".dropup");
   var drop=$(".drop");
   
   for (var i = 0; i < dropup.length; i++) {
     dropup[i].index=i;
     dropup[i].onmouseover=function(){
         drop[this.index].style.display="block";
         this.style.background="#fff";
          var a=$("a",this)[0];
          a.style.color="#c40000";
     }
     dropup[i].onmouseout=function(){
           drop[this.index].style.display="none";
           this.style.background="";
           var a=$("a",this)[0];
           a.style.color="#999";
     }
   }

//nav动画
      var himg=$(".hover_img")
      var navlink=$(".navlink")
     
      for (var i = 0; i < navlink.length; i++) {
        navlink[i].index=i;
        navlink[i].onmouseover=function(){

          animate(himg[this.index],{top:-12},100)
          himg[this.index].style.display="block";

        }
        navlink[i].onmouseout=function(){
          animate(himg[this.index],{top:-5},100)
          himg[this.index].style.display="none";
        }

      }
       
       
//侧边栏
      var box=getClass("box");
      var boxarr=["#F7A831",'#3bc7b0',"#F15453","#64C333","#0AA6E8","#EA5F8D","#000","#000"]
      for (var i = 0; i < box.length; i++) {
            box[i].index=i;
            box[i].onmouseover=function(){
                  box[this.index].style.background=boxarr[this.index]
            }
            box[i].onmouseout=function(){
                  this.style.background="rgba(0,0,0,.6)";
            }
      }

    

//右
      var tab=$(".tab")
      var lx=$(".lingxing")
      var r1=$(".r1")
      for (var i = 0; i < r1.length; i++) {
            r1[i].index=i;
            r1[i].onmouseover=function(){
            animate(tab[this.index],{right:35,opacity:1},300)
            tab[this.index].style.display="block"
            
            animate(lx[this.index],{right:28,opacity:1},300)
            lx[this.index].style.display="block"
            }
            r1[i].onmouseout=function(){
            animate(tab[this.index],{right:70,opacity:0},300)
            tab[this.index].style.display="none"
            
            animate(lx[this.index],{right:60,opacity:0},300)
            lx[this.index].style.display="none"
            }
            
      }


// 楼层跳转
 //返回顶部
     var totop=$(".totop")[0];
     var obj=getWindow();
     totop.onclick=function(){
      animate(obj,{scrollTop:0})
     }

    //滚动到一定距离后出现浮动导航
    var rightyou=$(".dingwei")[0];
    var topfixed=$(".top_fixed")[0];
    // window.onscroll=function(){
    //   var st=obj.scrollTop;
    //   if(st>670){
    //      rightyou.style.display="block"
    //   }else{
    //      rightyou.style.display="none"
    //   }

    // }

    //跳转
    var contents2=$(".content-tm");
    var floorbtns=$(".floorbtn")
    var chuangkou=getWindow();
    for (var i = 0; i < floorbtns.length; i++) {
      floorbtns[i].index=i;
      
      floorbtns[i].onclick=function(){
        var ot=contents2[this.index].offsetTop;
        animate(chuangkou,{scrollTop:ot})
        
      }
    }

// 按需加载图片

//     var imgarr=$("img")
//     for (var i = 0; i < imgarr.length; i++) {
//       imgarr[i].datasrc=imgarr[i].src;
//       imgarr[i].src=""
//     };
//     var bheight=document.documentElement.clientHeight;

//     for (var j = 0; j < imgarr.length; j++) {

//       if(getPosition(imgarr[j]).y<bheight){
//           imgarr[j].src=imgarr[j].datasrc;
//       }
//     }
// //优化
    
//     // var bheight=document.documentElement.clientHeight;
//     // for (var i = 0; i < imgarr.length; i++) {
//     //   if(getPosition(imgarr[i]).y<bheight){
//     //       imgarr[i].datasrc=imgarr[i].src;
          
//     //   }else{
//     //     imgarr[i].datasrc=imgarr[i].src;
//     //       imgarr[i].src=""

//     //   }
//     // }
    

    window.onscroll=function(){
      var st=chuangkou.scrollTop;
      var st=obj.scrollTop;
      if(st>630){
         topfixed.style.display="block";
      }else{
         topfixed.style.display="none";
      }
      if(st>670){
         rightyou.style.display="block";
      }else{
         rightyou.style.display="none";
      }
      // for (var i = 0; i < imgarr.length; i++) {
      //   if((st+bheight)>getPosition(imgarr[i]).y){
      //     imgarr[i].src=imgarr[i].datasrc;
      //   }
      // }
    }


//图片移动
   var  movetu=$(".movetu")
   var  grid=$(".grid")

   for (var i = 0; i < movetu.length; i++) {
     tumove(movetu[i],grid[i])
   };
   function  tumove(movetu,grid){
       grid.onmouseover=function(){
         animate(movetu,{right:20},600)
       }
       grid.onmouseout=function(){
         animate(movetu,{right:0},600)
       }
   }

//图片放大
   var  imgfangdabox=$(".img-fangda-box");
   var  imgfangda=$(".img-fangda");
   for (var i = 0; i < imgfangda.length; i++) {
         fangda(imgfangdabox[i],imgfangda[i])
          }
         function fangda(imgfangdabox,imgfangda){
       imgfangdabox.onmouseover=function(){
          animate(imgfangda,{width:140,height:140},600)
          
       }
       imgfangdabox.onmouseout=function(){
          animate(imgfangda,{width:130,height:130},600)
       }
 } 

// 文字滚动

      var act_title=$(".act-innerbox");
      for (var i = 0; i < act_title.length; i++) {
           act_move(act_title[i]);
      };
      function act_move(act_title){
        setInterval(function(){
        animate(act_title,{marginTop:-30},function(){
          var first=getFirst(act_title);
          act_title.appendChild(first);
          this.style.marginTop="0";
        })
      },2000)
      }
       
      








})