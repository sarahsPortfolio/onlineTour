// slideBanner_02.js

(function($){
  // 1. slide indicator를 통해 배너가 움직이도록 처리


// 1. 기능 처리 - 좌,우 버튼은 임시로 숨김처리 - 내가 쓸 것만 일단 보고, 확인하려고 숨김처리 하는 것임.
  // $('.slide_btn').hide();
  // indicator를 클릭 시 해당하는 값이 이동.

  var indi = $('.indigator');
  var indi_li = indi.children();
var view = $('.view_box');
 var viewList = [];
 var viewLength = view.length;
 var i =0;
var vTop;
for(; i<viewLength; i++){
  vTop = view.eq(i).offset().top;
  // console.log(vTop);
  viewList[i] = vTop;
}
  var i = 0; // 하기 function밖에 써야함! 안에 쓰면 안됨.
 console.log(viewList);

// 좌,우 버튼 클릭 시 일정 위치에서 사라지거나, 나타나게 만드는 기능을 함수화 처리.
// 상기 주석처리된 기능과 같지만, 하기와 같이 한 줄로 간단하게 써줌. 


// 함수안의 함수를 줄여쓰는 방법
// 함수.on('기능', 원하는 함수);  ---> 공식


  indi_li.on('click',['a'], function(e){
    e.preventDefault();

    var _thisEq = $(this).index();
    // console.log(_thisEq);  // 순서확인 검증

    $('html,body').animate({scrollTop:viewList[_thisEq]});
    indi_li.eq(_thisEq).addClass('active').siblings().removeClass('active');
    //_this.addClass('active').siblings().removeClass('active');
   i = _thisEq;

 console.log(viewList[_thisEq]);
  }); // indi_li.on끝.



// 2번 좌, 우 기능을 위해 indicator임시로 숨김.
  // indi.hide();


  







})(this.jQuery);