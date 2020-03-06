// $(".drop-btn").click(function(){
// 	$(".menu").toggleClass('active');
// })

var dropBtn = document.querySelector('.drop-btn');
var menu = document.querySelector('.menu');

var stickTop = document.querySelector('.stick-top');
var stickMid = document.querySelector('.stick-mid');
var stickBot = document.querySelector('.stick-bot');

dropBtn.addEventListener('click' , show)

function show(){
	menu.classList.toggle('active')
	stickTop.classList.toggle('top-move');
	stickMid.classList.toggle('mid-move');
	stickBot.classList.toggle('bot-move');
}

// function windowSize(){
//     if ($(window).width() <= 480){
//         $('.team-box').slick({
//         	arrows: false,
//         	dots: true,
//         	dotsClass : 'team-dots',
//         	mobileFirst : true,
//         })
//     } 
// }

// $(window).on('load resize',windowSize);

// 