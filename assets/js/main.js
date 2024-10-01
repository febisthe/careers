//한국-영어 사이트 변안
$('#header .global').click(function(){
  $('#header .en').toggle();
  $('#header .ko').toggleClass('on');
})

//서치창 목록 색깔 변화
$('select').change(function(){
  $(this).css('color','#000')
})

//비주얼 동영상 슬라이드
const bannerSlide = new Swiper('.sc-visual .swiper',{
  autoplay: {
    delay:3000,
  },
  allowTouchMove:false,
  loop: true,
})

//피플 슬라이드
const peopleSlide = new Swiper('.sc-people .swiper',{
  slidesPerView: 1,
  spaceBetween : 30,

  navigation:{
    nextEl:".common-btn .next",
    prevEl:".common-btn .prev",
  },

  breakpoints:{
    1025:{
      slidesPerView: 1.1,
      spaceBetween : 30,
    },
  }
})

// 베네핏 슬라이드
const benefitsSlide = new Swiper('.sc-benefits .swiper',{
  slidesPerView: 1,
  spaceBetween : 30,
  navigation:{
    nextEl:".common-btn .next",
    prevEl:".common-btn .prev",
  },
  breakpoints:{
    768:{
      slidesPerView: 2,
    },
    1025:{
      slidesPerView: 3,
    },
  }
})

// 관련사이트
$('#footer .btn-related').click(function(){
  $(this).toggleClass('active').siblings('.list-related').toggle()
})

// 반응형 - 서브메뉴버튼
$('#header .btn-menu').click(function(){
  $(this).toggleClass('close');
  $('.side-nav').toggleClass('on');
  $('body').toggleClass('hidden');
})

// 반응형 - 서브메뉴 - global (실패)
$('#header .list-side label').click(function(){
  if (!$(this).siblings('input').prop("checked")) {
    $(this).parents('.list-side.language').find('li input').prop("checked",true)
  }else{
    $(this).parents('.list-side.language').find('li input').prop("checked",false)
  }
})

//모바일 - 서브메뉴 슬라이드
$('#header .side-nav .list-side .side-item').click(function(e){
  e.preventDefault();
  $(this).children('.list-sub').stop().toggle();
  $('.ico-arrow').toggleClass('down')
});

// 모바일 - 모든 체크박스 선택
$('.chek-box label').click(function(){
  if(!$(this).siblings('input').prop('checked')){
    $(this).parents('.depth2').find('.item2 input').prop('checked',true)
  } else {
    $(this).parents('.depth2').find('.item2 input').prop('checked',false)
  }
})

// 모바일 - 전체 선택 된 체크박스 전부 지우기
$('.btn-clear').click(function(){
  $('.list-career input').prop("checked",false)
})

// 모바일 - 검색창 여닫
$('.sc-teams .btn-search').click(function(){
  $('.search-wrap2').addClass('on');
  $('body').addClass('hidden');
});

$('.sc-teams .search-wrap2 .btn-close').click(function(){
  $('.search-wrap2').removeClass('on');
  $('body').removeClass('hidden');
});

// 모바일 - 검색창 메뉴 슬라이드
$('.sc-teams .search-wrap2 .career-item .depth1 .btn-title').click(function(){
  $(this).toggleClass('on').siblings('.depth2').stop().toggle();
});

$('.sc-teams .search-wrap2 .career-item .depth2 .item2').click(function(){
  $(this).toggleClass('on').children('.depth3').stop().toggle();
});
