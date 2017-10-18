// tema_golf_banner.js

(function($){
  // +++++++ 변수 지정
  var banner_box = $('.bannerBox');
  // var ul = banner_box.children('ul');
  // var li = ul.children('li');
  var timed = 1500;
 


function repeat(){
  banner_box = $('.bannerBox');
  var ul = banner_box.children('ul');
  var li = ul.children('li');// 위치를다시 파악해주지 않으면 에러발생하기 때문에 재 확인해줌.
  var first_banner = li.first();
 console.log(li);
  // 0. 처음에는 코사무이 허니문 베너가 보이도록 처리
  //   (하기 delay(2000)으로 처리.)
  // +++++++ 1. 한칸씩 왼쪽으로 이동하도록 처리
  ul.animate({'marginLeft':-100+'%'}, timed, function(){
  // +++++++ 2. 이동 한 후에는 첫번째가 된 이미지를 마지막으로 이동하도록 처리
    ul.append(first_banner).css({'marginLeft':0});
  });
}//function repeat끝. 
  
  setIn();

  var autoMove; // 일단 변수 만든 후, 하기에서 할당!


  // +++++++ 3. 자동으로 반복하도록 처리(마우스 mouseenter / mouseleave)
  //   ---->  상기 1, 2번을 전체를 함수로 감싸기!function(repeat)
  function setIn(){
    autoMove = setInterval(function(){ repeat(); }, timed*4);
  }
  function clearIn(){
    clearInterval(autoMove);
  }
  
  // 마우스 올리고 내렸을때!!
  banner_box.on({'mouseenter':clearIn, 'mouseleave':setIn});
  
})(this.jQuery);  