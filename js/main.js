$(window).scroll(function() {
  let height = $(window).scrollTop();

  if(height >= 10) {
    $('.header__rightMenu').addClass('header__rightMenu__adaptive');
    $('.rightMenu__social').addClass('rightMenu__social__adaptive');
    $('.fb__link').addClass('fb__link__adaptive');
    $('.header__sandwich').addClass('right__position');

    $('.header').addClass('header-adaptive');
    $('.nav__item .item__img').addClass('item__img-adaptive');

  } else {
    $('.header__rightMenu').removeClass('header__rightMenu__adaptive');
    $('.rightMenu__social').removeClass('rightMenu__social__adaptive');
    $('.fb__link').removeClass('fb__link__adaptive');
    $('.header__sandwich').removeClass('right__position');

    $('.header').removeClass('header-adaptive');
    $('.nav__item .item__img').removeClass('item__img-adaptive');
  }
});

scroll = document.body.scrollTop;
if(document.querySelector('.history_main .wrap .double')) {
  histImgs = document.querySelectorAll('.history_main .wrap .double');
}
if(document.querySelector('.fade_up')) {
  fadeUps = document.querySelectorAll('.fade_up');
}
windowHeight = window.innerHeight;
if(document.querySelector('.wow-right')) {
  wowItems = document.querySelectorAll('.wow-right');
}
window.addEventListener('scroll', function() {
  scroll = window.pageYOffset || document.documentElement.scroll;
  if(document.querySelector('.history_main .wrap .double')) {
    for(i=0;i<histImgs.length;i++){
      tops = histImgs[i].getBoundingClientRect().top;
      if(tops<parseInt(windowHeight*.5)) {
        histImgs[i].classList.add('active')
      } else {
        histImgs[i].classList.remove('active')
      }
    }
  }
  if(document.querySelector('.fade_up')) {
    for(i=0;i<fadeUps.length;i++){
      tops = fadeUps[i].getBoundingClientRect().top;
      if(tops<parseInt(windowHeight*.5)) {
        fadeUps[i].classList.add('active')
      } else {
        fadeUps[i].classList.remove('active')
      }
    }
  }

  if(document.querySelector('.wow-right')) {
    for(i=0;i<wowItems.length;i++){
      tops = wowItems[i].getBoundingClientRect().top;
      if(!wowItems[i].classList.contains('wdel')){
        if(tops<parseInt(windowHeight*.6)) {
          wowItems[i].classList.add('active')
        }
      } else {
        if(tops<parseInt(windowHeight*.5)) {
          wowItems[i].classList.add('active')
        }
      }

    }
  }

});
if(document.querySelector('.preloader')){
  setTimeout(function(){

    document.querySelector('.preloader .load').classList.add('active')
  },500);
  window.onload = function(){
    setTimeout(function(){
      document.querySelector('.preloader').classList.add('inactive');
      document.querySelector('.content').classList.add('active');
    },4000)
  }
}

$(window).scroll(function() {
  let winScroll = $(window).scrollTop() -1600;
  let height = 1079;
  let scrolled = (winScroll / height) * 100;

  if (scrolled >= 100) {
    return;
  } else {
    document.getElementById("myBar").style.width = scrolled + "%";
  }
});

// To TOP Button
$(window).scroll(function() {
  let height = $(window).scrollTop();

  if(height >= 600) {
    $('.to__top').addClass('to__top-adaptive');
  } else {
    $('.to__top').removeClass('to__top-adaptive');
  }
});
// Slow scroll
(function($) {
  $(function() {
    $('.to__top').click(function() {
      $('html, body').animate({scrollTop: 0},500);
      return false;
    })
  })
})(jQuery)

// Scroll bottom
$(document).ready(function(){
  $(".bottom__arrow").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
});

let number = document.querySelector('.num1'),
number2 = document.querySelector('.num2'),
number3 = document.querySelector('.num3'),
number4 = document.querySelector('.num4'),

numberTop = number.getBoundingClientRect().top,
numberTop2 = number2.getBoundingClientRect().top,
numberTop3 = number3.getBoundingClientRect().top,
numberTop4 = number4.getBoundingClientRect().top,

