///////////rem
 function initFontSize() {
   var screenWidth;
   var html = document.getElementsByTagName("html")[0];
   if (window.innerWidth) {
       screenWidth = window.innerWidth;
   } else if ((document.body) && (document.body.clientWidth)) {
       screenWidth = document.body.clientWidth;
   }
   html.style.cssText = 'font-size: '+100 * screenWidth / 750 + 'px !important';
   if (iphoneX()) {
     $('body').addClass('iphoneX')
   } else {
     $('body').removeClass('iphoneX')
   }
 }
 initFontSize()
 window.onresize = () => {
     initFontSize()
 }
 function iphoneX(){
 return /iphone/gi.test(navigator.userAgent) && (window.innerHeight == 812 && window.innerWidth == 375)
}
/////////////按钮点击缩放
$("button").click(function () {
  $(this).children('img').addClass('buttonScale')
  var that = this
  setTimeout(function () {
    $(that).children('img').removeClass('buttonScale')
  },500)
})
$("a").click(function () {
  $(this).children('img').addClass('buttonScale')
  var that = this
  setTimeout(function () {
    $(that).children('img').removeClass('buttonScale')
  },500)
})
//////////获取地址栏参数
function getQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

///////////分享海报
function showShare () {
  $(".jackpot").addClass('jackpotShow')
  setTimeout(function() {
  $(".jackpot").css('transform', 'scale(1)')
  $(".jackpot").css('opacity', '1')
  },100)
}
////////关闭分享
$(".closeShare").click(function () {
  location.href = '../newYear/index.html'
})