start = 0, end = 12;
start2 = 0, end2 = 200;
start3 = 0, end3 = 8;
start4 = 0, end4 = 24;


window.addEventListener('scroll', function onScroll() {
  if($(window).scrollTop() >= $('.num1').offset().top - $(window).height()+100 ) {
    this.removeEventListener('scroll', onScroll);
    let interval = setInterval(function() {
      number.innerHTML = ++start;

      if(start == end) {
        clearInterval(interval);
      }
    }, 160);
  }
});

window.addEventListener('scroll', function onScroll2() {
  if($(window).scrollTop() >= $('.num2').offset().top - $(window).height()+100 ) {
    this.removeEventListener('scroll', onScroll2);
    let interval2 = setInterval(function() {
      number2.innerHTML = ++start2;

      if(start2 == end2) {
        clearInterval(interval2);
      }
    }, 10);
  }
});

window.addEventListener('scroll', function onScroll3() {
  if($(window).scrollTop() >= $('.num3').offset().top - $(window).height()+100 ) {
    this.removeEventListener('scroll', onScroll3);
    let interval3 = setInterval(function() {
      number3.innerHTML = ++start3;

      if(start3 == end3) {
        clearInterval(interval3);
      }
    }, 250);
  }
});

window.addEventListener('scroll', function onScroll4() {
  if($(window).scrollTop() >= $('.num4').offset().top - $(window).height()+100 ) {
    this.removeEventListener('scroll', onScroll4);
    let interval4 = setInterval(function() {
      number4.innerHTML = ++start4;

      if(start4 == end4) {
        clearInterval(interval4);
      }
    }, 85);
  }
});


// Menu btn
function btnMenu(x) {
  x.classList.toggle("change");
  $( ".hidden__menu" ).toggle('.hidden__menu-active');
}

// Links AJAX switcher
let workLink = document.querySelectorAll('.services__block > a');
let txtBlocks = document.querySelectorAll('.txt__block');

[...workLink].forEach((el, index) => {
  el.addEventListener('click', (event) => {
    let target = event.target;
    event.preventDefault();

    if (target.tagName !== 'A') {
      target = target.parentNode;
      removePrev();
      target.classList.add('active__servBlock');
      txtBlocks[index].classList.add('txt__block-active');
    } else {
      removePrev();
      target.classList.add('active__servBlock');
      txtBlocks[index].classList.add('txt__block-active');
    }
  })
});

function removePrev() {
  [...txtBlocks].forEach(item => {
    item.classList.remove('txt__block-active');
  });
  [...workLink].forEach(item => {
    item.classList.remove('active__servBlock');
  });
}
// Vide autoplay off
$(document).ready(function() { 
  let media = $('video').not("[autoplay='autoplay']");
  let tolerancePixel = 700;

  function checkMedia(){
    let scrollTop = $(window).scrollTop() + tolerancePixel;
    let scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

    media.each(function(index, el) {
      let yTopMedia = $(this).offset().top;
      let yBottomMedia = $(this).height() + yTopMedia;

      if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
        $(this).get(0).play();
      } else {
        $(this).get(0).pause();
      }
    });
  }
  $(document).on('scroll', checkMedia);
});

// Zubets JS START
if(document.querySelector('.drop-down-catalog')){
  headerMenuButts = document.querySelector('.header .nav__link');
  dropCatalog = document.querySelector('.drop-down-catalog');
  headerMenuButts.onclick = function(){
    if(!dropCatalog.classList.contains('active')) {
      dropCatalog.classList.add('active');
      setTimeout(function(){
       dropCatalog.classList.add('vis');
     },400)
    } else {
     dropCatalog.classList.remove('vis');
     setTimeout(function(){
       dropCatalog.classList.remove('active');
     },400)
   }
 }
}
if(document.querySelector('.products_main')){
  let controls = document.querySelectorAll('.products_main .controls .item');
  for(i=0;i<controls.length;i++){
    controls[i].onclick = changeProductsMain(i);
  }
  function changeProductsMain(ind){
    return function(evt){
      evt.preventDefault();
      for(i=0;i<controls.length;i++){
        controls[i].classList.remove('active');
      }
      controls[ind].classList.add('active');
    }
  }
}
$(document).ready(function () {
  $("#owl-gal").owlCarousel({
    navigation: false,
    navigationText: ['&lsaquo;','&rsaquo;'],
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    afterInit: makePages,
    afterUpdate: makePages
  });

  function makePages() {
    $.each(this.owl.userItems, function(i) {
      $('.owl-controls .owl-page').eq(i)
      .css({
        'background': 'url(' + $(this).find('img').attr('src') + ')',
        'background-size': 'cover'
      })
    });
  }

  $(".owl-pagination").owlCarousel({
    items: 3,
    singleItem: false,
    navigation: false,
    pagination: false
  });
  
});
// Zubets


// slider Bodya
$(function() {
  // Owl Carousel
  let owl = $("#carousel1");
  owl.owlCarousel({
    items: 5,
    margin: 15,
    loop: true,
    nav: false,
    pagination: false
  });
});
if(document.querySelector('.contacts_main .content')) {
  ctsButts = document.querySelectorAll('.contacts_main .controls .items a');
  crAreas = document.querySelectorAll('.contacts_main .content > div');
  for(i=0;i<ctsButts.length;i++){
    ctsButts[i].onclick = switchMap(i); 
  }
  function switchMap(ind) {
    return function(evt){
      evt.preventDefault();
      for(i=0;i<crAreas.length;i++){
        crAreas[i].style.cssText='z-index:1;';
      }
      for(i=0;i<ctsButts.length;i++){
        ctsButts[i].classList.remove('active')
      }
      ctsButts[ind].classList.add('active')

      crAreas[ind].classList.add('act');
      crAreas[ind].classList.add('wow-right','wow-stay');
      setTimeout(function(){
        crAreas[ind].style.cssText='z-index:2;';
        crAreas[ind].classList.add('active');
      },400);
      setTimeout(function(){
       for(i=0;i<crAreas.length;i++){
        if(i != ind){
          crAreas[i].classList.remove('act');
          crAreas[i].classList.remove('wow-right','wow-stay','active');
        }
        
      }
    },800);
      
    }
  }
}
// Google 
google.maps.event.addDomListener(window, 'load', init);
function init() {
  var mapOptions = {
    zoom: 16,
    scrollwheel: false,
    // disableDefaultUI: true,
    mapTypeId: 'satellite',
    center: new google.maps.LatLng(50.446183, 30.416336),
    styles: [{
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#f5f5f5"
      }
      ]
    },
    {
      "elementType":"labels.icon",
      "stylers":[
      {
        "visibility":"on"
      }
      ]
    },
    {
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#616161"
      }
      ]
    },
    {
      "elementType":"labels.text.stroke",
      "stylers":[
      {
        "color":"#f5f5f5"
      }
      ]
    },
    {
      "featureType":"administrative.land_parcel",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#bdbdbd"
      }
      ]
    },
    {
      "featureType":"poi",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#eeeeee"
      }
      ]
    },
    {
      "featureType":"poi",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#757575"
      }
      ]
    },
    {
      "featureType":"poi.park",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#e5e5e5"
      }
      ]
    },
    {
      "featureType":"poi.park",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#9e9e9e"
      }
      ]
    },
    {
      "featureType":"road",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#ffffff"
      }
      ]
    },
    {
      "featureType":"road.arterial",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#757575"
      }
      ]
    },
    {
      "featureType":"road.highway",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#dadada"
      }
      ]
    },
    {
      "featureType":"road.highway",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#616161"
      }
      ]
    },
    {
      "featureType":"road.local",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#9e9e9e"
      }
      ]
    },
    {
      "featureType":"transit.line",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#e5e5e5"
      }
      ]
    },
    {
      "featureType":"transit.station",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#eeeeee"
      }
      ]
    },
    {
      "featureType":"water",
      "elementType":"geometry",
      "stylers":[
      {
        "color":"#c9c9c9"
      }
      ]
    },
    {
      "featureType":"water",
      "elementType":"labels.text.fill",
      "stylers":[
      {
        "color":"#9e9e9e"
      }
      ]
    }]
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.446183, 30.416336),
    map: map,
    title: 'Fort',
    // icon: '/catalog/view/theme/pgt/img/map-icon.png'
  });
}